import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { LoginProvider } from './Contexts/LoginContext'

ReactDOM.render(
    <LoginProvider>
    <App className="app_body" />
    </LoginProvider>
, document.getElementById("root"));
