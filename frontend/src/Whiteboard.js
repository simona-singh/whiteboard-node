import React, { Component } from "react";
import Connection from "./Connection";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";


class Whiteboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current_screen: "connection",
            is_connected: false  // If connected, display canvas
        };

        this.handleButtons = this.handleButtons.bind(this);
    }

    handleButtons(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            current_screen: name,
        });

    }

    render() {
        return (

            <div className="whiteboard">

                {(this.state.current_screen === "whiteboard") ? null : null}
                {(this.state.current_screen === "connection") ? <Connection handleButtons={this.handleButtons} state={this.state.current_screen}/> : null}
                {(this.state.current_screen === "join_room") ? <JoinRoom handleButtons={this.handleButtons} state={this.state.current_screen}/> : null}
                {(this.state.current_screen === "create_room") ? <CreateRoom handleButtons={this.handleButtons} state={this.state.current_screen}/> : null}

                <br/>
                Whiteboard page
                <br/>
                Here are tools!
                <br/>
                Here is the canvas!
                <br/>
                Fun times!


            </div>

        );
    }
}

export default Whiteboard;