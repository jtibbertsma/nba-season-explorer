import React, { Component } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Chart from '../ui/Chart';

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

class Layout extends Component {
  render() {
    const { width, classes } = this.props;
    return (
      <div className={classes.main}>
        <AppBar />
        <div
          className={
            width === 'xs' || width === 'sm' ? (
              classes.bodySmall
            ) : (
              classes.body
            )
          }
        >
          <div
            className={
              width === 'xs' || width === 'sm' ? (
                classes.contentSmall
              ) : (
                classes.content
              )
            }
          >
            <Card>
              <CardContent>
                <Chart />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(Layout));
