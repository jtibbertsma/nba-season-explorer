import React, { Component } from 'react';
import Theme from './components/providers/Theme';
import ReduxStore from './components/providers/ReduxStore';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <ReduxStore>
        <Theme>
          <Layout />
        </Theme>
      </ReduxStore>
    );
  }
}

export default App;
