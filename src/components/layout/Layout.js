import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Chart from '../ui/Chart';
import ImportData from '../ui/ImportData';
import FilterType from '../ui/FilterType';

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    overflowY: 'hidden',
    overflowX: 'scroll',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#edecec'
    }
  },
  content: {
    flex: 1,
    paddingTop: '3em',
    [theme.breakpoints.up('sm')]: {
      padding: '2em'
    }
  },
});

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <AppBar />
        <div className={classes.body}>
          <div className={classes.content}>
            <Card>
              <CardContent>
                <Chart />
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={5}>
                    <ImportData />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <FilterType />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
