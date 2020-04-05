import React, { Component } from 'react'
import {connect}  from "react-redux"
import action from "./actionCreator"
import RenderDetail from "./children/renderDetail"
import MsgDetail from "./children/msgDetail"
@connect(store=>store,action)

class Detail extends Component {

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
        this.props.getDetailMsg(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clear()
    }
   
    render() {
        let {detailList:data,detailMsg} = this.props.detail

        return (
            <div>
                {Object.keys(data).length?<RenderDetail {...this.props} data={data} />:""}

                {detailMsg?<MsgDetail detailMsg={detailMsg} 
                onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    // this.setState({ imgHeight: 'auto' });
                    this.forceUpdate()
                  }} />:""}
            </div>
        )
    }
}
export default Detail