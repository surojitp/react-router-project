import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (

            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={"/home"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/user/10"} activeClassName={"active"}>User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Header;