import "../style/PaymentPage.css";
import logo from "../images/amazonLogo.png";
import visa from "../images/visa.png";
import rupay from "../images/rupay.png";
import mastercard from "../images/mastercard.png";
import discover from "../images/discover.png";
import raamRaavan from "../images/raamRaavan.png";
import actionAndAdventure from "../images/actionAndAdventure.png";
import Ellipse6 from "../images/Ellipse6.png";

import {
    Button_continueAtPayment
} from "./Styled/ButtonTillCheckout";
import { Link } from "react-router-dom";

export const PaymentPage = () => {
    return (
        <div style={{ width: "100 %", height: "100vh" }}>
            <div className="Navbar">
                <div className="containerNavbar">
                    <div className="leftNavbar">
                        <span className="prime">prime </span>
                        <span className="video">video</span>
                        <br />
                        <img className="amazonLogo" src={logo} alt="" />
                        <p className="watchNow">Watch now,cancel anytime</p>
                        <p className="memberShip">
                            Start your membership today
                        </p>
                    </div>
                    <div className="rightNavbar">
                        <div className="img1Div">
                            <img src={raamRaavan} alt="" />
                        </div>
                        <div className="img2Div">
                            <img src={actionAndAdventure} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <span className="i">i </span>
                <span>
                    Rs129 will be automatically charged every month for your
                    Prime membership.Cancel anytime.
                </span>
            </div>
            <div className="selectPay">Select a payment method</div>

            <div className="paymentOption">
                <p>More payment options</p>
                <hr />
                <img src={Ellipse6} alt="" />
                <span>Add Debit/Credit/ATM card</span>
                <br />
                <span>!</span>
                <span>
                    All credit and select debit cards (HDFC, ICICI, Axis and 4
                    others) supported.
                </span>
                <span>Learn more</span>
                <div className="atmCards">
                    <div>
                        <img src={visa} alt="" />
                    </div>
                    <div>
                        <img src={rupay} alt="" />
                    </div>
                    <div>
                        <img src={mastercard} alt="" />
                    </div>
                    <div>
                        <img src={discover} alt="" />
                    </div>
                </div>
            </div>

            <div className="continue">
                <Link to="/home">
                    <Button_continueAtPayment>
                        {" "}
                        Continue{" "}
                    </Button_continueAtPayment>
                </Link>
            </div>
            <br />
        </div>
    );
};
