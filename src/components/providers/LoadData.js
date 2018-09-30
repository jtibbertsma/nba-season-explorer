import { Component, Children } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNeedLoadData, importData } from '../../actions';

class LoadData extends Component {
  componentDidMount() {
    this.checkData();
  }

  componentDidUpdate() {
    this.checkData();
  }

  // Load the default csv data if needLoadData is set to true
  checkData() {
    const { needLoadData, setNeedLoadData, importData } = this.props;
    if (needLoadData) {
      setNeedLoadData(false);
      fetch("/nba.csv")
        .then(response => {
          return response.ok ? response.text() : Promise.reject(response);
        })
        .then(rawData => {
          importData(rawData);
        })
        .catch(response => {
          console.error(response);
        });
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default connect(
  state => ({
    needLoadData: state.misc.needLoadData
  }),
  dispatch => bindActionCreators({
    setNeedLoadData,
    importData
  }, dispatch)
)(LoadData);
