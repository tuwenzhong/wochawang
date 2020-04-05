import React, { Component } from 'react'
import "../index.scss"
export default class Spike extends Component {
    render() {
        let {data} = this.props
        console.log(data)
        var str = formatDuring(data.datetime)
        console.log(str)

        return (
            <div className="spike">
                <div className="tit-bar" >
                    <p>茶窝秒杀

                        <span>
                            距结束 {str}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}


function formatDuring(mss) {
        var days = parseInt(mss / (1000 * 60 * 60 * 24));
        var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (mss % (1000 * 60)) / 1000;
        return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";

}
