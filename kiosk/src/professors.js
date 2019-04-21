import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./professors.css";
import image00 from "./dist/images/professor.jpg";
import image01 from "./dist/images/Upper floor_0.png";

class Professor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prof: false,
      map: false
      //list: [image00,image01,image02,image03,image04,image05,image01,image03,image05,image02,image04,image00,image00,image05,image04,image03,image02,image01]
    };

    this.myFunction = this.myFunction.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.goForwardMap = this.goForwardMap.bind(this);
    this.goForwardProf = this.goForwardProf.bind(this);
    this.goBackProf = this.goBackProf.bind(this);
    this.goBackMap = this.goBackMap.bind(this);
  }

  goForwardMap() {
    console.log("here");
    this.setState({ map: true });
  }

  goForwardProf() {
    this.setState({ prof: true });
  }

  goBackMap() {
    this.setState({ map: false });
  }

  goBackProf() {
    this.setState({ prof: false });
  }

  showPop() {
    if (this.state.prof === false) {
      return (
        <div>
          <button className="accordion">All staff members</button>
          <div className="accordion-content">
            <input
              type="text"
              id="myInput"
              onKeyUp={this.myFunction}
              placeholder="Search for names.."
            />
            <ul id="myUL" onClick={this.goForwardProf}>
              <li>
                <a href="#">Daniel Abadi</a>
              </li>
              <li>
                <a href="#"> Brandi Adams</a>
              </li>
              <li>
                <a href="#"> Ashok Agrawala</a>
              </li>
              <li>
                <a href="#"> Yannis Aloimonos</a>
              </li>
              <li>
                <a href="#"> Amy Andrade</a>
              </li>
              <li>
                <a href="#"> Bill Arbuagh</a>
              </li>
              <li>
                <a href="#"> Kate Atchinson</a>
              </li>
              <li>
                <a href="#"> Daniel Ayres</a>
              </li>
              <li>
                <a href="#"> Matt Baney</a>
              </li>
              <li>
                <a href="#"> Vic Basili</a>
              </li>
              <li>
                <a href="#"> Leilani Battle</a>
              </li>
              <li>
                <a href="#"> Bobby Bhattacharjee</a>
              </li>
              <li>
                <a href="#"> Shuvra Bhattacharyya</a>
              </li>
              <li>
                <a href="#"> Souvik Bhattacherjee</a>
              </li>
              <li>
                <a href="#"> Sigurthior Bjorgvinsson</a>
              </li>
              <li>
                <a href="#"> Shawn Bobbin</a>
              </li>
              <li>
                <a href="#"> Jordan Boyd-Graber</a>
              </li>
              <li>
                <a href="#"> Regis Boykin</a>
              </li>
              <li>
                <a href="#"> Melissa Brachfeld</a>
              </li>
              <li>
                <a href="#"> Barbara Brawn-Cinani</a>
              </li>
              <li>
                <a href="#"> Maria Cameron</a>
              </li>
              <li>
                <a href="#"> Antonio Cardone</a>
              </li>
              <li>
                <a href="#"> Marine Carpuat</a>
              </li>
              <li>
                <a href="#"> Carlos Castillo</a>
              </li>
              <li>
                <a href="#"> Rama Chellappa</a>
              </li>
              <li>
                <a href="#"> Jun-Cheng Chen</a>
              </li>
              <li>
                <a href="#"> Ray Chen</a>
              </li>
              <li>
                <a href="#"> Rance Cleaveland</a>
              </li>
              <li>
                <a href="#"> Hector Corrada Bravo</a>
              </li>
              <li>
                <a href="#"> Michel Cukier</a>
              </li>
              <li>
                <a href="#"> Michael Cummings</a>
              </li>
              <li>
                <a href="#"> Dana Dachman Soled</a>
              </li>
              <li>
                <a href="#"> Hal Daume</a>
              </li>
              <li>
                <a href="#"> Larry Davis</a>
              </li>
              <li>
                <a href="#"> Rina Dechter</a>
              </li>
              <li>
                <a href="#"> Leila DeFloriani</a>
              </li>
              <li>
                <a href="#"> Amol Deshpande</a>
              </li>
              <li>
                <a href="#"> John Dickerson</a>
              </li>
              <li>
                <a href="#"> Bonnie Dorr</a>
              </li>
              <li>
                <a href="#"> Tudor Dumitras</a>
              </li>
              <li>
                <a href="#"> Ramani Duraiswami</a>
              </li>
              <li>
                <a href="#"> Ramani Duraiswami</a>
              </li>
              <li>
                <a href="#"> Roger Eastman</a>
              </li>
              <li>
                <a href="#"> Najib El Sayed</a>
              </li>
              <li>
                <a href="#"> Howard Elman</a>
              </li>
              <li>
                <a href="#"> Fawzi Emad</a>
              </li>
              <li>
                <a href="#"> Israel Endegena</a>
              </li>
              <li>
                <a href="#"> Soheil Feizi</a>
              </li>
              <li>
                <a href="#"> Naomi Feldman</a>
              </li>
              <li>
                <a href="#"> Cornelia FernmÔOller</a>
              </li>
              <li>
                <a href="#"> Jason Filippou</a>
              </li>
              <li>
                <a href="#"> Adelaide Findlay</a>
              </li>
              <li>
                <a href="#"> Victoria Fitzgerald</a>
              </li>
              <li>
                <a href="#"> Jeff Foster</a>
              </li>
              <li>
                <a href="#"> Vanessa Frias-Martinez</a>
              </li>
              <li>
                <a href="#"> Miriam Friedman</a>
              </li>
              <li>
                <a href="#"> Petra Galuscakova</a>
              </li>
              <li>
                <a href="#"> Ge Gao</a>
              </li>
              <li>
                <a href="#"> Bill Gasarch</a>
              </li>
              <li>
                <a href="#"> Margit Gedra</a>
              </li>
              <li>
                <a href="#"> Tom Goldstein</a>
              </li>
              <li>
                <a href="#"> Evan Golub</a>
              </li>
              <li>
                <a href="#"> Jodie Gray</a>
              </li>
              <li>
                <a href="#"> Nail Gumerov</a>
              </li>
              <li>
                <a href="#"> Mohammad Hajiaghayi</a>
              </li>
              <li>
                <a href="#"> Sridhar Hannenhalli</a>
              </li>
              <li>
                <a href="#"> Emily Hartz</a>
              </li>
              <li>
                <a href="#"> Jon Heagerty</a>
              </li>
              <li>
                <a href="#"> Maria Herd</a>
              </li>
              <li>
                <a href="#"> Larry Herman</a>
              </li>
              <li>
                <a href="#"> Hailemeskel Hermela</a>
              </li>
              <li>
                <a href="#"> Mike Hicks</a>
              </li>
              <li>
                <a href="#"> Todd Holden</a>
              </li>
              <li>
                <a href="#"> Jeff Hollingsworth</a>
              </li>
              <li>
                <a href="#"> Elizabeth Hontz</a>
              </li>
              <li>
                <a href="#"> Furong Huang</a>
              </li>
              <li>
                <a href="#"> Ronny Huang</a>
              </li>
              <li>
                <a href="#"> Michelle Hugue</a>
              </li>
              <li>
                <a href="#"> Tom Hurst</a>
              </li>
              <li>
                <a href="#"> Sergey Ivanov</a>
              </li>
              <li>
                <a href="#"> David Jacobs</a>
              </li>
              <li>
                <a href="#"> Joseph Jaja</a>
              </li>
              <li>
                <a href="#"> Jisha Jesudass</a>
              </li>
              <li>
                <a href="#"> Danae Johnson</a>
              </li>
              <li>
                <a href="#"> Maria Johnson</a>
              </li>
              <li>
                <a href="#"> Laveen Kanal</a>
              </li>
              <li>
                <a href="#"> Kancherla Jayaram</a>
              </li>
              <li>
                <a href="#"> Jonathan Katz</a>
              </li>
              <li>
                <a href="#"> Pete Keleher</a>
              </li>
              <li>
                <a href="#"> Samir Khuller</a>
              </li>
              <li>
                <a href="#"> Clyde Kruskel</a>
              </li>
              <li>
                <a href="#"> Morgan Lanahan</a>
              </li>
              <li>
                <a href="#"> Eric Lee</a>
              </li>
              <li>
                <a href="#"> Ryan Leimenstoll</a>
              </li>
              <li>
                <a href="#"> Max Leiserson</a>
              </li>
              <li>
                <a href="#"> Dave Levin</a>
              </li>
              <li>
                <a href="#"> Barbara Lewis</a>
              </li>
              <li>
                <a href="#"> Sida Li</a>
              </li>
              <li>
                <a href="#"> Ming Lin</a>
              </li>
              <li>
                <a href="#"> Ming Lin</a>
              </li>
              <li>
                <a href="#"> Wei Luo</a>
              </li>
              <li>
                <a href="#"> Anwar Mamat</a>
              </li>
              <li>
                <a href="#"> Dinesh Manocha</a>
              </li>
              <li>
                <a href="#"> Mike Marsh</a>
              </li>
              <li>
                <a href="#"> Michelle Mazurek</a>
              </li>
              <li>
                <a href="#"> Sharron McElroy</a>
              </li>
              <li>
                <a href="#"> Jackie Meisel</a>
              </li>
              <li>
                <a href="#"> Atif Memon</a>
              </li>
              <li>
                <a href="#"> Carter Merenstein</a>
              </li>
              <li>
                <a href="#"> Ray Miller</a>
              </li>
              <li>
                <a href="#"> Jack Minker</a>
              </li>
              <li>
                <a href="#"> Liam Monahan</a>
              </li>
              <li>
                <a href="#"> Dan Nasko</a>
              </li>
              <li>
                <a href="#"> Dana Nau</a>
              </li>
              <li>
                <a href="#"> Alyssa Neuner</a>
              </li>
              <li>
                <a href="#"> Doug Oard</a>
              </li>
              <li>
                <a href="#"> Dianne O'Leary</a>
              </li>
              <li>
                <a href="#"> Akyum Onwunta</a>
              </li>
              <li>
                <a href="#"> Nelson Padua-Perez</a>
              </li>
              <li>
                <a href="#"> Babis Papamanthou</a>
              </li>
              <li>
                <a href="#"> Ravindra Passan</a>
              </li>
              <li>
                <a href="#"> Huaishu Peng</a>
              </li>
              <li>
                <a href="#"> Don Perlis</a>
              </li>
              <li>
                <a href="#"> Janice Perrone</a>
              </li>
              <li>
                <a href="#"> Stephanie Peters</a>
              </li>
              <li>
                <a href="#"> Apitchaya Pimpawathin</a>
              </li>
              <li>
                <a href="#"> Jan Plane</a>
              </li>
              <li>
                <a href="#"> Mihai Pop</a>
              </li>
              <li>
                <a href="#"> Mihai Pop</a>
              </li>
              <li>
                <a href="#"> Adam Porter</a>
              </li>
              <li>
                <a href="#"> Bill Pugh</a>
              </li>
              <li>
                <a href="#"> Dana Purcell</a>
              </li>
              <li>
                <a href="#"> Jim Purtilo</a>
              </li>
              <li>
                <a href="#"> Robert Rand</a>
              </li>
              <li>
                <a href="#"> Louiqa Raschid</a>
              </li>
              <li>
                <a href="#"> James Reggia</a>
              </li>
              <li>
                <a href="#"> Bill Regli</a>
              </li>
              <li>
                <a href="#"> Philip Resnik</a>
              </li>
              <li>
                <a href="#"> Joe Ridge</a>
              </li>
              <li>
                <a href="#"> Joyce Rising</a>
              </li>
              <li>
                <a href="#"> Mike Ritter</a>
              </li>
              <li>
                <a href="#"> Nick Roussopoulos</a>
              </li>
              <li>
                <a href="#"> Nirupam Roy</a>
              </li>
              <li>
                <a href="#"> Nirupam Roy</a>
              </li>
              <li>
                <a href="#"> Monjura Afrin Rumi</a>
              </li>
              <li>
                <a href="#"> Steven Ryan</a>
              </li>
              <li>
                <a href="#"> Pedram Sadeghian</a>
              </li>
              <li>
                <a href="#"> Behzad Sadrfaridour</a>
              </li>
              <li>
                <a href="#"> Freddie Salley</a>
              </li>
              <li>
                <a href="#"> Hanan Samet</a>
              </li>
              <li>
                <a href="#"> Vibha Sazawal</a>
              </li>
              <li>
                <a href="#"> Arlene Schenk</a>
              </li>
              <li>
                <a href="#"> Lauren Segler</a>
              </li>
              <li>
                <a href="#"> Jeremy Selengut</a>
              </li>
              <li>
                <a href="#"> A. Udaya Shankar</a>
              </li>
              <li>
                <a href="#"> Ben Shneiderman</a>
              </li>
              <li>
                <a href="#"> Abhinav Shrivastava</a>
              </li>
              <li>
                <a href="#"> Stacey Sickle Locke</a>
              </li>
              <li>
                <a href="#"> Richard Smith</a>
              </li>
              <li>
                <a href="#"> Yan Song</a>
              </li>
              <li>
                <a href="#"> Neil Spring</a>
              </li>
              <li>
                <a href="#"> Aravind Srinivasan</a>
              </li>
              <li>
                <a href="#"> Pete Stewart</a>
              </li>
              <li>
                <a href="#"> Alan Sussman</a>
              </li>
              <li>
                <a href="#"> Sammie Tafoya</a>
              </li>
              <li>
                <a href="#"> Mohammad Naeem Teli</a>
              </li>
              <li>
                <a href="#"> David Turner</a>
              </li>
              <li>
                <a href="#"> Amy Vaillancourt</a>
              </li>
              <li>
                <a href="#"> Yerty Valenzuela</a>
              </li>
              <li>
                <a href="#"> David VanHorn</a>
              </li>
              <li>
                <a href="#"> Amitabh Varshney</a>
              </li>
              <li>
                <a href="#"> Amitabh Varshney</a>
              </li>
              <li>
                <a href="#"> Venkat Santhanam</a>
              </li>
              <li>
                <a href="#"> Tom Ventsias</a>
              </li>
              <li>
                <a href="#"> Uzi Vishkin</a>
              </li>
              <li>
                <a href="#"> Jeanine Worden</a>
              </li>
              <li>
                <a href="#"> Min Wu</a>
              </li>
              <li>
                <a href="#"> Xiaodi Wu</a>
              </li>
              <li>
                <a href="#"> Yaser Yacoob</a>
              </li>
              <li>
                <a href="#"> Derek Yarnell</a>
              </li>
              <li>
                <a href="#"> Ilchul Yoon</a>
              </li>
              <li>
                <a href="#"> Petra Zapf</a>
              </li>
              <li>
                <a href="#"> Marvin Zelkowitz</a>
              </li>
              <li>
                <a href="#"> Quan Zheng</a>
              </li>
              <li>
                <a href="#"> Dmitry Zotkin</a>
              </li>
              <li>
                <a href="#"> Elena Zotkina</a>
              </li>
              <li>
                <a href="#"> Matthias Zwicker</a>
              </li>
            </ul>
          </div>
          <button className="accordion">Professors</button>
          <div className="accordion-content">
            <p>Coming soon!</p>
          </div>
          <button className="accordion">Advisors</button>
          <div className="accordion-content">
            <p>Coming soon!</p>
          </div>
          <button className="accordion">Other Faculty</button>
          <div className="accordion-content">
            <p>Coming soon!</p>
          </div>
        </div>
      );
    } else if (this.state.prof === true && this.state.map === false) {
      return (
        <div className="parent">
          <div className="col-1" style={{ top: "30px", left: "10px" }}>
            <button onClick={this.goBackProf} className="backBtn">
              <i style={{ fontSize: "2em" }} className="fa fa-arrow-left" />{" "}
            </button>
          </div>
          <h1>Professor X</h1>
          <div style={{ border: "10px solid black" }}>
            <img
              src={image00}
              style={{
                align: "left",
                position: "absolute",
                left: "90px",
                top: "170px",
                border: "5px solid black"
              }}
              alt=""
            />
          </div>
          <div
            style={{
              width: "50%",
              fontSize: 40,
              border: "10px solid black",
              top: "130px",
              right: "130px",
              position: "absolute"
            }}
          >
            <p
              style={{
                paddingTop: "15px",
                paddingLeft: "15px",
                paddingRight: "15px"
              }}
            >
              Office:
              <a href="#" onClick={this.goForwardMap}>
                IRB 1115
              </a>
              <br />
              email: professor_x@umd.edu
              <br /> Courses: CMSC 434, CMSC131, CSMC132, CMSC216, CMSC330
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="parent">
          <div className="col-1" style={{ top: "30px", left: "10px" }}>
            <button onClick={this.goBackMap} className="backBtn">
              <i style={{ fontSize: "2em" }} className="fa fa-arrow-left" />{" "}
            </button>
          </div>
          <h1>Professor X</h1>
          <div style={{ border: "10px solid black" }} />
          <div>
            <img
              src={image01}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "50%"
              }}
            />
          </div>
        </div>
      );
    }
  }

  myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  componentDidMount() {
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function() {
        this.classList.toggle("is-open");

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    }
  }

  componentDidUpdate() {
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function() {
        this.classList.toggle("is-open");

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    }
  }

  render() {
    var displayStyle = {
      display: "block",
      weight: "100%",
      height: "100%",
      overflow: "auto"
    };
    return <div style={displayStyle}>{this.showPop()}</div>;
  }
}

export default Professor;
