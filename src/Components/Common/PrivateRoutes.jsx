import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

export const PrivateRoutes = ({ children, path }) => {
    const [userDetail, setUserDetail] = useState([]);


    let authStatus = sessionStorage.getItem("Auth");
    console.log('authStatus:', authStatus)

    

    if (authStatus === "true") {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        );
    }
    return <Redirect to="/signin"></Redirect>;

};
