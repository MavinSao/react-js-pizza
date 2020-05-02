import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items';
import Menu from './components/Menu';
import ListItem from './components/ListItem';
import React, { Component } from 'react';
import img1 from './image/pizza.jpg';
import img2 from './image/chicken.jpg';
import img3 from './image/burger.jpeg';
import img4 from './image/coca.jpg';

export default class componentName extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Pizza',
                    image: img1,
                    amount: 0,
                    price: 15,
                    total: 0,
                },
                {
                    id: 2,
                    name: 'Chicken',
                    image: img2,
                    amount: 0,
                    price: 10,
                    total: 0,
                },
                {
                    id: 3,
                    name: 'Burger',
                    image: img3,
                    amount: 0,
                    price: 5,
                    total: 0,
                },
                {
                    id: 4,
                    name: 'Coca',
                    image: img4,
                    amount: 0,
                    price: 2,
                    total: 0,
                }
            ]
        }
    }

    increase = id => {
        var newitems = [...this.state.items]
        newitems[id].amount += 1
        newitems[id].total = newitems[id].amount * newitems[id].price
        console.log(newitems);
        this.setState({
            items: newitems
        })
    }

    delete = id => {
        var newitems = [...this.state.items]
        newitems[id].amount -= 1
        newitems[id].total = newitems[id].amount * newitems[id].price
        console.log(newitems);
        this.setState({
            items: newitems
        })
    }

    reset = () => {
        var newItems = [...this.state.items]
        var items = newItems.map(item => {
            item.amount = 0
            item.total = 0
            return item
        })
        this.setState({
            items: items
        })

    }

    render() {
        return (
            <div>
                <Menu />
                <Items items={this.state.items} onDelete={this.delete} onIncrease={this.increase} onReset={this.reset} />
                <ListItem items={this.state.items} />
            </div>
        );
    }
}

