import React, { Component } from 'react'
// import axios from 'axios';
import PubSub from 'pubsub-js'
export default class Header extends Component {

    handelSearch = async () => {

        let keyworld = this.inp.value;
        // 发送请求前把页面改为加载状态

        PubSub.publish('hha', { isLoading: true, isFirst: false });
        // fetch(`https://api.github.com/search/users?q=${keyworld}`).then(
        //     res => {
        //         //先联系服务器
        //         return res.json();
        //     }).then(res => {
        //         console.log(res)
        //         let { items } = res;
        //         let newUserInfo = items.map((item) => {
        //             return {
        //                 id: item.id,
        //                 login: item.login,
        //                 avatar_url: item.avatar_url,
        //                 html_url: item.html_url
        //             };
        //         });
        //         PubSub.publish('hha', { isLoading: false, userInfo: newUserInfo });
        //     }
        //     ).catch(
        //         err => {
        //             PubSub.publish('hha', { isLoading: false, error: err.message });
        //         }
        //     );
        try {
            let response = await fetch(`https://api.github.com/search/users?q=${keyworld}`);
            let result = await response.json();
            let { items } = result;
            let newUserInfo = items.map((item) => {
                return {
                    id: item.id,
                    login: item.login,
                    avatar_url: item.avatar_url,
                    html_url: item.html_url
                };
            });
            PubSub.publish('hha', { isLoading: false, userInfo: newUserInfo });
        } catch (err) {
            PubSub.publish('hha', { isLoading: false, error: err.message });
        }
    }
    render() {
        return (
            <div className="header">
                <input ref={(e) => { this.inp = e }} type="text" />
                <button onClick={this.handelSearch}>搜索</button>
            </div>
        )
    }
}
