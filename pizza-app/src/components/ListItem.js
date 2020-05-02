import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
export default class ListItem extends Component {
  render() {
    console.log(this.props.items);

    let filterItems = this.props.items.filter((item) => item.amount > 0);
    let allItems = filterItems.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.price}$</td>
        <td>{item.total}$</td>
      </tr>
    ));

    console.log(allItems);

    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{allItems}</tbody>
        </Table>
      </div>
    );
  }
}
