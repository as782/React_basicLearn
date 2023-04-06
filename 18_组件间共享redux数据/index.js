//入口文件
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store  from "./redux/store";

let root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        < Provider store={store}>
            < App />
        </Provider>
    </StrictMode>
)



