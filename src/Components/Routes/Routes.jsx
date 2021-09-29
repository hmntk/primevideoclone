import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Footer1 } from '../Footer1'
import { Homepage } from '../Homepage'
import { Navbar1 } from '../Navbar1'
import Signin from '../Signin'
import CreateAccount from '../CreateAccount'
import { PaymentPage } from '../PaymentPage'

export const Routes = () => {
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
                <Route path="/payment">
                    <PaymentPage />
                </Route>
            </Switch>
        </div>
    );
}
