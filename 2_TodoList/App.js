//App
import './App.css'
import AddItem from './components/AddItem/additem';
import List from './components/List/list';
import Footer from './components/Footer/footer';
import { Component } from 'react';
class App extends Component {
    state = {
        itemList: [
            { id: "001", context: '吃饭', isfinish: false },
            { id: "002", context: '睡觉', isfinish: false },
            { id: "003", context: '敲代码', isfinish: false }
        ]

    }
    // 添加一个代办事件
    addOneThing = (context) => {
        let { itemList: oldList } = this.state;
        let id = Date.now();
        let newList = oldList.concat([{ id, context, isfinish: false }]);
        this.setState({ itemList: newList });
    }
    // 改变选中状态
    changeCheckState = (id, isChecked) => {
        const { itemList } = this.state;
        const newList = itemList.map((item) => {
            if (item.id === id) {
                item.isfinish = isChecked;
            }
            return item;
        });
        this.setState({ itemList: newList });
    }
    //删除一个  
    delItem = (id) => {
        const { itemList } = this.state;
        itemList.forEach((e, i) => {
            if (e.id === id) {
                itemList.splice(i, 1);
            }
        });
        this.setState({ itemList });
    }
    // 全选
    selectedAll = (e) => {
        const { itemList } = this.state;
        const newList = itemList.map((item) => { 
             item.isfinish = e.target.checked
             return item;
            });
        this.setState({ itemList: newList });
    }
    //删除选中的
    delAllSelected = () => {
        const { itemList } = this.state;
        const newList = itemList.filter(e => { return !e.isfinish  });
        this.setState({ itemList: newList });
    }
    render() {
        return (
            <div className="container">
                <div className="wrop">
                    <AddItem getContext={this.addOneThing} />
                    <div className="wrop">
                        <List itemList={this.state.itemList} changeCheckState={this.changeCheckState} delItem={this.delItem} />
                        <Footer itemList={this.state.itemList} delAllSelected={this.delAllSelected} selectedAll={this.selectedAll} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;