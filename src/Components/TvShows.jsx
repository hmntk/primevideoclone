import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Components/Modules_Css/LandingMain.module.css";
import marathi from "../images/marathi.png";
import "./carausol.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function TvShows() {
    const [recommend, setRecommend] = useState([]);
    const [popular, setPopular] = useState([]);
    const [original, setOriginal] = useState([]);
    const [toprated, setToprated] = useState([]);
    const [action, setAction] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [kids, setKids] = useState([]);
    const [horrer, setHorrer] = useState([]);
    const [dubbed, setDubbed] = useState([]);
    const [telgu, setTelgu] = useState([]);
     const [continu, setContinu] = useState([]);
 
    
    useEffect(() => {
        dataFetch();
        dataFetchForContinue();
        dataFetchForOriginal();
    }, []);
    
     const dataFetchForContinue = async () => {
        const res = await axios.get(
            "https://cryptic-garden-15081.herokuapp.com/continue"
        );
        setContinu(res.data[0].recommended);
    }

      const dataFetchForOriginal = async () => {
        const res = await axios.get(
            "https://cryptic-garden-15081.herokuapp.com/OriginalMovies"
        );
          setOriginal(res.data[0].AmazonOriginalMovies);
    }

    const dataFetch = async () => {
        const res = await axios.get(
            "https://cryptic-garden-15081.herokuapp.com/prime"
        );
        setPopular(res.data[0].PopularMovies);
        setToprated(res.data[0].AmazonOriginalSeries);
        setAction(res.data[0].ActionAndAdventureMovies);
        setKids(res.data[0].kidsAndFamilyMovies);
        setThriller(res.data[0].ThrillerMovies);
        setDubbed(res.data[0].MoviesDubbedInHindi);
        setTelgu(res.data[0].TeluguMovies);
    }
    



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
        <div style={{ background: "#0F171E", marginBottom: "-20px" }}>
            <div style={{ margin: "24px", marginTop: "72px" }}>
                <Slider>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ModernloveReviews/7b1a3248-afce-4022-a295-fdef63056883._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Office_v1/2efa5ef6-b2f4-4c6f-ab0f-a120fa7d934a._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ThematicCampaignSep21/7403bd7d-a9cc-4f77-8754-440050b87cbb._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_TheFather_StarvsFoodS2_Judy_LDM/a1c87c74-2b4c-4cfa-8518-135e0cd7c578._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheGoodDoctorS3/8e35e161-29aa-4026-a720-186cecc58d07._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_2andhalfmen_v1/efa21f30-ca41-4819-8679-04081d7dd3b9._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Office_v1/2efa5ef6-b2f4-4c6f-ab0f-a120fa7d934a._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PataalLokDubbedTamilnTelugu/a88c93c6-64cd-4ab5-b3ff-63f054705e71._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                </Slider>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Continue watching</h2>
                <div>
                    <Slider {...settings}>
                        {continu.map((el) => {
                            return (
                                <div
                                    style={{ width: "0px", marginLeft: "10px" }}
                                >
                                    <Link to="/moviedetail">
                                        <video
                                            muted
                                            className="howerEffect"
                                            poster={el.imgUrl}
                                            onMouseEnter={(e) => {
                                                e.target.src = el.videoUrl;
                                                e.target.play();
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.pause();
                                                e.target.src = el.videoUrl;
                                            }}
                                            src={el.videoUrl}
                                            style={{
                                                width: "250px",
                                                height: "146px",
                                            }}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>
                    Top-rated TV shows on IMDb
                </h2>
                <div>
                    <Slider {...settings}>
                        {original.map((el) => {
                            return (
                                <div
                                    style={{ width: "0px", marginLeft: "10px" }}
                                >
                                    <Link to="/moviedetail">
                                    <video
                                        muted
                                        className="howerEffect"
                                        poster={el.imgUrl}
                                        onMouseEnter={(e) => {
                                            e.target.src = el.videoUrl;
                                            e.target.play();
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.pause();
                                            e.target.src = el.videoUrl;
                                        }}
                                        src={el.videoUrl}
                                        style={{
                                            width: "250px",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>
                    Amazon Original Movies
                </h2>
                <div>
                    <Slider {...settings}>
                        {toprated.map((e) => {
                            return (
                                
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                ><Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>
                    TV shows we think you'll like
                </h2>
                <div>
                    <Slider {...settings}>
                        {popular.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>
                    Amazon Original series
                </h2>
                <div>
                    <Slider {...settings}>
                        {action.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Comedy TV</h2>
                <div>
                    <Slider {...settings}>
                        {kids.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Drama TV</h2>
                <div>
                    <Slider {...settings}>
                        {dubbed.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Thriller TV</h2>
                <div>
                    <Slider {...settings}>
                        {thriller.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Throwback TV</h2>
                <div>
                    <Slider {...settings}>
                        {telgu.map((e) => {
                            return (
                                <div
                                    style={{
                                        width: "26px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Link to="/moviedetail">
                                    <img
                                        src={e.imgUrl}
                                        alt=""
                                        style={{
                                            width: "96%",
                                            height: "146px",
                                        }}
                                    />
                                </Link>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default TvShows;