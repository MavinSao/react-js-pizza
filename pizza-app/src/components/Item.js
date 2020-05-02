import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
export default class Item extends Component {
    render() {
        var { name, price, amount, total, image } = this.props.item;
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><h3>{name}</h3></Card.Title>
                        <Card.Text>
                            Price : {price}$
                        </Card.Text>
                        <div className="badge badge-warning p-2">{amount}</div>
                        <Button variant="primary" className="mx-2" onClick={() => this.props.onIncrease()}>Add</Button>
                        <Button variant="danger" disabled={amount === 0 ? true : false} onClick={() => this.props.onDelete()} >Delete</Button> <br />
                        <h4 className="my-3">total: {total}$</h4>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}
