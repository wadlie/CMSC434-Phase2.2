import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import eventScreen from './dist/eventimgs/pizzaParty.jpg';
import mainCalendar from './dist/eventimgs/mainCalendar.png';

class Events extends Component {
	
	  constructor(props) {
        super(props);

        this.state = {
            from: "",
            to: "",
			shownImg: mainCalendar,
            room: false,
            list: [{key:"Main Calendar",value:mainCalendar}, {key: "Pizza Party", value:eventScreen}]
            //list: [image00]
        };
  
 
		this.changeImg = this.changeImg.bind(this)
    }
	
	
	

	changeImg(){
		if(this.state.room === false){
			this.setState({shownImg: eventScreen})
			this.setState({room: true});
		} 
		else{
			this.setState({shownImg: mainCalendar})
			this.setState({room: false});
		}
	}
	

    showPop(){
        
            return (
                <div style={{display:"block",width:"100%",height:"100%"}} className="container">
                    <div className="row" style={{height:"100%",width:"100%"}}>
                        <div className="col-12">
							<img onClick={this.changeImg} style={{maxWidth:"940px",maxHeight:"940px"}} src ={this.state.shownImg}/>
                        </div>
                    </div>
                </div>
            )
    }
	
	
	
    render() {
        var displayStyle = {
            display: "block",
            weight: "100%",
            height: "100%",
            //overflow: "hidden"
        }
        return (
            <div style={displayStyle} >
                {this.showPop()}
            </div>
        );
    }

}

export default Events;
