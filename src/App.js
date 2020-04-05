import React, { Component } from 'react'
import { Route, Redirect, Switch, Link } from "react-router-dom"
import { TwoRouter } from "./router/index"
import {connect} from "react-redux"
import actionCreator from "./store/actionCreator" 
import "./App.scss"

@connect(store=>store,actionCreator)
class App extends Component {
  
  componentDidMount(){     //切换导航
    this.props.history.listen((location)=>{
        switch(location.pathname){
          case "/home/wap"      :
          case "/home/categroy" :
          case "/home/contact" :
          case "/home/user" :  this.props.changNavTrue();break;
          default: this.props.changNavFalse()
                    if(location.pathname.substr(0,13) == "/home/detail/"){
                      var id = location.pathname.substr(13)
                      this.props.addCount(id)
                    }
    
        }
    })
  }

  render() {
    return <>
      <Switch>
        {
          TwoRouter.map(item => {
            return <Route key={item.path} path={item.path} component={item.component} />
          })
        }
        <Redirect from="/home" to="/home/wap" exact />
        <Redirect to="/home/wap" />
      </Switch>

      <nav className="app_nav" style={{display:this.props.nav.flag?"":"none"}}>
        <Link to="/home/wap">
          <i className="iconfont icon-shouye1"></i>
          <p>首页</p>
        </Link>
        <Link to="/home/categroy">
          <i className="iconfont icon-icon-test"></i>
          <p>分类</p>
        </Link>
        <Link to="/home/contact">
          <i className="iconfont icon-kefu"></i>
          <p>客服</p>
        </Link>
        <Link to="/home/cart">
          <i className="iconfont icon-gouwucheman"></i>
          <p>购物车</p>
        </Link>
        <Link to="/home/user">
          <i className="iconfont icon-wode"></i>
          <p>我的</p>
        </Link>
      </nav>
    </>
  }
}


export default App;
