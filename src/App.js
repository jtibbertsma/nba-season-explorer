import React, { Component } from 'react';
import Theme from './components/providers/Theme';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <Theme>
        <Layout />
      </Theme>
    );
  }
}

export default App;
