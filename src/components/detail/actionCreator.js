import {detail,detailMsg} from "@/api/send"
export default {
    getDetail(id){
        return (dispatch)=>{
            detail(id).then(res=>{
                dispatch({
                    type:"GETDETAIL",
                    detailList:res.datas
                })
            })
        }
    },
    getDetailMsg(id){
        return (dispatch)=>{
            detailMsg(id).then(res=>{
                dispatch({
                    type:"GETDETAILMSG",
                    detailMsg:res
                })
            })
        }
    },
    clear(){
        return{
            type:"CLEAR",
        }
    }
}