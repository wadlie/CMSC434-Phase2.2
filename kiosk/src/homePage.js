import React, {Component} from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import homeImage from './dist/images/HomeScreen.png';
import contactImage from './dist/images/Contact.png';
import iribe from './dist/images/BrendanIribe.png';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                iribe,
                contactImage
            ],
            selectedImage: iribe
        };
    }


    componentDidMount() {
       this.interval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.selectedImage === this.state.images[0]) {
                    return {
                        selectedImage: this.state.images[1]
                    };
                } else {
                    return {
                        selectedImage: this.state.images[0]
                    };
                }
            });
        }, 10000);
    }
componentWillUnmount() {
    clearInterval(this.interval);
}
    render() {
        var displayStyle = {
            weight: "100%",
            height: "100%",
        }

        return (
            <div style={displayStyle} className="container-fluid">
                <div className="row" style={{height:"70%",padding:10}}>
                <img src={homeImage} style ={{maxWidth:"100%",maxHeight:"100%"}}></img>
                </div>
                <div className="row" style={{height:"30%",backgroundColor:"red"}}>
                    <img src={this.state.selectedImage} alt="" style ={{maxWidth:"100%",maxHeight:"100%"}}></img>

                </div>
            </div>
        );
    }

}

export default Home;
