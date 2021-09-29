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
                  <Button_LoginToPrime>
                      <Link to="/signin">Login to Prime Video</Link>
                  </Button_LoginToPrime>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv1}>
              <div>
                  <img src={rectangle13}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Welcome to Prime Video
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Join Prime to watch the latest movies and TV Shows and
                      award-winning Amazon originals
                  </p>
                  <Button_LoginToPrime>
                      <Link to="/signin">Login to Prime Video</Link>
                  </Button_LoginToPrime>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv}>
              <div>
                  <img src={rectangle14}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Welcome to Prime Video
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Join Prime to watch the latest movies and TV Shows and
                      award-winning Amazon originals
                  </p>
                  <Button_LoginToPrime>
                      <Link to="/signin">Login to Prime Video</Link>
                  </Button_LoginToPrime>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv1}>
              <div>
                  <img src={rectangle13}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Welcome to Prime Video
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Join Prime to watch the latest movies and TV Shows and
                      award-winning Amazon originals
                  </p>
                  <Button_LoginToPrime>
                      <Link to="/signin">Login to Prime Video</Link>
                  </Button_LoginToPrime>
              </div>
          </div>
          <div className={styles.Home_mainDiv_flexDiv}>
              <div>
                  <img src={rectangle14}></img>
              </div>
              <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
                  <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
                      Welcome to Prime Video
                  </h1>
                  <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
                      Join Prime to watch the latest movies and TV Shows and
                      award-winning Amazon originals
                  </p>
                  <Button_LoginToPrime>
                      <Link to="/signin">Login to Prime Video</Link>
                  </Button_LoginToPrime>
              </div>
          </div>
      </div>
  );
}

export { Homepage };
