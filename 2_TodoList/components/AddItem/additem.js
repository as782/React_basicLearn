import { Component } from "react";
import './additem.css';

export default class AddItem extends Component {

  

//获取input值
getInputValue=()=>{ 
    let {getContext} = this.props;
    if(this.addInp.value==='') {
        alert('不能为空！')
        return
    };
    getContext(this.addInp.value);
    this.addInp.value='';
}
    render() {
        return (
            <div className="additem">
                <div className="additem_wrop">
                    <input ref={e => this.addInp = e}  className="inp" type="text" placeholder="添加一项代办..." />
                    <button className="btn" onClick={this.getInputValue}>添加</button>
                </div>
            </div>
        )
    }
}