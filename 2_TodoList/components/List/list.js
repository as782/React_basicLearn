import { Component } from "react";

import './list.css';
import Item from '../Item/item'

export default class List extends Component {
    render() {
        const {itemList,changeCheckState,delItem} = this.props;
        return (

            <div className="itemList">
                <ul>
              
                  {itemList.map((item)=>{
                    return <Item key={item.id} {...item} delItem={delItem} changeCheckState={changeCheckState} />
                  })}
                    
                </ul>
            </div>
        )
    }
}