import React, { Component, Children } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default class Theme extends Component {
  static theme = createMuiTheme({
    
  });

  render() {
    return (
      <MuiThemeProvider theme={Theme.theme}>
        {Children.only(this.props.children)}
      </MuiThemeProvider>
    );
  }
}
