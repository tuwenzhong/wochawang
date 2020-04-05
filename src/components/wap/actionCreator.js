import {wap,getWapList,spike} from "@/api/send"
export default {
    getDate(){            //获取首页数据
        return (dispatch)=>{
            wap().then(res=>{
                dispatch({
                    type:"GETDATE",
                    data:res.datas
                })
            })
        }
    },
    getList(){
        return (dispatch)=>{
            getWapList().then(res=>{
                dispatch({
                    type:"GETLIST",
                    list:res.datas.article_list
                })
            })
        }
    },
    getSpike(){
        return (dispatch)=>{
            spike().then(res=>{
                dispatch({
                    type:"GETSPIKE",
                    spikeObj:res.datas
                })
            })
        }
    }
}