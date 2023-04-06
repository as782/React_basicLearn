import { Component } from "react";
import './item.css';

export default class Item extends Component {
    //设置是否选中
    isChecked=(e)=>{
        const {id,changeCheckState}=this.props;
        changeCheckState(id,e.target.checked);
    }
    // 删除一个、
    deleteItem=(id)=>{
        return ()=>{
            const {delItem}=this.props;
            if(window.confirm('确定吗？')){
                delItem(id);
            }
        }
    }
    render() {
        const {id,context,isfinish}=this.props;
        return (
            <li className="item">
                <input type="checkbox" onChange={this.isChecked}   checked={isfinish} />
                <p className="content">{context}</p>
                <button className="btn delBtn" onClick={this.deleteItem(id)}>删除</button>
            </li>
        )
    }
}