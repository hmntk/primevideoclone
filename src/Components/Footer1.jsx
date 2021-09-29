import React from "react";
import styles from "./Modules_Css/Footer1.module.css";
import Primelogo from "../images/Primelogo.svg";

export const Footer1 = () => {
    return (
        <div className={styles.footer1_mainDiv}>
            <div className={styles.footer1_topDiv}>
                {/* <div className={styles.footer1_topDiv_primelogo}> */}
                <img src={Primelogo} alt="" />
                {/* </div> */}
            </div>
            <div className={styles.footer1_bottomDiv}>
                <div className={styles.footer1_bottomDiv_font}>
                    Terms and Privacy Notice
                </div>
                <div className={styles.footer1_bottomDiv_font}>
                    Send us feedback{" "}
                </div>
                <div className={styles.footer1_bottomDiv_font}>Help</div>
                <div className={styles.footer1_bottomDiv_4}>
                    © 1996-2021, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </div>
    );
};
