/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable for-direction */
// eslint-disable-next-line for-direction
// eslint-disable-next-line getter-return
// eslint-disable-next-line no-compare-neg-zero
import React, { Component } from "react";
import TodoItems from '../TodoItems/TodoItems';
import './TodoList.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.appendTag = this.appendTag.bind(this);
        this.changeposition = this.changeposition.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                tags:['heelo'],
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }


        e.preventDefault();

    }

    appendTag (id, newItem) {
        let items = this.state.items;
        var item = items[id];
        item.tags = item.tags.concat(newItem)
        var oldIndex = items.indexOf(item);
        var itemClone = items.slice();
        itemClone.splice(oldIndex,1);
        itemClone.splice(oldIndex,0,item);
        
        this.setState({
            items : itemClone
        })
    }

    changeposition(item,i){
        let items = this.state.items;
        let length = items.length;
        var oldIndex = items.indexOf(item);
        var newindex = i;
        if(newindex===1){
            newindex = length-1;
        }
        

        var itemClone = items.slice();
        itemClone.splice(oldIndex,1);
        itemClone.splice(newindex,0,item);
        
        this.setState({
            items : itemClone
        })

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                addTag={this.appendTag}
                changeposition={this.changeposition}
                />
            </div>
        );
    }
}

export default TodoList;