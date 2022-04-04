import React, {useEffect} from 'react';
import './index.css';
import 'tw-elements';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

    return <BrowserRouter>
        <App/>
    </BrowserRouter>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
