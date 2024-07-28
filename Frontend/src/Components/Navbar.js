// import { Component } from "react";
// import "./NavbarStyles.css"
// import {Link} from "react-router-dom" 
// import { MenuItems } from "./MenuItems";
// // import { BellIcon } from './Icons';

// class Navbar extends Component{

//     state = {clicked: false};
//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render(){
//         return(
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">Intelligent Health Tourism System</h1>

//                 <div className="menu-icons" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>

//                 <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link className={item.cName} to={item.url}>
//                                 <i class={item.icon}></i>{item.title}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </nav>
//         );
//     }
// }

// export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = { 
        clicked: false 
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            const authHeader = `Bearer ${token}`;
    
            const response = await axios.post('http://localhost:5000/api/auth/logout', {}, {
                headers: {
                    'Authorization': authHeader,
                }
            });
    
            console.log('Logout successful:', response.data);
            localStorage.removeItem('token'); // Clear the token from local storage
            window.location.href = '/login'; // Redirect to login page
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Intelligent Health Tourism System</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    ))}
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;




// Navbar.js
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { MenuItems } from './MenuItems';
// import './NavbarStyles.css';

// class Navbar extends Component {
//   state = {
//     clicked: false,
//     newMessageCount: 0,
//   };

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   handleNewMessage = () => {
//     this.setState((prevState) => ({
//       newMessageCount: prevState.newMessageCount + 1,
//     }));
//   };

//   resetNewMessageCount = () => {
//     this.setState({ newMessageCount: 0 });
//   };

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">Andaman Medical Tourism</h1>
//         <div className="menu-icons" onClick={this.handleClick}>
//           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link className={item.cName} to={item.url}>
//                   <i className={item.icon}></i>
//                   {item.title}
//                   {item.title === 'Chat' && (
//                     <div className="bell-notification">
//                       <i className="fas fa-bell"></i>
//                       {this.state.newMessageCount > 0 && (
//                         <span className="notification-count">
//                           {this.state.newMessageCount}
//                         </span>
//                       )}
//                     </div>
//                   )}
//                 </Link>
//               </li>
//             );
//           })}
//           <button>Sign Up</button>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;