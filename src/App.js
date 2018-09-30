import React, { Component } from 'react';
import Theme from './components/providers/Theme';
import ReduxStore from './components/providers/ReduxStore';
import LoadData from './components/providers/LoadData';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <ReduxStore>
        <LoadData>
          <Theme>
            <Layout />
          </Theme>
        </LoadData>
      </ReduxStore>
    );
  }
}

export default App;
