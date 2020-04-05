import React, { Component } from 'react'
import "../index.scss"
import {withRouter} from "react-router-dom"


@withRouter
//商品信息
 class Commodity extends Component {

    goDetail=(id)=>{
        this.props.history.push("/home/detail/"+id)
    }

    render() {
        let {data} =  this.props 
        return (
            <div>
                <div className='nctouch-home-block'>
                    <img  src={data[2].home1.image} alt="" />
                    <ul>
                        {data[3].home3.item.map((item,index)=>{
                            return <li key={index}>
                                <img  src={item.image} alt="" />
                            </li>
                        })   
                        }
                    </ul>
                </div>


                <div className="wap_title">
                    <img  src={data[4].home1.image} alt="" />
                    <ul>
                        {data[5].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="wap_title">
                    <img  src={data[6].home1.image} alt="" />
                    <ul>
                        {data[7].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="wap_title">
                    <img  src={data[8].home1.image} alt="" />
                    <ul>
                        {data[9].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="wap_title">
                    <img  src={data[10].home1.image} alt="" />
                    <ul>
                        {data[11].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>


                <div className="wap_title">
                    <img  src={data[12].home1.image} alt="" />
                    <ul>
                        {data[13].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="wap_title">
                    <img  src={data[14].home1.image} alt="" />
                    <ul>
                        {data[15].goods.item.map(item=>{
                            return <li key={item.goods_id} onClick={this.goDetail.bind(this,item.goods_id)}>
                                <img  src={item.goods_image} alt="" />
                               <div className="goods_info">
                                <p className="goods_name">
                                        {item.goods_name}
                                    </p>

                                    <p className="goods_promotion_price">
                                        ¥{item.goods_promotion_price}
                                    </p>
                               </div>
                            </li>
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}


export default  Commodity 