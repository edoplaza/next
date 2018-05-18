import React, { Component } from 'react';

class Header extends Component {
  render() {
    let accountName = this.props.accountName
    let iban = this.props.iban
    let balance = this.props.balance

    return (
      <header className="header">
        <div className="header__inner container">
          <h1 className="header__title">Account info</h1>
          <div className="header__list">
            <h2 className="header__list-item">Name:<span>{accountName}</span></h2>
            <h2 className="header__list-item">Iban:<span>{iban}</span></h2>
            <h2 className="header__list-item">Balance:<span>{`${balance} €`}</span></h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
