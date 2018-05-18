import React, { Component } from 'react';
import moment from 'moment';

class Transaction extends Component{
  render(){
    let from = this.props.from
    let to = this.props.to
    let description = this.props.description
    let amount = this.props.amount
    let date = this.props.date
    return (
      <li className="transaction">
         <table className="transaction__table">
           <tbody>
              { from &&
               <tr>
                 <th>From:</th>
                 <td>{from}</td>
               </tr>
              }
              { to &&
                <tr>
                  <th>To:</th>
                  <td>{to}</td>
                </tr>
              }
              <tr>
               <th>description:</th>
               <td>{description}</td>
              </tr>
              <tr>
               <th>amount:</th>
               <td>{amount}<span> €</span></td>
              </tr>
              <tr>
               <th>Date:</th>
              <td>{ moment(date).format("MMM DD, YYYY") }</td>
              </tr>
           </tbody>
         </table>
       </li>
    );
  }
}

export default Transaction
