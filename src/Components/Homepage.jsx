import {
    Button_LoginToPrime,
    Button_getStarted,
    Button_getPrimePerMonth,
    Button_continueAtPayment,
} from './Styled/ButtonTillCheckout'
import styles from './Modules_Css/Homepage.module.css'
import rectangle12 from "../images/Rectangle12.png";
import rectangle13 from "../images/Rectangle13.png";
import rectangle14 from "../images/Rectangle14.png";
import rectangle15 from "../images/Rectangle15.png";
import rectangle16 from "../images/Rectangle16.png";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
      <div className={styles.Home_mainDiv}>
          <div className={styles.Home_mainDiv_flexDiv}>
              <div>
                  <img src={rectangle12}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Welcome to Prime Video
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Join Prime to watch the latest movies and TV Shows and
                      award-winning Amazon originals
                  </p>
                  <Link to="/signin">
                      <Button_LoginToPrime>
                          Login to Prime Video
                      </Button_LoginToPrime>
                  </Link>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv1}>
              <div>
                  <img src={rectangle13}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Great Entertainment
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      With your Prime memberships, you have access to exclusive
                      Amazon Originals, blockbuster Bollywood movies, regional
                      movies and more.
                  </p>
                  <Link to="/signin">
                      <Button_LoginToPrime>Get started</Button_LoginToPrime>
                  </Link>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv}>
              <div>
                  <img src={rectangle14}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      One membership, many benefits
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Your Prime membership now also inccludes ad-free musicc
                      along with umlimited free, fast delivery on eligible
                      items, exclusive access to deals & more.
                  </p>
                  <Link to="/signin">
                      <Button_LoginToPrime>Get started</Button_LoginToPrime>
                  </Link>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv1}>
              <div>
                  <img src={rectangle13}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Even better with Fire TV Stick
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      The biggest movies and TV shows are always better on a big
                      sccreen. Simply plug in your Amazon Fire TV Stick and
                      stream on any HDTV. Press the voicce button on the remote
                      and say the name of the title you want to watcch to find
                      it in seconds.
                  </p>
                  <Link to="/signin">
                      <Button_LoginToPrime>Get started</Button_LoginToPrime>
                  </Link>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv}>
              <div>
                  <img src={rectangle14}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Family Friendly
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      With easy to use Parental Controls and a dediccated kids
                      page, enjoy seccure, ad-free kids entertainment , Kids
                      ccan enjoy popular TVshows like Peppa Pig, Powerpuff
                      Girls, and Cchhota Bheem
                  </p>
                  <Link to="/signin">
                      <Button_LoginToPrime>Get started</Button_LoginToPrime>
                  </Link>
              </div>
          </div>
      </div>
  );
}

export { Homepage };
