import { Component } from "react";
import './footer.css';

export default class Footer extends Component {

    render() {
        const { selectedAll, delAllSelected, itemList } = this.props;
        const total = itemList.length;
        const count = itemList.reduce((pre, item) => {
            return (item.isfinish ? pre + 1 : pre)
        }, 0);
        // pre表示上一次reduce的结果，0是初始值
        return (
            <div className="footer">
                <div className="selectAll">
                    <label >全选</label>
                    <input type="checkbox" onChange={selectedAll} checked={count === total && total !== 0 ? true : false} />
                </div>
                <span className="all">选中/总数: <em>{count}</em>/<em>{total}</em></span>
                <div className="delALL">
                    <button className="btn" onClick={delAllSelected}>删除选中</button>
                </div>
            </div>
        )
    }
}