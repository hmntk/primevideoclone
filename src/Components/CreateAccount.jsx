
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CreateAccount.css";
import ErrorSign_Signin from "../images/ErrorSign_Signin.svg";
    const initState = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

const CreateAccount = () => {
    const [signUpData, setsignUpData] = useState(initState)
    const [error, setError] = useState(false)
    const [errorData, setErrorData] = useState('')
    const history = useHistory();
    
        const handleChange=((e) => {
            
            const { name, value } = e.target;
            setsignUpData({...signUpData,
                [name]: value,
            })
        })
    // console.log(signUpData);
    const sendDataToDatabase = async(e) => {
        e.preventDefault();
        const {password, confirmPassword } = signUpData;
        if (password === confirmPassword) {
            let res = await axios.post("/users/signup", signUpData);
            if (res.data === 'Email already exist') {
                setErrorData("Account already exists");
                setError(true);
            } else {
                history.push("/signin");
            }
        } else {
            setErrorData("Mismatch between Password");
            setError(true)
        }
    }

    
    return (
        <div>
            <div className="CreateAccountInLogoImg">
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
                <form method="POST" onSubmit={sendDataToDatabase}>
                    <h2>Create account</h2>
                    <label htmlFor="">Your name</label>
                    <input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="name"
                        required
                    />
                    <label htmlFor="">Email</label>
                    <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        required
                    />
                    <label htmlFor="" className="passwordLine">
                        Password
                    </label>
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        minLength="6"
                        className="passwordInput"
                        required
                    />
                    <p className="passwordGuide">
                        Passwords must be at least 6 characters.
                    </p>
                    <label htmlFor="" className="passwordLine">
                        Re-enter password
                    </label>
                    <input
                        onChange={handleChange}
                        name="confirmPassword"
                        type="password"
                        minLength="6"
                        required
                    />
                    <input
                        type="submit"
                        className="butt"
                        value="Create your Amazon account"
                    />
                </form>

                <p className="text">
                    By continuing, you agree to Amaxon's Conditions of Use and
                    Privacy Notice
                </p>

                <div className="forSignin">
                    <p>
                        Already have an account?
                        <Link to="/signin">Sign-In</Link>
                    </p>
                </div>
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
    );
}

export default  CreateAccount;