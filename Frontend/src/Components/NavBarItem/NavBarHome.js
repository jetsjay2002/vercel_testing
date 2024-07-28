import { Component } from "react";
// import "./NavbarDoctorDetails.css"
// import {Link} from "react-router-dom" 
// import { MenuItems } from "../../MenuItems";
import './NavBarHome.css'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import IHTS2 from './IHTS_Logo_short__1.png'
// import { Component } from "react";
// import "./NavbarStyles.css"
// import {Link} from "react-router-dom" 
// import { MenuItems } from "./MenuItems";

class NavbarHome extends Component{

    render(){
        return(

            <nav className="NavbarItems-home">
            <h2 className="navbar-logo-home">Intelligent Health Tourism System</h2>
            {/* <img className="t-image-navbar-home" src={IHTS2} /> */}

            <div className="menu-icons-home" activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Link href="/home">
                            <i className="fa-solid fa-home" onClick={this.handleClick}></i> Home
                </Nav.Link>
            </div>
            </nav>
        );
    }
}

export default NavbarHome;
