import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import { UserContextProvider } from "./Components/Context/userContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <UserContextProvider>
                   <App />
                </UserContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
