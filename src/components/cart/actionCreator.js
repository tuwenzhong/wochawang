export default{
    addCart(id,obj){
        return{
            type:"ADDCARTCART",
            id,
            obj
        }
    },
    changeBuyNum(id,i){
        return{
            type:"CHANGEBUYNUM",
            id,i
        }
    },
    cartDel(id){
        return{
            type:"CARTDEL",
            id,
        }
    },
    changeOne(id){
        return{
            type:"CHANGEONE",
            id,
        }
    },
    changeAll(b){
        return{
            type:"CHANGEALL",
            b
        }
    }
}