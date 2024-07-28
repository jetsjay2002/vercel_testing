// import React, { useState } from 'react';
// import './NavBarBody.css';
// import { FaList } from 'react-icons/fa';
// import { BsFillBarChartFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const menuItems = [
//   { title: 'List of patients', path: '/patientlist', icon: <FaList /> },
//   { title: 'Report of agent', path: '/reportagent', icon: <i className="fa-regular fa-file" /> },
//   { title: 'Report of patient', path: '/reportpatient', icon: <i className="fa-regular fa-file" /> },
//   { title: 'Status of Appointment', path: '/appointmentwaiting', icon: <BsFillBarChartFill /> },
//   { title: 'Decision New Plan', path: '/reschedulewaiting', icon: <BsFillBarChartFill /> },
//   { title: 'Taxi Booking', path: '/scheduletaxi', icon: <BsFillBarChartFill /> },
//   { title: 'Hotel Booking', path: '/schedulehotel', icon: <BsFillBarChartFill /> },
// ];

// function NavBarBody() {
//   const [activeItem, setActiveItem] = useState('');

//   const handleClick = (path) => {
//     setActiveItem(path);
//   };

//   return (
//             <div class="d-flex navbarbody-sidebar flex-column flex-shrink-0" style={{backgroundColor: '#265073'}}>
//             <div class="nav nav-pills flex-column mb-auto px-0 mt-3">
//             <div class="navbarbody-nav-item">
//                 <div class="menu-item active">
//                 <span class="icon"><i class="fas fa-th-large"></i></span>
//                 <span class="title">List of patients</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-table"></i></span>
//                 <span class="title">Report of agent</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-file-invoice-dollar"></i></span>
//                 <span class="title">Report of patient</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-bullseye"></i></span>
//                 <span class="title">Status of Appointment</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-bell"></i></span>
//                 <span class="title">Decision New Plan</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-user"></i></span>
//                 <span class="title">Taxi Booking</span>
//                 </div>
//                 <div class="menu-item">
//                 <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
//                 <span class="title">Hotel Booking</span>
//                 </div>
//                 {/* <div class="menu-item">
//                 <span class="icon"><i class="fas fa-user-plus"></i></span>
//                 <span class="title">Sign Up</span>
//                 </div> */}
//             </div>
//             </div>
//             </div>
//   );
// }

// export default NavBarBody;



// import { Component } from "react";
// import "./NavBarBody.css"
// import {Link} from "react-router-dom" 
// import { MenuBody } from "./MenuBody";

// class NavbarBody extends Component{

//     state = {clicked: false};
//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render(){
//         return(
//             <nav className="d-flex navbarbody-sidebar flex-column flex-shrink-0  bg-dark">
//                 {/* <h1 className="navbar-logo">Andaman Medical Tourism</h1> */}

//                 <div className="navbarbody-nav-item" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>

//                 <ul className={this.state.clicked ? "nav-item active" : "nav-item"}>
//                     {MenuBody.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link className={item.cName} to={item.url}>
//                                 <i class={item.icon}></i>{item.title}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                     <button>Sign Up</button>
//                 </ul>
//             </nav>
//         );
//     }
// }

// export default NavbarBody;



// // div className='d-flex navbarbody-sidebar flex-column flex-shrink-0  bg-dark'>
// //                 <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
// //                     <li className='navbarbody-nav-item'>
// //                         <a href="" className='nav-link text-white active'>
// //                             <FaList /> <span className='ms-2'>List of patients</span>
// //                         </a>
// //                     </li>
// //                     <li className='nav-item '>
// //                         <a href="" className='nav-link text-white'>
// //                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of agent</span></i>
// //                         </a>
// //                     </li>
// //                     <li className='nav-item '>
// //                         <a href="/appointmentwaiting" className='nav-link text-white'>
// //                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of patient</span></i>
// //                         </a>
// //                     </li>
// //                     {/* <li className='nav-item '>
// //                         <a href="" className='nav-link text-white'>
// //                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Chat</span></i>
// //                         </a>
// //                     </li> */}
// //                     <li className='nav-item '>
// //                         <a href="/appointmentwaiting" className='nav-link text-white'>
// //                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Status of Appointment</span></i>
// //                         </a>
// //                     </li>
// //                     <li className='nav-item '>
// //                         <a href="/reschedulewaiting" className='nav-link text-white'>
// //                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Status of Rescheduling</span></i>
// //                         </a>
// //                     </li>
// //                 </ul>

// //             </div>


// import React from 'react'
// import './NavBarBody.css'
// import {FaList} from 'react-icons/fa'
// import { BsFillBarChartFill } from "react-icons/bs";

