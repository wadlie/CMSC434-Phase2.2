import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Professor extends Component {


    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            overflow: "hidden"
        }
        return (
            <div style={displayStyle}>
                <img src="https://ipsumimage.appspot.com/640x360" alt="PH"></img>
            </div>
        );
    }

}

export default Professor;
