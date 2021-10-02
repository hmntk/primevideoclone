import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Modules_Css/OriginalMovies.module.css";
import Play from "../images/Play.png";
import plus from "../images/plus.png";
import stop from "../images/stop.png";
import UA13 from "../images/UA13.png";
import addToWishlist from "../images/addToWishlist.png";
import { useEffect, useState } from "react";
import axios from "axios";


function OriginalMovies() {

    const [original, setOriginal] = useState([]);

    useEffect(() => {
        dataFetchForOriginal();
    }, []);

    const dataFetchForOriginal = async () => {
        const res = await axios.get("/OriginalMovies");
          setOriginal(res.data[0].AmazonOriginalMovies);
    }

    const dummyList = [
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3eb50ab78523d4d785a208d0cb697a7365a9ca634b00508fd50a7288d7e95b13._UR1920,1080_RI_UX667_UY375_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/65cbb8507cfa9e3a2fcb8fd691bc1b37fbb926ee2d83458586366a923caadf4c._UR1920,1080_RI_UX667_UY375_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/792d75a7465ee9349f771cccf859b5e85b1bb4a8c6762e32f3f3ad34acf17b62._UR1920,1080_RI_UX400_UY225_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/39d15f8ad9df1233fe8db93de54ff780f5d1dbcac50d7d533eae13813fac85a3._UR1920,1080_RI_UX400_UY225_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9478c3fdc01fcaf24e417716057b741bc717672ae248b934a2150db38203caa6._UR1920,1080_RI_UX400_UY225_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/50cf89643301e3532a3448862f3d1647f01841fcb3343d433621ffd4b0551c33._UR1920,1080_RI_UX400_UY225_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e538445df25c5ba39500c82dcab9bd947331f87d445b5762039522ed97b34e8c._UR1920,1080_RI_UX400_UY225_.jpg"
        },
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/803ead2c03fa23d664a32328a48468bccdae94659b5cb620c84e30f9f9f8482d._UR1920,1080_RI_UX400_UY225_.jpg"
        },

    ]

     const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        width: "269px",
    };

   

    return (
        <div
            style={{
                background: "#0F171E",
                marginBottom: "-90px",
                marginTop: "-18px",
            }}
        >
            <div className={style.watchlist}>
                <div className={style.names}>
                    <div className={style.allnames}>
                        <p className={style.all}>Amazon Original Movies</p>
                    </div>
                    <div>
                        <div>
                            Sort by:{" "}
                            <a className={style.all}>
                                {" "}
                                Most Recent Addition{" "}
                                <a className={style.yee}>v </a>{" "}
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.showGrid}>
                    {original.map((el) => {
                        return (
                            <div className={style.watchlistEveryDiv}>
                                <video
                                    muted
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
                                    style={{ width: "250px", height: "146px" }}
                                />

                                <div className={style.playDiv}>
                                    <p className={style.movieName}>
                                        {el.title}
                                    </p>
                                    <div style={{ display: "flex" }}>
                                        <p style={{ marginTop: "5px" }}>
                                            {el.year}{" "}
                                            <img
                                                className={style.subtitleImg}
                                                src={addToWishlist}
                                            />
                                        </p>
                                        <img
                                            className={style.plusImg}
                                            src={plus}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default OriginalMovies;