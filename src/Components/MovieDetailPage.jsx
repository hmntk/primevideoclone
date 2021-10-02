import React from "react";
import styled from "styled-components";
import {
    Button_Play,
    Button_playSignOnlyRound,
} from "./Styled/ButtonTillCheckout";
import playSign_onButton from "../images/playSign_onButton.svg";
import playSign_onButton1 from "../images/playSign_onButton1.svg";
import plusSign_onButton from "../images/plusSign_onButton.svg";
import giftSign_onButton from "../images/giftSign_onButton.svg";
import downloadSign_onButton from "../images/downloadSign_onButton.svg";
import ratingAndAll from "../images/ratingAndAll.png";
import top10_Tag from "../images/top10_Tag.svg";
import styles from "../Components/Modules_Css/MovieDetail.module.css";
import AeDilHeMuskil from "./video/AeDilHeMuskil.mp4";
import { Link } from "react-router-dom";

export const MovieDetailPage = () => {
    return (
        <>
            <div className={styles.mainLeft}>
                {" "}
                <div>
                    <h1>Ae Dil Hai Mushkil</h1>
                    <div className={styles.top10_mainDiv}>
                        <img src={top10_Tag} alt="" />
                        <p>Number 1 in india</p>
                    </div>
                    <img
                        className={styles.ratingImg}
                        src={ratingAndAll}
                        alt=""
                    />
                    <p className={styles.description}>
                        This story explores love - the shapes it takes, the ways
                        it changes us and the exhilarating and often terrifying
                        ride it takes us on. It is the journey of two
                        characters, Alizeh and Ayan, as they navigate life, love
                        and heartbreak.
                    </p>
                </div>
                <div className={styles.allButtons_flex}>
                    <Link to="/videoplayer">
                        <Button_Play className={styles.playButton_main}>
                            {" "}
                            <img src={playSign_onButton} alt="" />
                            <h2>Play</h2>
                        </Button_Play>
                    </Link>
                    <Button_playSignOnlyRound>
                        <img src={playSign_onButton1} alt="" />
                    </Button_playSignOnlyRound>
                    <Button_playSignOnlyRound>
                        <img src={plusSign_onButton} alt="" />
                    </Button_playSignOnlyRound>
                    <Button_playSignOnlyRound>
                        <img src={giftSign_onButton} alt="" />
                    </Button_playSignOnlyRound>
                    <Button_playSignOnlyRound>
                        <img src={downloadSign_onButton} alt="" />
                    </Button_playSignOnlyRound>
                </div>
                <div className={styles.directorName_mainDiv}>
                    <div className={styles.directorName_leftDiv}>
                        <div>Directors</div>
                        <div>Starring</div>
                        <div>Genres</div>
                        <div>Subtitles</div>
                        <div>Audio languages</div>
                    </div>
                    <div className={styles.directorName_rightDiv}>
                        <div>Karan Johar</div>
                        <div>Ranbir Kapoor, Anushka Sharma, Aishwarya Rai</div>
                        <div>romantic drama film</div>
                        <div>English</div>
                    </div>
                </div>
                <div className={styles.termsOfuse_mainDiv}>
                    By clicking play, you agree to our <span>Terms of Use</span>
                </div>
            </div>
            <div className={styles.backGroundVideo_mainDiv}>
                <video className={styles.backGroundVideo} autoPlay loop muted>
                    <source src={AeDilHeMuskil} type="video/mp4" />
                </video>
            </div>
            <div className={styles.related_detail_flex}>
                <div>Related</div>
                <div>Details</div>
            </div>
        </>
    );
};
