import React, { Component } from 'react'
import actionCreatora from "./actionCreator"
import { connect } from "react-redux"
import CarouselWap from "./children/carousel"
import Nav from "./children/nav"
import Notice from "./children/notice"
// import Spike from "./children/spike"
import Commodity from "./children/commodity"

@connect(store => store, actionCreatora)
class Wap extends Component {
    componentDidMount() {
        this.props.getDate()
        this.props.getList()
        this.props.getSpike()

        window.onscroll = ()=>{
            //scrollTop就是触发滚轮事件时滚轮的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>=100){
                this.node.style.opacity=1
            }else{
                this.node.style.opacity=0
            }
        }
    }

    componentWillUnmount(){
        window.onscroll=null
    }

    goTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
  
    render() {
        let { data, list,spikeObj } = this.props.wap
        return <div style={{marginBottom:"60px",background:"#f5f5f5"}}>

            {Object.keys(data).length ? <>
                {/*  轮播图 */}
                <CarouselWap data={data[0].adv_list.item} />

                {/* 导航 */}
                <Nav data={data.nav} />
            </> : ""}



            {/* 茶窝头条 */}  
            { list.length ? <>
                    <Notice list={list} />
                </> : "" }


            {Object.keys(data).length?<div style={{width:"100%"}}>
                    <img style={{width:"100%"}} src={data[1].home1.image} alt="" />
            </div>:""}


            {/* 茶窝秒杀 */}
            {/* {Object.keys(spikeObj).length ? <>
              <Spike  data={spikeObj} />
            </> : ""} */}


            {/*  商品内容 */}
            {Object.keys(data).length ? <>
                <Commodity data={data} />
            </> : ""}
            

            {/* 小火箭 */}
            <div style={{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",background:"rgba(255,255,255,0.8)",position:"fixed",bottom:"70px",right:"10px",borderRadius:"50%",transition:"1s",opacity:0}} ref={(node)=>this.node=node} onClick={this.goTop}>
                <i className="iconfont icon-huojian" style={{fontSize:"25px"}}></i>
            </div>

        </div>

    }
}

export default Wap