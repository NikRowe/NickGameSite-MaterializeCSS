import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from 'react-router-dom'
import "materialize-css";

import App from "./App";

import "./Index.css";

ReactDOM.render(
<BrowserRouter>
    <App /> 
</BrowserRouter>
,document.getElementById('root'));