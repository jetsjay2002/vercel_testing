import { Component } from "react";
// import "./NavbarDoctorDetails.css"
// import {Link} from "react-router-dom" 
// import { MenuItems } from "../../MenuItems";
import './NavBarPackage.css'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import { Component } from "react";
// import "./NavbarStyles.css"
// import {Link} from "react-router-dom" 
// import { MenuItems } from "./MenuItems";

class NavbarPackage extends Component{

    render(){
        return(

            <nav className="NavbarItems-package">
            <div className="menu-icons-package" activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Link href="/package">
                            <i className="fa-solid fa-backward" onClick={this.handleClick}></i> Back
                </Nav.Link>
            </div>
            <h2 className="navbar-logo-package">Package Detail</h2>

            </nav>
        );
    }
}

export default NavbarPackage;


// import React, { Component } from 'react';
// import './NavBarDoctorDetails.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { withRouter } from 'react-router-dom'; // Import withRouter

// class NavbarDoctorDetails extends Component {

//     handleClick = (path) => (event) => {
//         event.preventDefault();
//         this.props.history.push(path); // Use history.push to navigate
//     }

//     render() {
//         return (

//             <Navbar className="custom-navbar" variant="dark" activeKey="/home"
//             onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
//                 <Container>
//                     <Nav className="me-auto">
//                         <Nav.Link href="/doctorselect" onClick={this.handleClick('/medicaltreatment')}>
//                             <i className="fa-solid fa-backward" onClick={this.handleClick}></i> Back
//                         </Nav.Link>
//                     </Nav>
//                     <Navbar.Brand>Doctor Detail</Navbar.Brand>
//                 </Container>
//             </Navbar>
//         );
//     }
// }

// export default withRouter(NavbarDoctorDetails); // Wrap the component with withRouter
