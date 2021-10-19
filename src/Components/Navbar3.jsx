import React from "react";
import styles from "./Modules_Css/Navbar1.module.css";
import Primelogo from "../images/Primelogo.svg";
import LanguageEnLogo from "../images/Nav1_LanguageEnglishLogo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export const Navbar3 = () => {
    const [userDetail, setUserDetail] = useState([]);

const getUserDetail = async () => {
    let res = await axios.get(
        "https://cryptic-garden-15081.herokuapp.com/users/userLoginDetail"
    );
    console.log("my_res:", res.data[0]);
    setUserDetail(res.data[0]);
};

useEffect(() => {
    getUserDetail();
}, []);



    return (
        <div className={styles.nav1_mainDiv}>
            <div className={styles.nav1_leftDiv}>
                <div className={styles.nav1_leftDiv_primelogo}>
                    <img src={Primelogo} alt="" />
                </div>
            </div>
            <div className={styles.nav1_rightDiv}>
                <div className={styles.nav1_rightDiv_language}>
                    <img src={LanguageEnLogo} alt="" />
                </div>
                <div className={styles.nav1_rightDiv_signIn} >
                    {" "}
                   
                        {userDetail.name}
                </div>
            </div>
        </div>
    );
};