// function NavBarBody() {
//   return (
//     // <div className='d-flex navbarbody-home'>
//     <div className='d-flex navbarbody-sidebar flex-column flex-shrink-0' style={{backgroundColor: '#265073'}}>
//                 <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
//                     <li className='navbarbody-nav-item'>
//                         <a href="/patientlist" className='nav-link text-white'>
//                             <FaList /> <span className='ms-2'>List of patients</span>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/reportagent" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of agent</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/reportpatient" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of patient</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/appointmentwaiting" className='nav-link text-white'>
//                         <BsFillBarChartFill /><span className='ms-2'>Status of Appointment</span>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/reschedulewaiting" className='nav-link text-white'>
//                         <BsFillBarChartFill /><span className='ms-2'>Decision New Plan</span>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/scheduletaxi" className='nav-link text-white'>
//                         <BsFillBarChartFill /><span className='ms-2'>Taxi Booking</span>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/schedulehotel" className='nav-link text-white'>
//                         <BsFillBarChartFill /><span className='ms-2'>Hotel Booking</span>
//                         </a>
//                     </li>
//                 </ul>

//             </div>
            
//     // </div>
//   )
// }

// export default NavBarBody


// import React, { useState, useEffect } from 'react';
// import './NavBarBody.css';
// import { FaList } from 'react-icons/fa';
// import { BsFillBarChartFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const menuItems = [
//   { title: 'List of patients', path: '/patientlist', icon: <FaList /> },
//   { title: 'Report of agent', path: '/reportagent', icon: <i className="fa-regular fa-file" /> },
//   { title: 'Report of patient', path: '/reportpatient', icon: <i className="fa-regular fa-file" /> },
//   { title: 'Status of Appointment', path: '/appointmentwaiting', icon: <BsFillBarChartFill /> },
//   { title: 'Decision New Plan', path: '/reschedulewaiting', icon: <BsFillBarChartFill /> },
//   { title: 'Taxi Booking', path: '/scheduletaxi', icon: <BsFillBarChartFill /> },
//   { title: 'Hotel Booking', path: '/schedulehotel', icon: <BsFillBarChartFill /> },
// ];

// function NavBarBody() {
//   const [activeItem, setActiveItem] = useState('');

//   useEffect(() => {
//     const storedActiveItem = localStorage.getItem('activeItem');
//     if (storedActiveItem) {
//       setActiveItem(storedActiveItem);
//     }
//   }, []);

//   const handleClick = (path) => {
//     setActiveItem(path);
//     localStorage.setItem('activeItem', path);
//   };

//   return (
//     <div className="d-flex navbarbody-sidebar flex-column flex-shrink-0" style={{ backgroundColor: '#265073' }}>
//       <nav className="nav nav-pills flex-column mb-auto px-0 mt-3">
//         {menuItems.map(({ title, path, icon }) => (
//           <Link
//             key={path}
//             to={path}
//             className={`menu-item ${activeItem === path ? 'active' : ''}`}
//             onClick={() => handleClick(path)}
//           >
//             <span className="icon">{icon}</span>
//             <span className="title">{title}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default NavBarBody;


import React, { useState, useEffect } from 'react';
import './NavBarBody.css';
import { FaList } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const menuItems = [
  { title: 'List of patients', path: '/patientlist', icon: <FaList /> },
  { title: 'Report of agent', path: '/reportagent', icon: <i className="fa-regular fa-file" /> },
  { title: 'Report of patient', path: '/reportpatient', icon: <i className="fa-regular fa-file" /> },
  { title: 'Status of Appointment', path: '/appointmentwaiting', icon: <BsFillBarChartFill /> },
  { title: 'Decision New Plan', path: '/reschedulewaiting', icon: <BsFillBarChartFill /> },
  { title: 'Taxi Booking', path: '/scheduletaxi', icon: <BsFillBarChartFill /> },
  { title: 'Hotel Booking', path: '/schedulehotel', icon: <BsFillBarChartFill /> },
];

function NavBarBody() {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  const handleClick = (path) => {
    setActiveItem(path);
    localStorage.setItem('activeItem', path);
  };

  return (
    <div className="navbarbody-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">⬜⬜</div>
        <div className="sidebar-title">Material Dashboard 2</div>
      </div>
      <nav>
        {menuItems.map(({ title, path, icon }) => (
          <Link
            key={path}
            to={path}
            className={`menu-item ${activeItem === path ? 'active' : ''}`}
            onClick={() => handleClick(path)}
          >
            <span className="icon">{icon}</span>
            <span className="title">{title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default NavBarBody;

