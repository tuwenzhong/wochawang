import React, { Component } from 'react'
import {connect} from "react-redux"
import Hoc from "../hoc"
import "./index.scss"
@connect(store=>store)
@Hoc
class User extends Component {
    render() {
        var user = sessionStorage.user.substr(0,3)+"****"+sessionStorage.user.substr(7)
          return (
            <div style={{height:"100vh",background:"#eeeeee"}}>
                <div className="user">
                    <div className="user_info">
                        <span>
                            <img src="//www.chawo.com/data/upload/shop/common/default_user_portrait.gif" alt="" />
                        </span>
                        <p>欢迎用户:{user}</p>
                    </div>

                    <ul className="member-collect">
                        <li>
                            <p className="user_num">0</p>
                            <p>商品收藏</p>

                        </li>
                        <li>
                            <p className="user_num">0</p>
                            <p>店铺收藏</p>

                        </li>
                        <li>
                            <p className="user_num">{this.props.nav.count.length}</p>
                            <p>我的足迹</p>

                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default  User