import React, { Component } from 'react'
import "../index.scss"
export default class MsgDetail extends Component {
    render() {
        let {detailMsg} = this.props
        return (
            <div>
                <div  dangerouslySetInnerHTML={{__html:detailMsg}}
                className="detail_msg" ></div>
            </div>
        )
    }
}
