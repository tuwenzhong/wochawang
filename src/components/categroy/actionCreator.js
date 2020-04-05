import {categroy,reader} from "@/api/send"
export default {
    getArr(){
        return (dispatch)=>{
            categroy().then(res=>{
                dispatch({
                    type:"GETARR",
                    categroyList:res.datas.class_list
                })
            })
        }
    },
    modify(select){
        return{
            type:"MODIFY",
            select
        }
    },
    getRender(id){
        return (dispatch)=>{
            reader(id).then(res=>{
                dispatch({
                    type:"GETRENDER",
                    renderList:res.datas.class_list   
                })
            })
           
        }
    }
}