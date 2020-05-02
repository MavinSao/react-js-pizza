import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Item from './Item';
export default class Items extends Component {
    render() {
        let items = this.props.items.map(item =>
            <Col md={3} key={item.id}>
                <Item item={item} onDelete={() => this.props.onDelete(item.id - 1)} onIncrease={() => this.props.onIncrease(item.id - 1)} />
            </Col>
        )
        return (
            <div className="container">
                <h1 className="App my-4">FAST FOOD</h1>
                <Row>
                    {items}
                </Row>
                <Row>
                    <Col md={12} className="my-2">
                        <button className="btn btn-info mr-2" onClick={() => this.props.onReset()}>Reset</button>
                        <div className="badge badge-warning">{this.props.items.filter(item => item.amount > 0).length} foods</div>
                    </Col>
                </Row>
            </div>
        )
    }
}
