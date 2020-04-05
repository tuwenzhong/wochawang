import React, { Component } from 'react'
import { SearchBar,NavBar ,Tag,Toast} from 'antd-mobile';
import "./index.scss"

class Search extends Component {

    clickLeft=()=>{
        this.props.history.go(-1)
    }

    
    goSearch=(val)=>{
        Toast.offline(val, 1)
    }


    render() {
        return (
            <>
            <div className="search">
                  <NavBar
                    mode="light"
                    icon={<p style={{ width: "57px" ,display:"flex",justifyContent:"space-between"}}>
                        <i className="iconfont icon-left" style={{color:"black"}} />
                        <img src="http://www.chawo.com/wap/images/chawo-logo.png"
                    style={{ width: "47px" }}/>
                    </p> }
                    onLeftClick={this.clickLeft}
                >
                    <SearchBar placeholder="搜索"  style={{flex:"1"}} 
                        onSubmit={this.goSearch}
                    />
                </NavBar>
               
             
            </div>

            <div style={{height:"45px"}}></div>

            <div className="search_hot"> 

                <p>热门搜索</p>

                <Tag selected >搜索功能暂未开通</Tag>
            </div>
            </>

        )
    }
}
export default Search