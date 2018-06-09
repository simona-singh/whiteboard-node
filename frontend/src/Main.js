import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Connection from "./Connection";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";
import Whiteboard from "./Whiteboard";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <li><NavLink to="/">Whiteboard</NavLink></li>
                <h1>Whiteboard</h1>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/whiteboard" component={Whiteboard}/>
                    <Route path="/connection" component={Connection}/>
                    <Route path="/joinroom" component={JoinRoom}/>
                    <Route path="/createroom" component={CreateRoom}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;
