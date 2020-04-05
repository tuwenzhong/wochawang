import React, { Component } from 'react'
import { NavBar, Icon, Carousel } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import "../index.scss"

@withRouter
class CarouselWap extends Component {
    
    goSearch=()=>{
        this.props.history.push("/home/search")
    }
    render() {
        let {data} = this.props
        return (
            <>
              {/* {轮播图} */}
              <div className="wap_carousel">
                <NavBar
                    mode="light"
                    icon={<img src="http://www.chawo.com/wap/images/chawo-logo.png"
                        style={{ width: "57px" }} />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,             
                    ]}
                >
                    <p onClick={this.goSearch}>
                        <i className="iconfont icon-sousuo"></i>
                        大益
                    </p>
                </NavBar>


                <Carousel
                    autoplay={true}
                    infinite={true}
                    dots={false}	
                >
                    {data.map((item,index)=>{
                        return <img className="carouselImg" key={index} 
                                src={item.image}  alt=""  onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                  }}/>
                    })}
                </Carousel>

            </div>
            {/* {轮播图} */}    
            </>
        )
    }
}
export default CarouselWap