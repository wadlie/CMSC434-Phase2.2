import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Professors from "./professors";
import Rooms from "./rooms";
import Classes from "./classes";
import Events from "./events";
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      weight: "100%",
      height: "100%"
    };
    const displayNum = this.props.display;
    let selector;

    if (displayNum === 1) {
      selector = <Professors/>;
    } else  if (displayNum === 2){
      selector = <Rooms/>;
    } else if (displayNum === 3){
      selector = <Classes/>;
    } else if (displayNum === 4){
      selector = <Events/>;
    } else {
      selector = this.props.display;
    }


    return (
        <div style={textStyle}>
          {selector}
        </div>
    );
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.setProfessor = this.setProfessor.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setEvents = this.setEvents.bind(this);
  }

  setProfessor() {

    this.setState({
      count: 1
    });
  }
  setRoom() {

    this.setState({
      count: 2
    });
  }
  setClass() {

    this.setState({
      count: 3
    });
  }
  setEvents() {

    this.setState({
      count: 4
    });
  }


  render() {
    var backgroundStyle = {
      width: "95%",
    height: "100%",
    padding: "10px",
    border: "5px solid gray",
    margin: "40px",
    borderRadius: "20px",
    backgroundColor: "#404040"
    };
    var buttonStyle = {
      fontSize: "1em",
      width: "50%",
      height: "20%",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      lineHeight: "3px",
      margin: "10px",
      padding: "0px"
    };
    var setUpStyle = {
      width: "100%",
      height: "100%",
      display: "inline-flex"
    }
    var buttonDivStyle = {
      width: "25%",
      height: "100%",
    display: "inline-block",
      textAlign: "center",
      margin: "5px",
      border: "5px"
    }
    var counterBack = {
      padding: 10,
      margin: 5,
      backgroundColor: "#FFC53A",
      width: "70%",
      height: "95%",
      borderRadius: 10,
      textAlign: "center",
      display: "inline-block"
    };

    return (
        <div style={backgroundStyle}>
          <div style={setUpStyle}>
            <div style={buttonDivStyle}>
              <button onClick={this.setProfessor} style={buttonStyle}  class="myButton">Professors</button>
              <br/>
              <button onClick={this.setRoom} style={buttonStyle} class="myButton">Rooms</button>
              <br/>
              <button onClick={this.setClass} style={buttonStyle} class="myButton">Classes</button>
              <br/>
              <button onClick={this.setEvents} style={buttonStyle} class="myButton">Events</button>
            </div>
            <div style={counterBack}>
              <Counter display={this.state.count} />
            </div>
          </div>
        </div>
    );
  }
}
const divStyle = {
    height: "675px"
}
ReactDOM.render(
    <div style={divStyle}>
      <CounterParent />

    </div>,
    document.querySelector("#container")
);