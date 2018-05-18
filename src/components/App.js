import React, { Component } from 'react';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accountName: '',
      iban: '',
      balance: ''
    };
  }

  render() {
    return (
      <div>
        <Header
          accountName={ this.state.accountName }
          iban= { this.state.iban }
          balance={this.state.balance}
        />
      </div>
    )
  }
}

export default App
