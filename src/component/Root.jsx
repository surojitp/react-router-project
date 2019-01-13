import React, {Component} from 'react';
import Header from './Header'
import Home from './Home';
import User from './User';

class Root extends Component {
    state = {}
    render() {
        return (
            <div className="container">

                <div className="row bg-dark">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default Root;