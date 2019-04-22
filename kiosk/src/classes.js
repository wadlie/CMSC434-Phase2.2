import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Classes extends Component {
	constructor(props) {
		super(props);
		this.state = {floor: 0, room: 0, imgURL: '/images/ground0000.png'};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}

    render() {
        var displayStyle = {
            display: "block",
            width: "65%",
		marginLeft: "17%",
            overflow: "hidden"
        }
        return (
		<div>
			<select onChange = {this.handleChange}>
		  		<option value="ground0000">Ground Floor</option>
		  		<option value="first0000">Floor 1</option>
		  		<option value="na">Floor 2</option>
		 		<option value="na">Floor 3</option>
		  		<option value="na">Floor 4</option>
		  		<option value="na">Floor 5</option>
			</select>
			<form onSubmit={this.handleSubmit}>
				<input type = "text" onChange={this.updateInput}/>
				<button type="submit"><i class="fa fa-search"></i></button><div class="dropdown">
		</div>
		</form>
            <img id = "map" src = {process.env.PUBLIC_URL + this.state.imgURL} style = {displayStyle}/>
        </div>
	);
    }
	handleSubmit(e) {
		var data = require('./professors.json');
		e.preventDefault();
		if(isNaN(this.state.inputValue)) {
			var i = 0;
			for (i = 0; i < data.length; i++) {
				if(data[i]["first_name"].toLowerCase() == this.state.inputValue.toLowerCase() && data[i].floor == "first") {
						this.setState({imgURL: '/images/' + data[i].floor + data[i].room + '.png'});
						break;
				}
				else if(data[i]["last_name"].toLowerCase() == this.state.inputValue.toLowerCase() && data[i].floor == "first") {
					this.setState({imgURL: '/images/' + data[i].floor + data[i].room + '.png'})
					break;
				}
				else {
					this.setState({imgURL: '/images/na.png'})
				}
			}
		}
		else {
			var found = false;
			var i = 0;
			for (i = 0; i < data.length; i++) {
				if(data[i].room == parseInt(this.state.inputValue)) {
					this.setState({imgURL: '/images/' + data[i].floor + data[i].room + '.png'});
					found = true;
					break;
				}
			}
			if (!found) {
				this.setState({imgURL: '/images/na.png'});
			}
		}
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({imgURL: '/images/' + e.target.value + '.png'});
	}
	updateInput(e){
		this.setState({inputValue : e.target.value})
	}

}

export default Classes;
