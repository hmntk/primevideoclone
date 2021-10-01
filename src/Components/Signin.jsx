import { Link } from "react-router-dom";
import styles from "./Modules_Css/Signin.module.css";

const Signin = () => {
    return (
        <div>
            <div className={styles.signupInLogoImg}>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
                    alt=""
                />
            </div>

            <div className={styles.signupBox}>
                <h2>Sign-In</h2>

                <label htmlFor="">
                    <p>Email or Mobile Phone Number</p>
                </label>
                <input type="text" />
                <label htmlFor="" className={styles.passwordLine}>
                    <p>Password</p>
                    <p className="forgot">
                        <a href="">Forgot your password</a>
                    </p>
                </label>
                <input type="password" />
                <button className={styles.butt}>Sign-In</button>

                <p className={styles.text}>
                    By continuing, you agree to Amaxon's Conditions of Use and
                    Privacy Notice
                </p>

                <div className={styles.checkBoxDiv}>
                    <input type="checkbox" className={styles.check} />
                    <p>
                        Keep me signed in.<a href="">Details</a>
                    </p>
                </div>

                <div>
                    <p className={styles.newToAmazon}>New to Amazon</p>
                </div>

                <button className={styles.createAccountButt}>
                    <Link to="/createaccount">Create your Amazon Account</Link>
                </button>
            </div>

            <div className={styles.footerBox}>
                <div className={styles.conditions}>
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div>
                    <p className={styles.copyRight}>
                        &#169;1996-2021, Amazon.com, Inc. or its affilates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
