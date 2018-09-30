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

const mapTeamToValue = team => ({ value: team, label: team });

class SelectTeams extends Component {
  constructor(props) {
    super(props);
    // Set default values from initial selectedTeams
    this.defaultValue = props.selectedTeams.map(mapTeamToValue);
  }

  _mapToValue = item => item.value;

  _handleChange = data => {
    this.props.setSelectedTeams(data.map(this._mapToValue));
  };

  render() {
    return (
      <Select
        isMulti
        defaultValue={this.defaultValue}
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
    options: state.data.teamList.map(mapTeamToValue),
    selectedTeams: state.filters.selectedTeams
  }),
  dispatch => bindActionCreators({
    setSelectedTeams
  }, dispatch)
)(SelectTeams);
