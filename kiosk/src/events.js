import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Events extends Component {


    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            overflow: "hidden"
        }
        return (
            <div style={displayStyle}>
                <img src="http://qnimate.com/wp-content/uploads/2014/06/placeholder.jpg" alt="PH"></img>
            </div>
        );
    }

}

export default Events;
