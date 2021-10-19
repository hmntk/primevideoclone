import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Modules_Css/Navbar2.module.css";
import Primelogo from "../images/Primelogo.svg";
import LanguageEnLogo from "../images/Nav1_LanguageEnglishLogo.svg";
import { Link, useHistory } from "react-router-dom";
import dropdownIcon from "../images/dropdownSign.svg";
import userImageIcon from "../images/userImageIcon.png";
import searchIcon from "../images/searchIcon.svg";
import kidIcon_dropdown from "../images/kidIcon_dropdown.svg";
import addIcon_dropdown from "../images/addIcon_dropdown.svg";
import close_X_search_button from "../images/close_X_search_button.svg";
import bhanu from "../images/bhanu.png";
import axios from "axios";
import debounce from "lodash.debounce";
import { AuthContext } from "./Context/AuthContext";

const pageDisplay = {
    textDecoration: "underline",
    color: "#ffffff",
};
const empty = {};

export const Navbar2 = ({ displayPage }) => {
    const [displayDD, setDisplayDD] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [searchItem1, setSearchItem1] = useState("");
    const [storeSearchResult, setStoreSearchResult] = useState([]);
    const [closeDisplay, setCloseDisplay] = useState(false);
    const [userDetail, setUserDetail] = useState([]);
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const history = useHistory();

    const handleSearch = async () => {
        let res = await axios.get(
            `http://www.omdbapi.com/?s=${searchItem}&i=tt4559006&apikey=3b96dacc&_limit=5`
        );
        if (res.data.Search !== undefined) {
            setStoreSearchResult(res.data.Search);
        }
    };

    const getUserDetail = async () => {
        let res = await axios.get(
            "https://cryptic-garden-15081.herokuapp.com/users/userLoginDetail"
        );
        setUserDetail(res.data[0]);
    };
//cryptic-garden-15081.herokuapp.com
https: useEffect(() => {
    getUserDetail();
}, []);

    useEffect(() => {
        handleSearch();
    }, [searchItem]);

    useEffect(() => {
        closeButtonSearch();
        setDisplayDD(false);
    }, [displayPage]);

    const deb = useCallback(debounce((txt) => setSearchItem(txt), 500));

    const handleText = (e) => {
        console.log("e:", e);
        let txt = e.target.value;
        setCloseDisplay(true);
        setSearchItem1(txt);
        deb(txt);
    };

    const closeButtonSearch = () => {
        setCloseDisplay(false);
        setSearchItem1("");
    };

    const handleSignout = async () => {
        let res = await axios.delete(
            "https://cryptic-garden-15081.herokuapp.com/users/userSignout"
        );
        console.log(res.data);
        toggleAuth("false");
        history.push("/");
    };

    return (
        <>
            <div className={styles.nav2_mainDiv}>
                <div className={styles.nav2_leftDiv}>
                    <div className={styles.nav2_leftDiv_primelogo}>
                        <Link to='/home'><img src={Primelogo} alt="" /></Link>
                    </div>
                    <div className={styles.nav2_leftDiv_home}>
                        <Link
                            style={displayPage === "home" ? pageDisplay : empty}
                            className={styles.common_link_color}
                            to="/home"
                        >
                            Home
                        </Link>
                    </div>
                    <div
                        className={
                            (styles.nav2_leftDiv_tv, styles.nav2_leftDiv_common)
                        }
                    >
                        <Link
                            style={
                                displayPage === "tvshows" ? pageDisplay : empty
                            }
                            className={styles.common_link_color}
                            to="/tvshows"
                        >
                            TV Shows
                        </Link>
                    </div>
                    <div
                        className={
                            (styles.nav2_leftDiv_movies,
                            styles.nav2_leftDiv_common)
                        }
                    >
                        <Link
                            style={
                                displayPage === "movies" ? pageDisplay : empty
                            }
                            className={styles.common_link_color}
                            to="/movies"
                        >
                            Movies
                        </Link>
                    </div>
                    <div
                        className={
                            (styles.nav2_leftDiv_kids,
                            styles.nav2_leftDiv_common)
                        }
                    >
                        <Link
                            style={displayPage === "kids" ? pageDisplay : empty}
                            className={styles.common_link_color}
                            to="/kids"
                        >
                            Kids
                        </Link>
                    </div>
                </div>
                <div className={styles.nav2_rightDiv}>
                    <div className={styles.nav2_rightDiv_search}>
                        <img
                            className={styles.nav2_rightDiv_searchIcon}
                            src={searchIcon}
                            alt=""
                        />
                        <input
                            onChange={handleText}
                            className={styles.nav2_rightDiv_searchInput}
                            placeholder="Search"
                            type="text"
                            value={searchItem1}
                            name=""
                        ></input>
                        <img
                            onClick={closeButtonSearch}
                            className={
                                closeDisplay
                                    ? styles.nav2_right_Xicon
                                    : styles.nav2_right_Xicon_hide
                            }
                            src={close_X_search_button}
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => setDisplayDD(!displayDD)}
                        className={styles.nav2_rightDiv_signIn}
                    >
                        {" "}
                        <div className={styles.nav2_rightDiv_userImage}>
                            <img src={bhanu} alt="" />
                        </div>
                        <div className={styles.nav2_rightDiv_un}>
                            {userDetail.name}
                        </div>
                        <div className={styles.nav2_rightDiv_dd}>
                            <img src={dropdownIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    displayDD ? styles.profileDropdown : styles.profileDropdown1
                }
            >
                <div>
                    <Link className={styles.common_link_color} to="/watchlist">
                        Your Watchlist
                    </Link>
                </div>
                <div className={styles.withIcon_dropdown}>
                    <img src={kidIcon_dropdown} alt="" />{" "}
                    <p className={styles.withIcon_dropdown_p}>Kids</p>
                </div>
                <div>Account & Settings</div>
                <div className={styles.withIcon_dropdown}>
                    <img src={addIcon_dropdown} alt="" />{" "}
                    <p className={styles.withIcon_dropdown_p}>Add new</p>
                </div>
                <div>Watch anywhere</div>
                <div>Manage Profiles</div>
                <div>Help</div>
                <div>Learn more</div>
                <div
                    className={styles.common_link_color}
                    onClick={handleSignout}
                >
                    Not {userDetail.name}?Sign Out
                </div>
            </div>

            <div className={styles.searchDropdown}>
                {setStoreSearchResult.length !== 0 && closeDisplay
                    ? storeSearchResult.map((item) => (
                          <Link
                              onClick={closeButtonSearch}
                              className={styles.common_link_color}
                              to="/moviedetail"
                          >
                              <div>{item.Title}</div>
                          </Link>
                      ))
                    : ""}
            </div>
        </>
    );
};
