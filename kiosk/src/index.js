import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Professors from "./professors";
import Rooms from "./rooms";
import Classes from "./classes";
import Events from "./events";
import HomePage from "./homePage"
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
  render() {
    var textStyle = {
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      width: "100%",
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
    } else if (displayNum === 0){
        selector = <HomePage/>;
    }
	else {
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
      count: 0,
      title: "Home"
    };

    this.setProfessor = this.setProfessor.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.setHome = this.setHome.bind(this);
  }

  setHome() {
    this.setState({
      count: 0,
      title: "Home"
    });
  }
  setProfessor() {

    this.setState({
      count: 1,
      title: "Directory"
    });
  }
  setRoom() {

    this.setState({
      count: 2,
      title: "Rooms"
    });
  }
  setClass() {

    this.setState({
      count: 3,
      title: "Map"
    });
  }
  setEvents() {

    this.setState({
      count: 4,
      title: "Events"
    });
  }
  


  render() {
    var backgroundStyle = {
      width: "95%",
    height: "100%",
    padding: "10px",
    border: "5px solid black",
    margin: "40px",
    borderRadius: "20px",
      boxShadow: "inset 0 0 10px",
    backgroundColor: "#404040"
    };
    var buttonStyle = {
      fontSize: "1em",
      width: "70%",
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
      display: "inline-flex",
      paddingLeft: "0px",
      paddingRight: "50px"
    }
    var buttonDivStyle = {
      width: "25%",
      height: "100%",
    display: "inline-block",
      margin: "5px",
      border: "5px",
      paddingLeft: "0px",
      top: "15px"
    }
    var counterBack = {
      padding: 0,
      margin: 5,
      backgroundColor: "white",
      width: "70%",
      height: "95%",
      borderRadius: 10,
      textAlign: "center",
      display: "inline-block",
      top: "10px",
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: "10px"
    };

    var singleRowStyle = {
      height: "100%"
    }
    var homeButtonStyle = {
      paddingRight: "0px",

    }
    var homeIcon = {
      color: "white",
      fontSize: "3em"
    }
    var titleHeaderStyle = {
      textAlign: "center",
      paddingLeft:"48%",
      paddingRight:"42%",
      borderBottomStyle: "solid",
      borderWidth: "5px"
    }
    return (
        <div style={backgroundStyle} className="container-fluid">
          <div className="row" style={singleRowStyle}>
          <div className="col-1" style={homeButtonStyle}>
            <button onClick={this.setHome} className="homebtn"><i style={homeIcon} className="fa fa-home"></i> </button>
          </div>
          <div style={setUpStyle} className="col-sm">
            <div style={buttonDivStyle} className="col-sm-3">
              <button onClick={this.setProfessor} style={buttonStyle}  className="myButton">Directory</button>
              <br/>
              <button onClick={this.setRoom} style={buttonStyle} className="myButton">Room Reserve</button>
              <br/>
              <button onClick={this.setClass} style={buttonStyle} className="myButton">Map</button>
              <br/>
              <button onClick={this.setEvents} style={buttonStyle} className="myButton">Events</button>
            </div>
            <div style={counterBack} className="col-sm">
              <div className={"container-fluid"}>
                <div className="row" style={titleHeaderStyle}> {this.state.title}</div>
                <div className="row" style={{height:"95%"}}><Counter display={this.state.count} /></div>
              </div>
            </div>
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