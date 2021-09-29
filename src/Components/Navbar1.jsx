import React from "react";
import styles from "./Modules_Css/Navbar1.module.css";
import Primelogo from "../images/Primelogo.svg";
import LanguageEnLogo from "../images/Nav1_LanguageEnglishLogo.svg";
import { Link } from "react-router-dom";

export const Navbar1 = () => {
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
                <div className={styles.nav1_rightDiv_signIn}>
                    {" "}
                    <Link className={styles.nav1_rightDiv_signIn_link} to="/signin">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};
