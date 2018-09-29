import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import autoprefixer from 'material-ui/utils/autoprefixer';
import withWidth from 'material-ui/utils/withWidth';
import { Card } from 'material-ui/Card';
import AppBar from './AppBar';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    backgroundColor: '#edecec',
    display: 'flex',
    flex: 1,
    overflowY: 'hidden',
    overflowX: 'scroll',
  },
  bodySmall: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: '2em',
  },
  contentSmall: {
    flex: 1,
    paddingTop: '3em',
  }
};

const prefixedStyles = {};

class Layout extends Component {
  render() {
    const { muiTheme, width } = this.props;
    if (!prefixedStyles.main) {
      // do this once because user agent never changes
      const prefix = autoprefixer(muiTheme);
      prefixedStyles.main = prefix(styles.main);
      prefixedStyles.body = prefix(styles.body);
      prefixedStyles.bodySmall = prefix(styles.bodySmall);
      prefixedStyles.content = prefix(styles.content);
      prefixedStyles.contentSmall = prefix(styles.contentSmall);
    }
    return (
      <div style={prefixedStyles.main}>
        <AppBar />
        <div
          style={
            width === 1 ? (
              prefixedStyles.bodySmall
            ) : (
              prefixedStyles.body
            )
          }
        >
          <div
            style={
              width === 1 ? (
                prefixedStyles.contentSmall
              ) : (
                prefixedStyles.content
              )
            }
          >
            <Card>
              
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(withWidth()(Layout));
