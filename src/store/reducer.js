import {combineReducers} from "redux"
import  wap from "../components/wap/reducer"
import category from "../components/categroy/reducer"
import detail from "../components/detail/reducer"
import cart from "../components/cart/reducer"
import { Button } from "antd-mobile"
const initialState = {
   flag:true,   //底部导航
   count:[],     //访问的足迹
   button:true   //login 的登陆按钮

}

var nav =  (state = initialState, { type, id}) => {
   switch (type) {

   case 'CHANGENAVTRUE':
      return {...state,flag:true}

   case "CHANGENAVFALSE":
      return {...state,flag:false}

   case "ADDCOUNT":
      var newState = JSON.parse(JSON.stringify(state))   
        if(newState.count.length){
            var index = newState.count.findIndex(item=>item.id ==id)
            if(index < 0 ){
               newState.count.push(id)
            }
        }else{
            newState.count.push(id)
        }
        return newState
   case "BUTTONFALSE":
        return {...state,button:false}
   case "BUTTONTRUE":
      return {...state,button:true}
   default:
      return state
   }
}


var reducer = combineReducers({
   wap,
   category,
   detail,
   nav,
   cart
})
export default reducer