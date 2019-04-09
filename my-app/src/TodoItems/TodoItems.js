/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable for-direction */
// eslint-disable-next-line for-direction
// eslint-disable-next-line getter-return
// eslint-disable-next-line no-compare-neg-zero
import React, { Component } from "react";
import './TodoItems.css';
import Tags from '../Tags/Tags';

class TodoItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            tags: [],
        }
        this.createTasks = this.createTasks.bind(this);
        this.addTag = this.addTag.bind(this);
    }

    strike(item) {
        this.setState({ checked: !this.state.checked })
        if (this.state.checked === false) {
            document.getElementById(item.key).style.textDecoration = 'line-through';
            this.props.changeposition(item,1);
        }
        else {
            document.getElementById(item.key).style.textDecoration = 'none';
            this.props.changeposition(item,0);
        }

    }


    addTag(e) {
        if (this._inputElement.value !== "") {
            var newItem = this._inputElement.value;
            var id = this._inputElement.dataset.id;
            var item = this.item;
            item.tags = item.tags.concat(newItem)
            this.props.addTag(item, id);
        }
        e.preventDefault();

    }

    createTasks(item, i) {
        return <li key={item.key}>
            <div>
                <input type="checkbox"
                    onClick={() => this.strike(item)}
                />
                <div id={item.key}>
                    {item.text}
                </div>
                <div className="header">
                    <form onSubmit={this.addTag}>
                        <input data-id={i} ref={(a) => {
                            this._inputElement = a
                            this.item = item
                        }} placeholder="enter tag" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <Tags entries={item.tags} />
            </div>
        </li>
    }


    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;