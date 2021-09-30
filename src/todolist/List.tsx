import React, { Component } from 'react'

interface propType {
    data: { id: number, text: string }[]
}

export default class List extends Component<propType> {
    constructor(props: propType) {
        super(props)

        this.state = {

        }
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map(d => this.renderItem(d))
                    }
                </ul>
            </div>
        )
    }

    renderItem(item:{id:number,text:string}) {
        return (
            <li style={{ display: 'flex',alignItems: 'center',justifyContent:'space-between',marginBottom:'10px' }} key={item.id}>
                <div className="overflow-hidden" style={{width:"70%",textAlign:'left'}}>{item.text}</div>
                <div style={{width:'30%',textAlign:'right'}}>
                    <button className="btn btn-edit">修改</button>
                    <button className="btn btn-delete">删除</button>
                </div>
            </li>
        )
    }
}
