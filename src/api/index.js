import axios from "axios"
import { Toast } from 'antd-mobile';
let service = axios.create({
    baseURL:"/api",
    "content-type":"application/json",
    timeout:5000
})

service.interceptors.request.use(config=>{
    // console.log("请求拦截器")
    Toast.loading("正在加载中...", 0)
    return config
})
service.interceptors.response.use(res=>{
    // console.log("响应拦截器")
    Toast.hide()
    return res.data
},
err=>{
    console.log(err)
        if(err){
            window.location.href="/404"
        }
    }
)

export default service