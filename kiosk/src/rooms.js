import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Room extends Component {


    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            overflow: "hidden"
        }
        return (
            <div style={displayStyle}>
                <img src="https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview" alt="PH"></img>
            </div>
        );
    }

}

export default Room;
