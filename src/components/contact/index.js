import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import "./index.scss"
//客服
export default class Contact extends Component {

    clickLeft=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (
            <div style={{height:"100vh",background:"#eee"}}>
                <div className="cartBox">
                  <NavBar
                    mode="light"
                    icon={<i className="iconfont icon-left" style={{color:"black"}} />}
                    onLeftClick={this.clickLeft}
                >
                    <div style={{height:"45px",lineHeight:"45px"}}>
                    <img src="http://www.chawo.com/wap/images/chawo-logo.png" style={{width:"40px",verticalAlign:"middle"}} />   
                    客服
                    </div>
                    
                </NavBar>             
                </div>

                <div style={{height:"45px"}}> </div>

                <div className="contact">
                    <p>电话:<a href="tel:087166666655">0871-6666 6655</a> </p>
                    <p>客服微信: 476261</p>
                    <p>客服QQ: 4001564001</p>

                    <img src="http://www.chawo.com/shop/templates/default/images/extra/chawo-weixin.jpg" alt="" />
                </div>

            </div>
        )
    }
}
