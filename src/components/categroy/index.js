import React, { Component } from 'react'
import { connect } from "react-redux"
import actionCreator from "./actionCreator"
import { NavBar, Icon } from 'antd-mobile';
import "./index.scss"
@connect(store => store, actionCreator)


class Categroy extends Component {
    componentDidMount() {
        this.props.getArr()
    }

    clickLeft=()=>{
        this.props.history.go(-1)
    }

    showId=(id)=>{
       console.log(id)
       this.props.modify(id)
       this.props.getRender(id)
    }

    goSearch=()=>{
        this.props.history.push("/home/search")
    }
    render() {
        let { categroyList: data ,select,renderList} = this.props.category


        return (
            <div className="categroyBox">
                <NavBar
                    mode="light"
                    icon={<img src="http://www.chawo.com/wap/images/chawo-logo.png"
                    style={{ width: "57px" }}/>}
                    onLeftClick={this.clickLeft}
                    rightContent={[
                        <Icon key="1" type="ellipsis"  style={{color:"black"}} />,             
                    ]}
                >
                    <p onClick={this.goSearch}>
                        <i className="iconfont icon-sousuo"></i>
                        大益
                    </p>
                </NavBar>
                <div style={{width:"100%",height:"45px"}}></div>
                <div className="categroy">

                   {data.length?<div className="categroy_left">
                        {data.map(item=>{
                            return <li className={item.gc_id==select?"active":""} key={item.gc_id} onClick={this.showId.bind(this,item.gc_id)} >
                                <img  src={item.image} alt="" style={{width:"22px"}} />
                                <p>{item.gc_name}</p>
                            </li>
                        })}
                    </div>:""   }
                    

                    {renderList.length?<div className="categroy_right">
                        {renderList.map(item=>{
                            return <li key={item.gc_id} className="renderLi" >
                                <i className="iconfont icon-dian"></i>
                                {item.gc_name}
                                <i className="iconfont icon-arr-right1"></i>
                            </li>
                        })}
                    </div>:<div className="categroy_right">
                        <li className="renderLi" >
                                <i className="iconfont icon-dian"></i>
                                白茶
                                <i className="iconfont icon-arr-right1"></i>
                            </li>
                            <li className="renderLi" >
                                <i className="iconfont icon-dian"></i>
                                普洱
                                <i className="iconfont icon-arr-right1"></i>
                            </li>
                            <li className="renderLi" >
                                <i className="iconfont icon-dian"></i>
                                茶膏
                                <i className="iconfont icon-arr-right1"></i>
                            </li>
                    </div>}

                </div>
                 
              
            </div>
        )
    }
}
export default Categroy