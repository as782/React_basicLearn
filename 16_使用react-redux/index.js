//入口文件
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import store from "./redux/store";

let root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        < App />
    </StrictMode>
)
// 通过订阅来监听redux 中的状态改变从而更新界面
store.subscribe(()=>{
    root.render(
        <StrictMode>
            < App />
        </StrictMode>
    )
});  
