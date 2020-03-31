import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import '../components/App.css';
import Home from '../components/Home';
import PurchaseTicket from '../components/PurchaseTicket';
import TicketPurchase from '../pages/TicketPurchase';

class App extends Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/purchase' component={TicketPurchase} />
                    </Switch>
                </HashRouter>
            </Fragment>
        );
    }
}

export default App;