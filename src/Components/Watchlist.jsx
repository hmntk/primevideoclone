import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Modules_Css/Watchlist.module.css";
import Play from "../images/Play.png" 
import plus from "../images/plus.png" 
import stop from "../images/stop.png" 
import UA13 from "../images/UA13.png"
import addToWishlist from "../images/addToWishlist.png"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./Context/userContext";


function Watchlist() {
 
    const { userId } = useContext(UserContext);
    const [storeUser, setStoreUser] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
       // handleWatchlist();
        fetchUserWatchList();
    },[]);

     const handleWatchlist = async () => {
        const res = await axios.get("/users/userLoginDetail")
        console.log("loginData", res.data);
         setStoreUser(res.data[0]);
    };

    const fetchUserWatchList = async () => {
        // console.log("id",storeUser)
        // const id = storeUser._id;  
        console.log("userId", userId);
        const res = await axios.get(`/users/userData${userId}`);
        console.log(res.data);
        setList(res.data.wishList);
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
            <div style={{ background: "#0F171E", marginBottom: "-20px" }}>
                <div className={style.watchlist}>
                    <div className={style.names}>
                        <div className={style.allnames}>
                            <p>TV Shows</p>
                            <p>Movies</p>
                            <p className={style.all}>All</p>
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
                    {
                        list.map((e) => {
                            return (
                                <div className={style.watchlistEveryDiv}>
                                    <img src={e.imgUrl} alt="" style={{width:'89%', height:"200px"}}/>
                                
                                    <div className={style.playDiv} >
                                        <p className={style.movieName}>Name of Movie</p>
                                        <div style={{display:"flex"}}>
                                            <p>2021 <img className={style.subtitleImg} src={addToWishlist} /></p>
                                            <img className={style.plusUa13} src={UA13}/>
                                        </div> 
                                    </div>   
                                </div>  
                            )
                        })
                  }  
            </div>

                    <div className={style.recommended23}>
                        <h2
                            className={style.recommendedHeading}
                            style={{
                                color: "white",
                                marginLeft: "45%",
                                marginBottom: "15px",
                            }}
                        >
                            Releated
                        </h2>
                        <div>
                            <Slider {...settings}>
                                {recommended.map((e) => {
                                    return (
                                        <div
                                            className={style.simpleHover}
                                            style={{
                                                width: "26px",
                                                marginLeft: "10px",
                                            }}
                                        >
                                            <img
                                                src={e.imgUrl}
                                                alt=""
                                                style={{
                                                    width: "96%",
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
            </div>
            {/* <div
                style={{
                    height: "30px",
                    background: "#0F171E",
                }}
            ></div> */}
        </>
    );
}

export default Watchlist;