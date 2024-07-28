import { Component } from "react";
import './NavBarRegistration.css'
import Nav from 'react-bootstrap/Nav';
import IHTS from './IHTS_Logo (2).png'
class NavBarRegistration extends Component{

    render(){
        return(

            <nav className="NavbarItems-registration">
                {/* <h2 className="navbar-logo-registration">Intelligent Health Tourism System</h2> */}
                <img className="t-image-navbar" src={IHTS} />
            </nav>
        );
    }
}

export default NavBarRegistration;

