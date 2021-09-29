import "./CreateAccount.css";

const CreateAccount = () => {
   
   
    return (
        <div>
            <div className="CreateAccountInLogoImg" >
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="" />
            </div>
            
            <div className="signupBox" >
                <h2 >Create account</h2>
                <label htmlFor="">Your name</label>
                <input type="text" className="name"/>
                 <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="" className="passwordLine">Password</label>
                <input type="password" className="passwordInput" />
                <p className="passwordGuide">Passwords must be at least 6 characters.</p>
                 <label htmlFor="" className="passwordLine">Re-enter password</label>
                <input type="password" />
                <button className="butt">Create your Amazon account</button>

                <p className="text">By continuing, you agree to Amaxon's Conditions of Use and Privacy Notice</p>
    
                <div className="forSignin">
                    <p>Already have an account?<a href="">Sign-In</a></p>
                 </div>
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

export default  CreateAccount;