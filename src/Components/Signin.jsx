import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import ErrorSign_Signin from "../images/ErrorSign_Signin.svg";
import "./Signin.css";

const initState = {
    name: "",
    password: "",
};

const Signin = () => {
    const [signinData, setsigninData] = useState(initState);
    const [error, setError] = useState(false);
    const [errorData, setErrorData] = useState("");
    const history = useHistory();
    const {toggleAuth } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setsigninData({ ...signinData, [name]: value });
    };

    const sendDataToDatabase = async (e) => {
        e.preventDefault();
        let res = await axios.post(
            `https://cryptic-garden-15081.herokuapp.com/users/logindata`,
            signinData
        );
        if (res.data === 'Invalid credentials') {
            setError(true);
            setErrorData("Invalid credentials");
        } else {
            toggleAuth('true');
            history.push("/subscription");
        }
    };

    return (
        <>
        <div>
            <div className="signupInLogoImg">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
                    alt=""
                />
            </div>
            <div className={error ? "ErrorBox" : "errorBoxHide"}>
                <div>
                    <img src={ErrorSign_Signin} alt="" />
                    <h2>There Was a Problem</h2>
                </div>
                <div>
                    <p>{errorData}</p>
                </div>
            </div>

            <div className="signupBox">
                <h2>Sign-In</h2>
                <form method="POST" onSubmit={sendDataToDatabase}>
                    <label htmlFor="">
                        <p>Email or Mobile Phone Number</p>
                    </label>
                    <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        required
                    />
                    <label htmlFor="" className="passwordLine">
                        <p>Password</p>
                        <p className="forgot">
                            <a href="">Forgot your password</a>
                        </p>
                    </label>
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        minLength="6"
                        required
                    />
                    <input className="butt" type="submit" value="Sign-In" />
                </form>

                <p className="text">
                    By continuing, you agree to Amaxon's Conditions of Use and
                    Privacy Notice
                </p>

                <div className="checkBoxDiv">
                    <input type="checkbox" className="check" />
                    <p>
                        Keep me signed in.<a href="">Details</a>
                    </p>
                </div>

                <div>
                    <p className="newToAmazon">New to Amazon</p>
                </div>

                <button className="createAccountButt">
                    {" "}
                    <Link to="/createaccount"> Create your Amazon Account</Link>
                </button>
            </div>

            <div className="footerBox">
                <div className="conditions">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div>
                    <p className="copyRight">
                        &#169;1996-2021, Amazon.com, Inc. or its affilates
                    </p>
                </div>
            </div>
            </div>
            </>
    );
};

export default Signin;
