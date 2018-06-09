import React, { Component } from "react";

class CreateRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            room_name: "",
            room_password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        alert('Room name: ' + this.state.room_name + '\nRoom password: ' + this.state.room_password);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <p>Create room</p>
                <p>Room name<br/>Password y/n<br/>Password<br/>Visible or search-only</p>

                <form onSubmit={this.handleSubmit}>
                    <label>
                    Enter room name:
                    <input
                        name="room_name"
                        type="text"
                        value={this.state.room_name}
                        onChange={this.handleInputChange}/><br/>
                    </label>

                    <label>
                    Enter password (leave blank for no pw):
                    <input
                        name="room_password"
                        type="text"
                        value={this.state.room_password}
                        onChange={this.handleInputChange}/><br/>
                    </label>
                    <input type="submit" value="Create room"/>
                </form>
                <input name="connection" type="button" value="Back" onClick={this.props.handleButtons}/>

            </div>
        );
    }
}

export default CreateRoom;