import React from "react";
import VideoPlayer from 'react-video-js-player';
import AeDilHeMuskil from "./video/AeDilHeMuskil.mp4";
import posterImage from './video/aedilWallpaper.webp'
import './Modules_Css/videoPlayerFinal.css'
import close_X_search_button from '../images/close_X_search_button.svg'
import { Link } from "react-router-dom";


export const VideoPlayer1 = () => {
    const videoSrc = AeDilHeMuskil;
    const poster = posterImage;
    return (
        <>
            {/* <h1>VideoJs</h1> */}
            <div className='video_mainDiv'>
                <Link to='/moviedetail'>
                <img
                    className="closeTheVideo"
                    src={close_X_search_button}
                    alt=""
                />
                </Link>
                <VideoPlayer
                    controls
                    src={videoSrc}
                    poster={poster}
                    width="720"
                    height="420"
                ></VideoPlayer>
            </div>
        </>
    );
};
