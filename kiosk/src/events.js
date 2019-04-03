import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Events extends Component {
	
	goToEvent(){
		/*
			do something with an image change.
		*/
		
	}

    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            overflow: "hidden"
        }
		// eslint-disable-next-line
		var buttonStyle = {
		  fontSize: "1em",
		  width: "10%",
		  height: "10%",
		  fontFamily: "sans-serif",
		  fontWeight: "thin",
		  lineHeight: "3px",
		  margin: "5px",
		  padding: "0px"
		};
		
        return (
            <div style={displayStyle}>
                <img src="https://cdn.vertex42.com/calendars/images/blank-calendar-monthly.png" alt="PH"></img>
            </div>
        );
    }

}

export default Events;
