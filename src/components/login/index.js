import React, { Component } from 'react'
import {NavBar,Toast,Button} from 'antd-mobile';
import {connect} from "react-redux"
import actionCreator from "@/store/actionCreator"
import "./index.scss"

@connect(store=>store,actionCreator)

class Login extends Component {
    clickLeft=()=>{
        this.props.history.push("/home/wap")
    }
    phoneCode=()=>{
        var phoneReg = /^1[3456789]\d{9}$/;
        if(phoneReg.test(this.phone.value)){
            this.props.buttonFalse()
        }else{
            Toast.fail("请输入正确手机号",1)
        }
    }

    land=()=>{
        if(this.span.innerText === this.code.value){
            sessionStorage.user = this.phone.value;
            if(this.props.location.state){
                console.log(this.props.location.state)
                if(!this.props.location.state.path){
                    this.props.history.push(this.props.location.state.substr(0,13)+this.props.location.state.substr(13))
                }else{
                    this.props.history.push(this.props.location.state.path,"login")
                }
            }else{
                this.props.history.push("/home/wap")
            }
        }else{
            Toast.fail("验证码错误",1)
        }
    }


    componentDidMount(){
        this.props.buttonTrue()
    }

    render() {
        return (
            <div className="login">
                <div className="cartBox">
                <NavBar
                    mode="light"
                    icon={<i className="iconfont icon-shouye1" style={{color:"black"}} />}
                    onLeftClick={this.clickLeft}
                >
                    <div style={{height:"45px",lineHeight:"45px"}}>
                    <img src="http://www.chawo.com/wap/images/chawo-logo.png" style={{width:"40px",verticalAlign:"middle"}} />   
                    登陆
                    </div>
                    
                </NavBar>
               
                </div>
                <div style={{width:"100%",height:"45px"}}></div>

                <p className="login_phone">
                    使用手机号和验证码登陆！
                </p>

                <div className="myform">
                    <p><label htmlFor="phone" >手机号</label>
                        <input type="number"  placeholder="请输入手机号"  id="phone" 
                        ref={(phone=>this.phone=phone)} /> 
                        <span className="getCode" onClick={this.phoneCode} >获取验证码</span>
                    </p>
                    <p>
                        <label htmlFor="code">验证码</label>
                        <input type="number"  placeholder="请输入验证码" id="code"
                        ref={(code=>this.code=code)} />
                       {this.props.nav.button?"":<span ref={span=>this.span=span} >{code()} </span>}
                   </p>
                    
                    <p style={{marginTop:"30px"}}>
                    <Button type="primary"disabled={this.props.nav.button} onClick={this.land} >登陆</Button>
                    </p>
                </div>
            </div>
        )
    }
}

export default Login


function code(){
    var arr=["1","2","3","4","5","6","7",'8',"9","0"]
    var str = ""
    for (let i = 0; i <6; i++) {
        str+=arr[Math.floor(Math.random()*arr.length)]
    }
    return str
}

