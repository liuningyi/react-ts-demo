import React, { Component } from 'react'

interface propType {

}
export default class Add extends Component {
    constructor(props: propType) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="输入你的待办项" />
            </div>
        )
    }
}
