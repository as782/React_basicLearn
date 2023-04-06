//入口文件
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import { BrowserRouter } from 'react-router-dom';

let root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter >
    </StrictMode>
);