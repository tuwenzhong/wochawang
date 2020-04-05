import React, { Component } from 'react'

export default class NotFind extends Component {
    goHome=()=>{
        this.props.history.push("/home/wap")
    }
    render() {
        return (
            <div style={{width:"100%",boxSizing:"border-box",padding:"0 10px"}}>
               <div style={{height:"45px",lineHeight:"45px"}}>
                    <i className="iconfont icon-left" onClick={this.goHome}></i>
               </div>
               <h2>服务器未响应或找不到页面</h2> 
            </div>
        )
    }
}
