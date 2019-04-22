import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Classes extends Component {
	constructor(props) {
		super(props);
		this.state = {floor: 0, room: 0, imgURL: '/images/ground0000.png'};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

    render() {
        var displayStyle = {
            display: "block",
            width: "75%",
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
				<input type = "text"/>
				<button type="submit"><i class="fa fa-search"></i></button><div class="dropdown">
		</div>
		</form>
            <img id = "map" src = {process.env.PUBLIC_URL + this.state.imgURL} style = {displayStyle}/>
        </div>
	);
    }
	handleSubmit(e) {
	e.preventDefault();
		console.log("submit");
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({imgURL: '/images/' + e.target.value + '.png'});
	}

}

export default Classes;
