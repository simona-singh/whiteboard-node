import React, { Component } from "react";


class Connection extends Component {

    render() {
        return (
            <div>

                <input name="join_room" type="button" value="Join room" onClick={this.props.handleButtons}/>
                <input name="create_room" type="button" value="Create room" onClick={this.props.handleButtons}/>
                <input name="" type="button" value="Disconnect???"/>

            </div>
        );
    }
}

export default Connection;