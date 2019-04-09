/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
/* eslint-disable for-direction */
// eslint-disable-next-line for-direction
// eslint-disable-next-line getter-return
// eslint-disable-next-line no-compare-neg-zero
import React, { Component } from "react";


class Tags extends Component {
    constructor(props) {
        super(props);
        this.createTags = this.createTags.bind(this);
    }
    createTags(item) {
        return <li key={item}>
                {item}
        </li>
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTags);
        return (
            <ul>
                {listItems}
            </ul>
        )
    }

}

export default Tags;