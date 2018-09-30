import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import chroma from 'chroma-js';
import teamHexes from '../../util/teamHexes';
import { setSelectedTeams } from '../../actions';

const teamAlphas = Object.keys(teamHexes).reduce((alphas, key) => {
  alphas[key] = chroma(teamHexes[key]).alpha(0.2).css();
  return alphas;
}, {});

class SelectTeams extends Component {
  _mapToValue = item => item.value;

  _handleChange = data => {
    this.props.setSelectedTeams(data.map(this._mapToValue));
  };

  render() {
    return (
      <Select
        isMulti
        placeholder="Select Teams..."
        onChange={this._handleChange}
        options={this.props.options}
        styles={{
          option: (styles, { data, isFocused }) => ({
            ...styles,
            color: '#000',
            backgroundColor: isFocused ? teamAlphas[data.value] : null
          })
        }}
      />
    );
  }
}

export default connect(
  state => ({
    options: state.data.teamList.map(team => ({ value: team, label: team }))
  }),
  dispatch => bindActionCreators({
    setSelectedTeams
  }, dispatch)
)(SelectTeams);
