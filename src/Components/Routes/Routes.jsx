import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer1 } from '../Footer1'
import { Homepage } from '../Homepage'
import { SubscriptionPage } from '../SubscriptionPage'
import LandingMain from "../LandingMain";
import { Navbar1 } from '../Navbar1'
import Signin from '../Signin'
import CreateAccount from '../CreateAccount'
import { PaymentPage } from '../PaymentPage'
import { Navbar2 } from '../Navbar2';
import { Navbar3 } from '../Navbar3';
import TvShows from '../TvShows';
import { VideoPlayer1 } from '../VideoPlayer';
import { MovieDetailPage } from '../MovieDetailPage';
import KidsPage from '../KidsPage';
import MoviesTabPage from '../MoviesTabPage';
import Movies from '../Movies';
import Watchlist from '../Watchlist';
import OriginalMovies from '../OriginalMovies';
import { PrivateRoutes } from '../Common/PrivateRoutes'
// import axios from "axios";
// import { useState } from "react";

export const Routes = () => {

    // const [test, setTest] = useState("");

    // async function getData() {
    //     let res = await axios.get("/prime");
    //     console.log(res);
    //     setTest(res.data);
    // }
    // getData();
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Navbar1 />
                    <Homepage />
                    <Footer1 />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/createaccount">
                    <CreateAccount />
                </Route>
                <PrivateRoutes path="/subscription">
                    <Navbar3 />
                    <SubscriptionPage />
                    <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/payment">
                    <PaymentPage />
                </PrivateRoutes>
                <PrivateRoutes path="/home">
                    <Navbar2 displayPage="home" />
                    <LandingMain />
                    <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/tvshows">
                    <Navbar2 displayPage="tvshows" />
                    <TvShows />
                    <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/movies">
                    <Navbar2 displayPage="movies" />
                    <MoviesTabPage />
                    <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/kids">
                    <Navbar2 displayPage="kids" />
                    <KidsPage />
                    <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/videoplayer">
                    <VideoPlayer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/watchlist">
                    <Navbar2 displayPage="WatchList" />
                    <Watchlist />
                     <Footer1 />
                </PrivateRoutes>
                 <PrivateRoutes path="/originalMovies">
                    <Navbar2 displayPage="originalMovies" />
                    <OriginalMovies />
                     <Footer1 />
                </PrivateRoutes>
                <PrivateRoutes path="/moviedetail">
                    <Navbar2 displayPage="" />
                    <MovieDetailPage />
                    <Footer1 />
                </PrivateRoutes>
            </Switch>
        </div>
    );
}
