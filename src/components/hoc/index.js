import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
var Hoc = (Com)=>{
    return class index  extends Component {
        render() {
            if(sessionStorage.user){
                return (
                    <div>
                        <Com  {...this.props} />
                    </div>
                )
            }else{
                var path = this.props.location.pathname
                return <Redirect  to={{pathname: "/login",state: {path}}} />
            }
        }
    }
    
}

export default Hoc
