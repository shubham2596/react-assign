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


    // handleCheckboxChange = event => 
    //     this.setState({ checked: event.target.checked })

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            tags: [],
        }
        this.createTasks = this.createTasks.bind(this);
        this.addTag = this.addTag.bind(this);
    }

    // delete(key) {
    //     this.props.delete(key);
    // }

    strike(key) {
        // this.strike
        this.setState({ checked: !this.state.checked })
        document.getElementById(key).style.textDecoration = 'line-through';
    }


    addTag(e) {
        if (this._inputElement.value !== "") {
            var newItem = this._inputElement.value;
        
            this.setState((prevState) => {
                return {
                    tags: prevState.tags.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }    
        e.preventDefault();

    }

    createTasks(item) {
        return <li key={item.key}>
            <div id={item.key}>
                <input type="checkbox"
                    onClick={() => this.strike(item.key)}
                />
                {item.text}
                {/* <li>{item.tags}</li> */}
                {/* {item.tags.map(t => {
                    return <li>{t}</li>
                })} */}

                <div className="header">
                    <form onSubmit={this.addTag}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter tag">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>

                {/* {item.tags}={this.state.tags};
                {console.log(item.tags)}; */}
                <Tags entries={item} />
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
};

export default TodoItems;