import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {


    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
        }
        return (
            <div style={displayStyle}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpq8T9bdcQpy2myWNZhLI5m6YGbyugIPV-FY26kj17-W9Jo6Kj" alt="PH"></img>
            </div>
        );
    }

}

export default Home;
