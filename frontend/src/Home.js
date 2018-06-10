import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome!</h2>
                <p>This is my whiteboard app! Connect to a room or create your own to share the whiteboard
                    with others! Have a jolly good time :)</p>
                <li><NavLink to="/session">Connect to a whiteboard!</NavLink></li>
            </div>
        );
    }
}

export default Home;