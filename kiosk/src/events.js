import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Events extends Component {
	
	goToEvent(){
		/*
			do something with an image change.
		*/
		document.getElementById('calendar_img').setAttribute('src', 'http://clipart-library.com/data_images/436942.png')
	}

    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            overflow: "hidden"
        }
		// eslint-disable-next-line
		
        return (
            <div style={displayStyle}>
                <img id = "calendar_img" src="https://cdn.vertex42.com/calendars/images/blank-calendar-monthly.png" alt="PH" ></img>
            </div>
        );
    }

}

export default Events;
