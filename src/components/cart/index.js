import React, { Component } from 'react'
import {connect} from "react-redux"
import actionCreator from "./actionCreator"
import {NavBar,Checkbox ,Toast} from 'antd-mobile';
import Hoc from "../hoc/index"
import "./index.scss"

let mapState=store=>store

@Hoc  
@connect(mapState,actionCreator)
class Cart extends Component {
    clickLeft=()=>{
        if(this.props.location.state){
            this.props.history.push("/home/wap")
        }else{
            this.props.history.go(-1)
        }
    }

    changeNum=(id,i)=>{  //加 1  减1  和提示
        var buyNum = 0
        var maxNum = 0
        this.props.cart.cartList.forEach(item=>{
            if(item.id === id){
                buyNum = item.buyNum
                maxNum = item.maxNum
            }
        })

        if(buyNum===1 && i<0){
            Toast.info("已经不能在减少了哦",1.5)
        }else if(buyNum == maxNum && i>0){
            Toast.info("购买超过上限",1.5)
        }else{
            this.props.changeBuyNum(id,i)
        }

    }
    remove=(id)=>{  //删除
        this.props.cartDel(id)
    }

    changeOne=(id)=>{  //单选
        this.props.changeOne(id)
    }
    changeAll=(e)=>{   //全选
        this.props.changeAll(e.target.checked)
    }

    render() {
        let data = this.props.cart.cartList;
        var list = data.filter(item=>item.isChecked)
        var  flag = true
        if(data.length !== list.length ){
            flag=false    
        }
        var money = 0
        list.forEach(item=>{
            money+=item.buyNum*item.price
        })
        return (
            <div>
                <div className="cartBox">
                  <NavBar
                    mode="light"
                    icon={<i className="iconfont icon-left" style={{color:"black"}} />}
                    onLeftClick={this.clickLeft}
                >
                    <div style={{height:"45px",lineHeight:"45px"}}>
                    <img src="http://www.chawo.com/wap/images/chawo-logo.png" style={{width:"40px",verticalAlign:"middle"}} />   
                    购物车
                    </div>
                    
                </NavBar>
               
             
                </div>
                <div style={{height:"45px"}}></div>


               {data.length?<div className="cartList">
                {data.map(item=>{
                    return <li key={item.id}>
                        <Checkbox  checked={item.isChecked} onChange={
                            this.changeOne.bind(this,item.id)} />
                        <div className="goods-pic">
                            <img src={item.img} />
                        </div>

                        <div className="cart_msg">
                            <p className="cart_name">{item.msg}</p>
                            <p className="cart.price">￥{item.price}</p>

                            <i className="iconfont icon-shanchu" onClick={this.remove.bind(this,item.id)} />

                        <p className="cart_num"> 
                        <button onClick={this.changeNum.bind(this,item.id,-1)}>-</button>
                        <button className="cart_buyNum">{item.buyNum}</button>
                        <button onClick={this.changeNum.bind(this,item.id,1)}>+</button></p>
                        </div>
                       
                    </li>

                })}
                 <div className="cart_title"> 
                    <Checkbox style={{marginLeft:"10px"}} checked={flag} 
                    onChange={this.changeAll.bind(this)}/>

                    <p className="cart_money">合计总金额:<span style={{color:"#db4453"}}>￥</span>
                        <span className="money">{(money).toFixed(2)}</span> 
                        <button>确认</button> 
                    </p>
                 </div>
               </div>:<h2 style={{marginTop:"20px"}}>购物车是空的哦!请先去购物</h2> }
            </div>
        )
    }
}
export default  Cart