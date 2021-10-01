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
import TvShows from '../TvShows';
import { VideoPlayer1 } from '../VideoPlayer';
import { MovieDetailPage } from '../MovieDetailPage';
import KidsPage from '../KidsPage';
import MoviesTabPage from '../MoviesTabPage';
import Movies from '../Movies'
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
                <Route exact path="/subsciption">
                    <Navbar1 />
                    <SubscriptionPage />
                    <Footer1 />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/createaccount">
                    <CreateAccount />
                </Route>
                <Route path="/subscription">
                    <Navbar2 />
                    <SubscriptionPage />
                    <Footer1 />
                </Route>
                <Route path="/payment">
                    <PaymentPage />
                </Route>
                <Route path="/home">
                    <Navbar2 displayPage="home" />
                    <LandingMain />
                    <Footer1 />
                </Route>
                <Route path="/tvshows">
                    <Navbar2 displayPage="tvshows" />
                    <TvShows />
                    <Footer1 />
                </Route>
                <Route path="/movies">
                    <Navbar2 displayPage="Movies" />
                    <MoviesTabPage />
                    <Footer1 />
                </Route>
                <Route path="/kids">
                    <Navbar2 displayPage="Kids" />
                    <KidsPage />
                    <Footer1 />
                </Route>
                <Route path="/movie">
                    <Movies />
                </Route>
                <Route path="/videoplayer">
                    <VideoPlayer1 />
                </Route>
                <Route path="/moviedetail">
                    <Navbar2 displayPage="" />
                    <MovieDetailPage />
                    <Footer1 />
                </Route>
            </Switch>
        </div>
    );
}
