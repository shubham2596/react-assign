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
            value:null,
            _inputElemets: [],
            items: [],
        }
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
        e.preventDefault();
            var inputElement = e.target.childNodes[0];
            var newItem = inputElement.value;
            var id = e.target.dataset.id;
            this.props.addTag(id, newItem);
    }
    renderItems(listItems) {
        if (listItems !== undefined || listItems.length > 0)
            return listItems.map((item, index) => {
                return (
                    <li key={item.key}>
                        <div>
                            <input type="checkbox"
                                onClick={() => this.strike(item)}
                            />
                            <div id={item.key}>
                                {item.text}
                            </div>
                            <div className="header">
                                <form key={item.key} data-id={index} onSubmit={this.addTag}>
                                    <input data-id={index} ref={(a) => {
                                        this._inputElement = a
                                        this.item = item
                                    }} placeholder="enter tag" />
                                    <button type="submit">add</button>
                                </form>
                            </div>
                            <Tags entries={item.tags} />
                        </div>
                    </li>
                );
            });
            else {
                return null;
            }
    }

    render() {
        var todoEntries = this.props.entries;
        return (
            <ul className="theList">
                {this.renderItems(todoEntries)}
            </ul>
        );
    }
}

export default TodoItems;