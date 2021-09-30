import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import listData from "./data"
import "./style.less"

// interface propType {

// }

export default class TodoList extends Component {
    // constructor(props: propType) {
    //     super(props);
    // }

    render() {
        return (
            <div className="page">
                <Add></Add>
                <List data={listData}></List>
            </div>
        )
    }
}
