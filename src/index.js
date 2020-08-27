import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from 'react-router-dom'
import "materialize-css";

import App from "./App";

import "./Index.css";

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children || null
})

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>
    , document.getElementById('root'));