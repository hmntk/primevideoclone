import "../style/PaymentPage.css"
import logo from '../image/amazonLogo.png'
import visa from '../image/visa.png'
import rupay from '../image/rupay.png'
import mastercard from '../image/mastercard.png'
import discover from '../image/discover.png'

export const PaymentPage = () => {
    return <div>
        <div className="Navbar">
            <div className="containerNavbar">
                <span className="prime">prime </span><span className="video">video</span>
                <br />
                <img className="amazonLogo" src={logo} alt="" />
                <p className="watchNow">Watch now,cancel anytime</p>
                <p className="memberShip">Start your membership today</p>
            </div>
            <div className="info">
                 <span className="i">i </span><span>Rs129 will be automatically charged every month for your Prime membership.Cancel anytime.</span>
            </div>
            <div className="selectPay">Select a payment method</div >

            <div className="paymentOption">
                <p>More payment options</p>
                < hr />
              <span></span>
                <span>Add Debit/Credit/ATM card</span>
                <br />
                <span>!</span>
                <span>All credit and select debit cards (HDFC, ICICI, Axis and 4 others) supported.</span>
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

      </div>
    </div>
}