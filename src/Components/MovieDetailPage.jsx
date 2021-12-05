import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Components/Modules_Css/LandingMain.module.css";
import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { UserContext } from "./Context/userContext";

export const MovieDetailPage = () => {
   
    const {handleUserId} = useContext(UserContext);
    const [storeUser, setStoreUser] = useState([]);

    useEffect(() => {
        handleWatchlist();
    }, []);

    const handleWatchlist = async () => {
        const res = await axios.get(
            "https://cryptic-garden-15081.herokuapp.com/users/userLoginDetail"
        );
        setStoreUser(res.data[0]);
    };

    if (storeUser._id != "") {
        handleUserId(storeUser._id);
    }

    const AeDil = {
            "title":"Ae Dil Hai Mushkil",
            "videoUrl":"https://s3-dub-2.cf.trailer.row.aiv-cdn.net/96ed/e099/764f/4e96-bf3c-092d5aadb2c2/7e457a5e-079a-4165-8fc0-ee451c99ffaf_video_900_audio_aaclc_128.mp4?Expires=1633034130&Signature=FRGzj1Tl3-MzuLZkAFFf2Sul38nwjrk6aw2zltELkM9p6QKm41141ND-DhM1OagfGj3aWQFzJpIY2lZoaUHjQ8HtBBbHxk3KNgv7m9P-wkK1HHYCUf6QUFAFso3kWvLJz8luiJwBld5pDIAQxP~PvtLuryJuvOpbdw68QL96OENExr~ueWKytS~6tcl-afToinvs-jp189zK21efbPp~u7BTrTQW4eDwt3B6H2c6FMHWk9orU0zoNuZKtwgJoZJ4hKDjp1ErKelUgQfCbP-l-DRRwm7LEdNsYCcXHgcQk2JNMc9iqRChjeA138SZWFEXFqOwAWrOzbQQfB-GhaID5A__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA",
            "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCWjzvVHNb4klFIlm5CHK6PqjYqvLGNXTxA&usqp=CAU",
             "language":"hindi",
             "discription":"In this romantic drama, a popular singer Ayan Senger (Ranbir Kapoor) recounts his turbulent relationship with Alizeh Khan (Anushka",
             "imdb": 6,
             "duration":"2 h 35 min",
             "year": 2016
    }

    const handleAddToWatchList = async () => {
        const id = storeUser._id;
        const res = await axios.patch(
            `https://cryptic-garden-15081.herokuapp.com/users/watched${id}`,
            AeDil
        );
    };

     const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        width: "269px",
    };

     const recommended = [
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/94eabbaa620f5da40abdbd02587e6faa169838b28d2faf4d188e6ec1a28b9634._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
         {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7cd672232f542925bce006887946293883c698b57821a668bab1c85795a93233._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
          {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4157149fd198b33b353ead1e45328f8b9aafc816826ed953bda0c97b25897259._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
           {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f387592b927d1b21ace38e9f42f2525d4ec9f1b66029cd32ed8e96f873263b33._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
            {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/221c6de30cbbfa729760fbb648c2ce2967eef09996a2ae7b6f8b68c003de0a95._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
             {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d71f272ec92a04236f123f934e810b99ae855f6f9a15ebc771115a9122696c9f._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
         {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/94d515b0c5e14f12c842cc52a254e0f15c586782076ea5e3ade3bba286b58228._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
          {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e323fc56618beed340bb15edb735dbae73162d812debae9b746f4d9c9eede5f._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
           {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/aed3ef6cf3a23590a421d0765d1ed1238cef16f4de02840efe7b00033ab2815a._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
            {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bee4c34123ee1b254dc1d55abc8f708b34a3827892588d6819d5c20fd6a5da13._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
    ]
 
    return (
        <>
            <div
                style={{
                    height: "30px",
                    background: "#0F171E",
                    marginTop: "72px",
                }}
            ></div>
            <div style={{ background: "#0F171E" }}>
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
                            This story explores love - the shapes it takes, the
                            ways it changes us and the exhilarating and often
                            terrifying ride it takes us on. It is the journey of
                            two characters, Alizeh and Ayan, as they navigate
                            life, love and heartbreak.
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
                            <img
                                src={plusSign_onButton}
                                onClick={handleAddToWatchList}
                                alt=""
                            />
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
                            <div>
                                Ranbir Kapoor, Anushka Sharma, Aishwarya Rai
                            </div>
                            <div>romantic drama film</div>
                            <div>English</div>
                        </div>
                    </div>
                    <div className={styles.termsOfuse_mainDiv}>
                        By clicking play, you agree to our{" "}
                        <span>Terms of Use</span>
                    </div>
                </div>
                <div className={styles.backGroundVideo_mainDiv}>
                    <video
                        className={styles.backGroundVideo}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={AeDilHeMuskil} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.related_detail_flex}>
                    <div>Related</div>
                    <div>Details</div>
                </div>
                <div className={styles.recommended}>
                    <h2 className={styles.recommendedHeading}></h2>
                    <div>
                        <Slider {...settings}>
                            {recommended.map((e) => {
                                return (
                                    <div
                                        style={{
                                            width: "26px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        <img
                                            src={e.imgUrl}
                                            alt=""
                                            style={{
                                                width: "250px",
                                                height: "146px",
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};
