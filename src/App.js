import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//import {Router, Route, IndexRoute} from "react-router";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Root from './component/Root.jsx';
import Home from './component/Home';
import User from './component/User';
const newHistory = createBrowserHistory();
class App extends Component {

    render() {
        return (
            <Root>
                <BrowserRouter history={newHistory}>

                    <section>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/user"} component={User}/>
                    </section>

                </BrowserRouter>

            </Root>

        );
    }
}

export default App;
