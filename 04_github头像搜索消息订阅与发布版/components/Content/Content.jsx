import React, { Component } from 'react'
// 消息的订阅和发布
import PubSub from 'pubsub-js'
export default class Content extends Component {

    state = {
        isFirst: true,
        isLoading: false,
        error: '',
        userInfo: []
    }
    // 在组件挂载后就订阅消息
    componentDidMount(){
        PubSub.subscribe('hha',(_,data)=>{
            this.setState(data);
      });
    }
    
    
    render() {
        let { userInfo, isLoading, isFirst, error } = this.state;
        return (
            <div className="content">
                <div className="list" >

                    {
                        isFirst ? <h1>欢迎使用！</h1> :
                            isLoading ? <h2>Loading.....</h2> :
                                error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                                    userInfo.map((item) => {
                                        return (
                                            <div key={item.id} className="item">
                                                <img src={item.avatar_url} alt="attrw" />
                                                <p><a href={item.html_url}>{item.login}</a></p>
                                            </div>
                                        )
                                    })
                    }


                </div>
            </div>
        )
    }
}
