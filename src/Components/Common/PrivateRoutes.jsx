import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

export const PrivateRoutes = ({ children, path }) => {
    const [userDetail, setUserDetail] = useState([]);

    // const getUserDetail = async () => {
    //     let res = await axios.get("/users/userLoginDetail");
    //     console.log("my_res:", res.data);
    //     setUserDetail(res.data);
    // };

    let authStatus = localStorage.getItem("Auth");
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
