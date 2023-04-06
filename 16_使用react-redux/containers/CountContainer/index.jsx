//引入创建容器的函数
import { connect } from 'react-redux'
// 引入要被包裹的组件
import Count from '../../components/Count'
//引入actionCreaters
import {add,jian,AsyncAdd} from '../../redux/actions_count'
let mapStateToProps = (state) => {
    
    return {
          state
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        incre:(value)=>{
            //value 为要将状态中的数据修改后的值
            dispatch(add(value));
        },
        decre:(value)=>{
            dispatch(jian(value));
        },
        AsyncIncre:(value,time)=>{
            dispatch(AsyncAdd(value,time));
        }
    }
};


//暴露创建好的容器组件
// connect() 函数可以接受两个函数类型的参数，就是将redux中的状态和修改redux中状态的方法转化为子组件的props的函数。
// connect()返回值是一个函数，将需要包裹的组件传入；
// 最后该函数返回容器组件；
export default connect(mapStateToProps,mapDispatchToProps)(Count);