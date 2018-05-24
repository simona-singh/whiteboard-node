import React, { Component } from "react";
import {
    Route,
    NavLink,
} from "react-router-dom";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";

class Connection extends Component {
    render() {
        return (
            <div>
                <h1>Connection</h1>
                    <li><NavLink to="/joinroom">Join room</NavLink></li>
                    <li><NavLink to="/createroom">Create room</NavLink></li>

                <div className="content">
                    <Route path="/joinroom" component={JoinRoom}/>
                    <Route path="/createroom" component={CreateRoom}/>
                </div>
            </div>
        );
    }
}

export default Connection;