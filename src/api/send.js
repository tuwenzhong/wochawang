import service from "./index"

export  const wap=()=>{  //获取首页大部分内容
    return service.get("/index.php?act=index")
}

export const getWapList=()=>{  //获取茶窝头条内容
    return service.get("/index.php?act=notice&op=get_article_lists")
}

export const spike=()=>{  //茶窝秒杀
    return service.get("/index.php?act=miaosha&id=")
}


export const categroy=()=>{  //分类 侧边栏导航
    return service.get("/index.php?act=goods_class")
}


export const reader=(id)=>{  //分类 渲染
    return service.get(`/index.php?act=goods_class&op=get_child_all&gc_id=${id}`)
}

export const detail=(id)=>{   //详情页
    return service.get(`/index.php?act=goods&op=goods_detail&goods_id=${id}&key=&dis_id=`)
}

export const detailMsg=(id)=>{   //详情页
    return service.get(`/index.php?act=goods&op=goods_body&goods_id=${id}=`)
}


