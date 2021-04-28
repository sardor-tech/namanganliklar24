import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NavHeader from "../nav-header/NavHeader";
import FooterN from "../footer/FooterN";
import Body from "../ready-part/Body";
import PreBody from "../pre-Body/PreBody";

class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavHeader/>
                    <Switch>
                        <Route exact path='/' component={Body}></Route>
                        <Route exact path='/uz' component={PreBody} />
                    </Switch>
                    <FooterN/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;