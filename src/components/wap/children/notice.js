import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import "../index.scss"

//茶窝头条
export default class Notice extends Component {
    render() {
        let { list } = this.props
        return (
            <div className="wap_notify">
                <img src="http://www.chawo.com/wap/images/toutiao.jpg" alt="" />

                <Carousel className="notice-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    frameOverflow
                >

                    {list.map((item,index) => {
                        return <div key={item.article_id}>
                            <p className="article_title"> {item.article_title}</p>
                           
                        </div>

                    })}

                   

                </Carousel>
            </div>
        )
    }
}
