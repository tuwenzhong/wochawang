import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'
import {BrowserRouter as Router ,Route,Switch,Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import {OneRouter} from "./router"
import "./index.scss"
ReactDOM.render(
    <Provider store={store} >
    <Router>
        <Switch>
            {
                OneRouter.map(item=>{
                    return <Route key={item.path} path={item.path} 
                    component={item.component}  />
                })
            }
            <Redirect from="/" to="/home"  exact/>
            <Redirect to="/404" />
        </Switch>
    </Router>
    </Provider>
, document.getElementById('root'));

