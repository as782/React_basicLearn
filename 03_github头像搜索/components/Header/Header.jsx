import React, { Component } from 'react'
import axios from 'axios';
export default class Header extends Component {

    handelSearch = () => {
        let keyworld = this.inp.value;
        // 发送请求前把页面改为加载状态
        this.props.updateAppState({ isLoading: true, isFirst: false });
        axios.get(`https://api.github.com/search/users?q=${keyworld}`).then(
            res => {

                let { items } = res.data;
                let newUserInfo = items.map((item) => {
                    return {
                        id: item.id,
                        login: item.login,
                        avatar_url: item.avatar_url,
                        html_url: item.html_url
                    };
                });
                this.props.updateAppState({ isLoading: false, userInfo: newUserInfo });
            },
            err => {
                this.props.updateAppState({ isLoading: false, error: err.message });

            })
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
