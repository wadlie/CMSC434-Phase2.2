import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Events extends Component {
	
	goToEvent(){
		/*
			do something with an image change.
		*/
		document.getElementById('calendar_img').setAttribute('src', 'http://clipart-library.com/data_images/436942.png')
		document.getElementById("pizza_button").style.display = "none";
  }
	
	
	
	
	
    render() {
		
		
        var displayStyle = {
            position: "relative",
        };
		
		var submitButton = {
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				fontSize: "5px",
				width: "5%",
				height: "5%",
				fontFamily: "sans-serif",
				
		};
		
		
		
		// eslint-disable-next-line
		
        return (
			<div class="container" style={displayStyle}>
			<img id = "calendar_img" src="eventimgs/calendar.jpg" alt="PH" ></img>
				<div class="row">
					<div class="col-sm-6">
						<div class="button-group" style={submitButton}>
							<button id = "pizza_button" onClick={this.goToEvent} class="myButton">Pizza Party</button>
						</div>
					</div>
				</div>
				 <div class="col-sm-6">
				 </div>
			</div>
			
        );
    }

}

export default Events;
