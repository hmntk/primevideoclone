import "./Signin.css";

const Signin = () => {
    return (
        <div>
            <div className="signupInLogoImg">
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="" />
            </div>
            
            <div className="signupBox">
                <h2 >Sign-In</h2>
                
                <label htmlFor=""><p>Email or Mobile Phone Number</p></label>
                <input type="text" />
                <label htmlFor="" className="passwordLine">
                    <p>Password</p>
                    <p className="forgot"><a href="">Forgot your password</a></p>
                </label>
                <input type="password" />
                <button className="butt">Sign-In</button>

                <p className="text">By continuing, you agree to Amaxon's Conditions of Use and Privacy Notice</p>

                <div className="checkBoxDiv">
                    <input type="checkbox" className="check" />
                    <p>Keep me signed in.<a href="">Details</a></p>
                </div>
                
                <div>
                    <p className="newToAmazon">New to Amazon</p>
                </div>
 
                <button className="createAccountButt">Create your Amazon Account</button>
            </div>
            
            <div className="footerBox">
                <div className="conditions">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                     <p>Help</p>
                </div>
                <div>
                    <p className="copyRight">&#169;1996-2021, Amazon.com, Inc. or its affilates</p>
                </div>
            </div>
        </div>
    );
}

export default  Signin;