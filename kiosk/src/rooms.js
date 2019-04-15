import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import image00 from './dist/images/CMSC434 Class Blueprint.png';
import image01 from './dist/images/CMSC434 Class 1.png';
import image02 from './dist/images/CMSC434 Class 2.png';
import image03 from './dist/images/CMSC434 Class 3.png';
import image04 from './dist/images/CMSC434 Class 4.png';
import image05 from './dist/images/CMSC434 Class 5.png';
import imageReserve from './dist/images/ReserveExample434.png';

class Rooms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            from: "",
            to: "",
            room: false,
            resButton: "Reserve",
            list: [{key: "IRB 1207",value:image00},{key:"IRB 1208",value:image01},{key:"IRB 1206",value:image02},{key:"IRB 1220",value:image03},{key:"IRB 1209",value:image04},{key:"IRB 1213",value:image05}]
            //list: [image00,image01,image02,image03,image04,image05,image01,image03,image05,image02,image04,image00,image00,image05,image04,image03,image02,image01]
        };
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleRoomBoolean = this.handleRoomBoolean.bind(this);
        this.goBack = this.goBack.bind(this)
        this.changeRes = this.changeRes.bind(this);
    }
    handleChangeFrom(event) {
        if (event.target.value === ""){
            this.setState({list: [{key: "IRB 1207",value:image00},{key:"IRB 1208",value:image01},{key:"IRB 1206",value:image02},{key:"IRB 1220",value:image03},{key:"IRB 1209",value:image04},{key:"IRB 1213",value:image05}]})
        } else {
            this.setState({list:[{key: "IRB 1207",value:image00},{key:"IRB 1208",value:image01}]});
        }
        this.setState({from: event.target.value});
    }
    handleChangeTo(event) {
        this.setState({to: event.target.value});
    }
    handleRoomBoolean(){
        this.setState({room: true});
    }
    goBack(){
        this.setState({room:false});
        this.setState({resButton:"Reserve"})
    }
    changeRes(){
        this.setState({resButton:"Room Reserved!"});
    }

    showPop(){
        if (this.state.room === true){
            return (
                <div style={{display:"block",width:"100%",height:"100%"}} className="container">
                    <div className="row"style={{height:"10%",paddingTop:"5px"}}>
                        <div className="col-1" style={{paddingLeft: 1}}>
                            <button onClick={this.goBack} className="backBtn"><i style={{fontSize:"2em"}} className="fa fa-arrow-left"></i> </button>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3" style={{fontSize: "1.5em",fontFamily:"sans-sherif",paddingLeft:30,paddingRight:0}}>IRB 1207</div>
                        <div className="col-4"></div>
                        <div className="col-1"><i style={{fontSize:"2em"}} disabled className="fa fa-info-circle" data-toggle="tooltip" data-placement="top" title="Drag and drop time section to reserve. [DOESNT WORK]"></i></div>
                    </div>
                    <div className="row" style={{height:"80%"}}>
                        <div className="col-12">
                            <img src={imageReserve} className="img-fluid"alt="roomImage"/>
                        </div>
                    </div>
                    <div className="row" style={{height:"10%",paddingTop:15}}>
                        <div className="col-12">
                            <button onClick={this.changeRes} className="reserveButton" >{this.state.resButton}</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{display:"block",width:"100%",height:"100%"}} className="container">
                    <div className="row" style={{height:"10%",paddingTop:10}}>
                        <div className="col-6" style={{height:"100%"}}>
                            <form >
                                <label>
                                    <p> From <select value={this.state.value} onChange={this.handleChangeFrom}>
                                        <option value="12am">12am</option>
                                        <option value="1pm">1pm</option>
                                        <option value="2pm">2pm</option>
                                        <option value="3pm">3pm</option>
                                        <option value="4pm">4pm</option>
                                        <option value="5pm">5pm</option>
                                        <option value="6pm">6pm</option>
                                        <option value="7pm">7pm</option>
                                    </select> </p>
                                </label>
                            </form>
                        </div>
                        <div className="col-6" style={{height:"100%"}}>
                            <form >
                                <label>
                                    <p> To <select value={this.state.value} onChange={this.handleChangeTo}>
                                        <option value="12am">12am</option>
                                        <option value="1pm">1pm</option>
                                        <option value="2pm">2pm</option>
                                        <option value="3pm">3pm</option>
                                        <option value="4pm">4pm</option>
                                        <option value="5pm">5pm</option>
                                        <option value="6pm">6pm</option>
                                        <option value="7pm">7pm</option>
                                    </select> </p>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row" style={{height:"89.9%",overflowY:"scroll",width:"100%"}}>
                        <div className="col-12">
                            <li style={{listStyle:"none",margin:10}}>
                                {this.state.list.map( (ele,index) =>
                                    <ul key={index}><button className="roomIconButton" style={{marginTop:5}} onClick={this.handleRoomBoolean}>{ele.key}</button><img src={ele.value} alt="test" style={{width:"70%"}} /></ul>
                                )}
                            </li>
                        </div>
                    </div>
                </div>
            )
        }
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

export default Rooms;