import React, { Component } from 'react'
import { Carousel ,Toast,Badge} from 'antd-mobile';
import {connect} from "react-redux"
import actionCreator from "../../cart/actionCreator"
import "../index.scss"

@connect(store=>store,actionCreator)
class RenderDetail extends Component {
    goback = () => {
        this.props.history.go(-1)
    }
    render() {
        let { data } = this.props
        return (<>
            <div style={{background:"white"}}>
                <div className="detail_header">
                    <span onClick={this.goback}><i className="iconfont icon-left" /> </span>
                    <p>
                        <img src="http://www.chawo.com/wap/images/chawo-logo.png" alt="" style={{ width: "40px", marginTop: "5px" }} />
                        <span className="shopp">商品</span>
                        <span>详情</span>
                        <span>评价</span>
                    </p>
                    <span> <i className="iconfont icon-ellipsis" /> </span>

                </div>

                
                <div style={{ height: "45px", width: "1005" }}></div>

                <div style={{width:"100%",overflow:"hidden"}}>
                <Carousel
                    autoplay={false}
                    dotActiveStyle={{background:"#ed5564"}}
                    style={{width:"100%"}}
                    cellSpacing={0.5}
                >
                    {data.image_list.map((item,index)=>{
                        return <img key={index} src={item._mid} style={{width:"100%"}} alt=""  onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }} />
                    })}
                </Carousel>
                </div>
                <p className="goods-detail_name">{data.goods_info.goods_name}</p>

                <div className="goods-detail-price" >
                    <dl className="price_info">
                        <dt className="goods_price">
                            ¥ <span style={{fontSize:"22px"}}>{data.goods_info.goods_price}</span> 
                        </dt>
                        {data.goods_info.goods_marketprice?<dd className="goods_marketprice">{data.goods_info.goods_marketprice}</dd>:""}
                    </dl>

                    <p>
                        <span>销量:{data.goods_info.sale_count}{data.goods_info.goods_unit} </span>
                        <span>库存:{data.goods_info.goods_storage} </span>
                    </p>

                </div>
                <p className="goods-detail-item">
                        <button>点击询价</button>
                </p>

                <p className="goods-title">
                    <button>{data.goods_info.title}</button>
                    
                </p>
            </div>

            <div className="detail_footer">
                <div className="detail_enter">
                    <li onClick={this.goHome}> <i className="iconfont icon-shouye1"></i> <p>首页</p> </li>
                    <li onClick={this.goContact}> <i className="iconfont icon-kefu"></i> <p>客服</p> </li>
                    <li onClick={this.goCart}> 
                        <Badge text={this.props.cart.cartList.length} size="small"
                         >
                        <i className="iconfont icon-gouwucheman"></i>
                        </Badge>  <p>购物车</p> 
                    </li>
                </div>
               
                <div className="detail_now">
                    <button className="but1" onClick={this.buycart} >立即购买</button>
                    <button className="but2" onClick={this.joinCart}>加入购物车</button>
                </div>
                
            </div>


           
        </>    
        )
    }
    //底部导航操作
    goHome=()=>{
        this.props.history.push("/home/wap")
    }
    goContact=()=>{
        this.props.history.push("/home/contact")
    }
    goCart=()=>{
        this.props.history.push("/home/cart")
    }
    joinCart=()=>{
        if(!sessionStorage.user){
            this.props.history.push("/login",this.props.location.pathname)
            return false 
        }
        if(this.props.data.goods_info.goods_storage == 0){
            Toast.fail("库存不足",1)
            return false
        }
        this.addTo();
        Toast.success("添加成功", 2)
    }

    buycart=()=>{
        if(!sessionStorage.user){
            this.props.history.push("/login",this.props.location.pathname)
            return false 
        }
        if(this.props.data.goods_info.goods_storage == 0){
            Toast.fail("库存不足",1)
            return false
        }
        this.addTo();
        this.props.history.push("/home/cart")
    }
    addTo=()=>{
        var id = this.props.match.params.id;
        var obj ={
            id,
            buyNum:1,
            isChecked:true,
            msg:this.props.data.goods_info.goods_name,
            price:this.props.data.goods_info.goods_price,
            img:this.props.data.image_list[0]._small,
            maxNum:this.props.data.goods_info.goods_storage,
        }
        this.props.addCart(id,obj)
    }
}
export default RenderDetail