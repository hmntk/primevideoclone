import React, { useState } from "react";
import styles from "./Modules_Css/Navbar2.module.css";
import Primelogo from "../images/Primelogo.svg";
import LanguageEnLogo from "../images/Nav1_LanguageEnglishLogo.svg";
import { Link } from "react-router-dom";
import dropdownIcon from '../images/dropdownSign.svg'
import userImageIcon from '../images/userImageIcon.png'
import searchIcon from '../images/searchIcon.svg'
import kidIcon_dropdown from "../images/kidIcon_dropdown.svg";
import addIcon_dropdown from "../images/addIcon_dropdown.svg";
import close_X_search_button from "../images/close_X_search_button.svg";

const pageDisplay = {
    "textDecoration": "underline",
    "color": "#ffffff"
}
const empty = {
};

export const Navbar2 = ({ displayPage}) => {
    console.log('displayPage:', displayPage)
    const [displayDD, setDisplayDD] = useState(false);
    const [searchItem, setSearchItem] = useState([]);
    console.log('searchItem:', searchItem)
    return (
        <>
            <div className={styles.nav2_mainDiv}>
                <div className={styles.nav2_leftDiv}>
                    <div className={styles.nav2_leftDiv_primelogo}>
                        <img src={Primelogo} alt="" />
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
                            className={styles.nav2_rightDiv_searchInput}
                            placeholder="Search"
                            type="text"
                            name=""
                        ></input>
                        <img
                            className={styles.nav2_right_Xicon}
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
                            <img src={userImageIcon} alt="" />
                        </div>
                        <div className={styles.nav2_rightDiv_un}>Bhanu</div>
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
                <div>
                    <Link className={styles.common_link_color} to="/signout">
                        Not Bhanu?Sign Out
                    </Link>
                </div>
            </div>

            <div className={styles.searchDropdown}>
                {searchItem.map((item) => (
                    <div>{item}</div>
                ))}
            </div>
        </>
    );
};
