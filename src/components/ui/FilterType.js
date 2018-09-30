import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { setShowType } from '../../actions';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 12
    }
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class FilterType extends Component {
  _handleChange = event => {
    this.props.setShowType(event.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="show-type"
          className={classes.group}
          value={this.props.value}
          onChange={this._handleChange}
        >
          <FormControlLabel value="all"  control={<Radio />} label="All Games" />
          <FormControlLabel value="home" control={<Radio />} label="Home Only" />
          <FormControlLabel value="away" control={<Radio />} label="Away Only" />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default connect(
  state => ({
    value: state.filters.showType
  }),
  dispatch => bindActionCreators({
    setShowType
  }, dispatch)
)(withStyles(styles)(FilterType));
