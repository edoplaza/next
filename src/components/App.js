import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Transaction from './Transaction';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accountName: '',
      iban: '',
      balance: '',
      transactions: []
    };
  }
  componentDidMount() {
    axios.get('data/result.json')
      .then(response => {
        this.setState({
          accountName: response.data.account.name,
          iban: response.data.account.iban,
          balance: response.data.account.balance,
          transactions: response.data.transactions
        })
      });
  }
  render() {
    return (
      <div>
        <Header
          accountName={ this.state.accountName }
          iban= { this.state.iban }
          balance={this.state.balance}
          cosa={this.state.transactions}
        />
        <div className="transactions">
          <div className="transactions__inner container">
            <h2 className="transactions__title">Transactions</h2>
              <ul className="transactions__list">
                {
                  this.state.transactions.map(function(ad, i){
                    return <Transaction
                    key={i}
                    from={ad.from}
                    to={ad.to}
                    description={ad.description}
                    amount={ad.amount}
                    date={ad.date}
                  />
                  })
                }
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
