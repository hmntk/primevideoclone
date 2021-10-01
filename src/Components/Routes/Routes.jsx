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
import Movies from '../Movies'

export const Routes = () => {
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
                <Route path="/movie">
                    <Movies />
                </Route>
            </Switch>
        </div>
    );
}
