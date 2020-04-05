import React, { Component } from 'react'
import "../index.scss"
export default class Nav extends Component {
    render() {
        let {data} = this.props
        return (
            <div>
                 {/* {分类导航} */}
                 <ul className="wap_nav">
                    {data.map((item,index)=>{
                        return <li key={index}>
                                <span>
                                    <i className={`iconfont icon-${item.icon}`}></i>
                                </span>
                                <p>{item.name}</p>
                             </li>
                    })}

                </ul>
            {/* {分类导航} */}
            </div>
        )
    }
}
