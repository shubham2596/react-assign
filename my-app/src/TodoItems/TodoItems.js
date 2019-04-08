/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable for-direction */
// eslint-disable-next-line for-direction
// eslint-disable-next-line getter-return
// eslint-disable-next-line no-compare-neg-zero
import React, { Component } from "react";
import FlipMove from "react-flip-move";
import './TodoItems.css';

class TodoItems extends Component {


    // handleCheckboxChange = event => 
    //     this.setState({ checked: event.target.checked })

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
        this.createTasks = this.createTasks.bind(this);
    }

    // delete(key) {
    //     this.props.delete(key);
    // }

    strike(key) {
        // this.strike
        this.setState({ checked: !this.state.checked })
        document.getElementById(key).style.textDecoration = 'line-through';
    }

    createTasks(item) {
        let checkbox_class = this.state.checked ? "before" : "after";
        return <li key={item.key}>
            <div id={item.key}>
                <input type="checkbox"
                    // className={checkbox_class}
                    //    onChange={this.handleCheckboxChange}
                    onClick={() => this.strike(item.key)}
                />
                {item.text}
            </div>
        </li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={500} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;