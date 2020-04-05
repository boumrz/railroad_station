import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import '../components/App.css';
import Home from '../components/Home';
import PrivateOffice from '../pages/PrivateOffice';
import TicketPurchase from '../pages/TicketPurchase';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import ForgotPassword from '../pages/ForgotPassword';

class App extends Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/purchase' component={TicketPurchase} />
                        <Route exact path='/office' component={PrivateOffice} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/registration' component={Registration} />
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                    </Switch>
                </HashRouter>
            </Fragment>
        );
    }
}

export default App;