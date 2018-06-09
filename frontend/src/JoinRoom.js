import React, { Component } from "react";


class JoinRoom extends Component {

    render() {
        return (
            <div>
                <p>Join room</p>
                <p>Search room<br/>List of rooms<br/>No. people in room<br/>Input password</p>
                <input name="whiteboard" type="button" value="Connect" onClick={this.props.handleButtons}/>
                <input name="connection" type="button" value="Back" onClick={this.props.handleButtons}/>

            </div>
        );
    }
}

export default JoinRoom;