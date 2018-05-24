import React, { Component } from "react";

class CreateRoom extends Component {
    render() {
        return (
            <div>
                <p>Create room</p>
                <p>Room name<br/>Password y/n<br/>Password<br/>Visible or search-only</p>
                <form>
                    Enter room name:<input type="text" id="room_name"/><br/>
                    Enter password (leave blank for no pw):<input type="text" id="room_password"/><br/>
                    <input type="button" value="Create room"/>
                </form>
            </div>
        );
    }
}

export default CreateRoom;