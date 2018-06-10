import React, { Component } from "react";
import Connection from "./Connection";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";
import Whiteboard from "./Whiteboard";
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


class Session extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current_screen: "connection",
            is_connected: false,  // if connected, display canvas
            create_room_name: null,
            create_room_details: [], // name, password
            join_room_details: [] //name, password
        };

        this.handleButtons = this.handleButtons.bind(this);
        this.setCreateRoomName = this.setCreateRoomName.bind(this);
    }

    handleButtons(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            current_screen: name,
        });

    }

    setCreateRoomName(room){
        this.setState({
            create_room_name: room,
        });
        // will also have pw

    }

    createRoom(room) {
        socket.emit('room name', room)

    }


    render() {
        if (this.state.create_room_name !== null) {
            //this.createRoom(this.state.create_room_name);
        }

        return (
            <div className="whiteboard">

                <p id="p_room_name">Room name: {(this.state.create_room_name !== null) ? this.state.create_room_name : "Not connected"}</p>

                {(this.state.current_screen === "session") ? null : null}
                {(this.state.current_screen === "connection") ? <Connection handleButtons={this.handleButtons} state={this.state.current_screen}/> : null}
                {(this.state.current_screen === "join_room") ? <JoinRoom
                    handleButtons={this.handleButtons}
                    state={this.state.current_screen}/> : null}

                {(this.state.current_screen === "create_room") ? <CreateRoom
                    handleButtons={this.handleButtons}
                    setCreateRoomName={this.setCreateRoomName}/> : null}

            </div>

        );
    }
}

export default Session;