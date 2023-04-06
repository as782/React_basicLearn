import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        let { userInfo, isLoading, isFirst, error } = this.props;
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
