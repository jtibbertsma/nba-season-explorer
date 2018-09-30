import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { loadData, importData } from '../../actions';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit
  },
});

class ImportData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  _handleChange = event => {
    this.setState({value: event.target.value});
  }

  _handleImport = () => {
    const { value } = this.state;
    // Don't do anything unless there's at least one row
    if (value.length > 20) {
      this.setState({value: ''});
      this.props.importData(value);
    }
  }

  _handleReset = () => {
    this.setState({value: ''});
    this.props.loadData();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          label="Import Data"
          multiline
          rows="6"
          fullWidth
          helperText="Import new data in CSV format"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={this.state.value}
          onChange={this._handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this._handleImport}
        >
          Import Data
        </Button>
        <Button
          color="secondary"
          className={classes.button}
          onClick={this._handleReset}
        >
          Reset Data
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
    loadData,
    importData
  }, dispatch)
)(withStyles(styles)(ImportData));
