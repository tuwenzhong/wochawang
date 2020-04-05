const initialState = {
    cartList:[]
}

export default (state = initialState, { type, obj ,id,i,b}) => {
    switch (type) {

    //添加
    case "ADDCARTCART":  
        var newState = JSON.parse(JSON.stringify(state))
        if(newState.cartList.length){
            var index = newState.cartList.findIndex(item=>item.id ==id)
            if(index >= 0 ){
                newState.cartList[index].buyNum++
            }else{
                newState.cartList.push(obj)
            }
        }else{
            newState.cartList.push(obj)
        }
        return newState
       
    //数量加减
    case "CHANGEBUYNUM":
        var newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item=>{
            if(item.id === id){
                item.buyNum+=i
            }
        })
        return newState

    //删除
    case "CARTDEL":
       var  cartList = state.cartList.filter(item=>item.id != id)
        return {...state,cartList}
        
    //单选
    case "CHANGEONE":
        var newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item=>{
            if(item.id == id){
                item.isChecked = !item.isChecked
            }
        })
        return newState
    
    //全选
    case "CHANGEALL":
        var newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item=>item.isChecked = b)
        return newState



    default:
        return state
    }
}
