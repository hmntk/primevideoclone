import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Components/Modules_Css/LandingMain.module.css";
import marathi from "../images/marathi.png";
import "./carausol.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function MoviesTabPage() {

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
    }, []);
    
     const dataFetchForContinue = async () => {
        const res = await axios.get("/continue");
        console.log(res.data[0].recommended);
        setContinu(res.data[0].recommended);
    }

    const dataFetch = async () => {
        const res = await axios.get("/prime");
        console.log(res.data[0]);
        setPopular(res.data[0].PopularMovies);
        setOriginal(res.data[0].AmazonOriginalMovies);
        setToprated(res.data[0].AmazonOriginalSeries);
        setAction(res.data[0].ActionAndAdventureMovies);
        setKids(res.data[0].kidsAndFamilyMovies);
        setThriller(res.data[0].ThrillerMovies);
        setHorrer(res.data[0].HorrorMovies);
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

     const marathi = [
        {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2f357e13de63a1246b11e293fdc216179e9127ada63fe408490146987868bc85._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
         {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e87f9342f6839fbd7b7c00cca5a1c850bdc73dd8987bfb5290c28ac9d248bca2._UR1920,1080_RI_SX356_FMwebp_.jpg",
        },
          {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/51d74784737f37c2cf5a7ba278a65ea29a77a912a384e9b4fa03b32d6b45a79d._UR1920,1080_RI_UX400_UY225_.jpg",
        },
           {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d68e2b14737119efe26fb2c4b3677427e1f9fac10b540ade0aacbd0b775fda02._UR1920,1080_RI_UX400_UY225_.jpg",
        },
            {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4002df65ce01051500b6b51cca1d5e9d999796f2dadb083f60ab489c22f7ff7a._UR1920,1080_RI_UX400_UY225_.jpg",
        },
             {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/eead86202416219b02fa250fb152167d4906cc219ce79d03d338eb8c351c0b9c._UR1920,1080_RI_UX400_UY225_.jpg",
        },
         {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2f357e13de63a1246b11e293fdc216179e9127ada63fe408490146987868bc85._UR1920,1080_RI_UX400_UY225_.jpg",
        },
          {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d19cd916a5171269415d782b7586907469a5d7b942ee6546eac379489e4a6d97._UR1920,1080_RI_UX400_UY225_.jpg",
        },
           {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8069cee98afd35d5f49aeeb48ee514b7877daae54a2a942ea99ea27cad1ecb2d._UR1920,1080_RI_UX400_UY225_.jpg",
        },
            {
            imgUrl:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5836208596e4702385af95d32f5b636c9151bf29ba787d321a3716b2a749a658._UR1920,1080_RI_UX400_UY225_.jpg",
        },
    ]


   
    return (
        <>
       
            <div style={{ margin: "24px", marginTop: "72px" }}>
                <Slider>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ChehreLaunch/75ceb0ac-2ce2-49d0-8fdb-1d0fda655205._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BingoHellLaunch/e6b3e65a-0f04-4fee-8d31-e57f02286086._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_GullyBoyFilmfare/5011486a-67fe-410d-a5d9-16e40cf481d6._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SardarUdhamTrailerSG/fd124b52-179e-4613-a8dd-2f907536549b._UR3000,600_SX1500_FMwebp_.jpeg"
                        ></img>
                    </div>
                    <div>
                        <img
                            style={{ width: "100%", height: "50vh" }}
                            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Multititle_Manoramamax/74f8ec44-73a2-4423-a968-dc50cada303c._UR3000,600_SX1500_FMwebp_.jpeg"
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
                            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_BaarBaarDekho/d52bd3a6-3af7-47bd-aaf6-30f9caa1be48._UR3000,600_SX1500_FMwebp_.jpg"
                        ></img>
                    </div>
                </Slider>
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Continue watching</h2>
                <div>
                    <Slider {...settings}>
                        {
                            continu.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
               
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Recommended movies</h2>
                <div>
                    <Slider {...settings}>
                        {
                            recommended.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
               
            </div>

            <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Movies in Hindi</h2>
                <div>
                    <Slider {...settings}>
                        {
                            popular.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
               
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Movies in Marathi</h2>
                <div>
                    <Slider {...settings}>
                        {
                            marathi.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
               
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Comedy Movies</h2>
                <div>
                    <Slider {...settings}>
                        {
                            kids.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
               
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Horror Movies</h2>
                <div>
                    <Slider {...settings}>
                        {
                            horrer.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{ width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Drama TV</h2>
                <div>
                    <Slider {...settings}>
                        {
                            dubbed.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>  
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Thriller TV</h2>
                <div>
                    <Slider {...settings}>
                        {
                            thriller.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>   
            </div>

             <div className={style.recommended}>
                <h2 className={style.recommendedHeading}>Throwback TV</h2>
                <div>
                    <Slider {...settings}>
                        {
                            telgu.map((e) => {
                                return (
                                    <div style={{width: "26px" ,marginLeft:"10px"}}>
                                        <img src={e.imgUrl} alt="" style={{width: "96%", height: "146px" }} />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div> 
            </div>
       </>     
    );
}

export default MoviesTabPage;