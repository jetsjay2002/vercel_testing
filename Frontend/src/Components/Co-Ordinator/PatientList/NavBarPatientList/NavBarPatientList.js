// // import { Component } from "react";
// import React from 'react'
// // import {Link} from "react-router-dom" 


// // class NavBarPatientList extends Component {
//   function NavBarPatientList () {

//     // state = {clicked: false};
//     // handleClick = () => {
//     //     this.setState({ clicked: !this.state.clicked })
//     // }

//     // render(){
//         return (
//             <div>
//                 {/* <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor: '#EBE7B4'}}> */}
//                 <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor: '#427D9D'}}>

//                     <div className='container-fluid'>
//                         <button className='navbar-toggler' data-bs-toggle="collapse"
//                             data-bs-target="#navbarm" aria-controls='navbarm' aria-expanded="false"
//                                 aria-label='Toggle navigation'>
//                                     <span className='navbar-toggler-icon'></span>
//                         </button>
//                         <div className="collapse navbar-collapse justify-content-md-center" id='navbarm'>
//                             <ul className='navbar-nav'>
//                                 <li className='nav-item mx-2'> 
//                                     <a className="nav-link" style={{color: '#FFC96F'}} href='#'>.</a>
//                                 </li>
//                                 <div className="left-side" style={{color: '#FFC96F'}}>
//                                     <button>Username</button>
//                                     <button>Logout</button>
//                                 </div>
//                                 {/* <li className='nav-item mx-2'> 
//                                     <a className="nav-link text-white" href='/reschedulewaiting'>Waiting for Confirmed Rescheduling</a>
//                                 </li> */}
//                                 {/* <li className='nav-item mx-2'> 
//                                     <a className="nav-link text-white" href='#'>About</a>
//                                 </li> */}
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//   )
// }

// export default NavBarPatientList

// import { Component } from "react";
import React, { useState } from 'react';
// import {Link} from "react-router-dom" 
import { useNavigate } from 'react-router-dom'

// class NavBarPatientList extends Component {
  function NavBarPatientList () {

    // state = {clicked: false};
    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })

    
    // }

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/dashboard"); // Use navigate to go to /home page
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      const [isDropdownOpenNotify, setIsDropdownOpenNotify] = useState(false);
      const toggleDropdownNotify = () => {
          setIsDropdownOpenNotify(!isDropdownOpenNotify);
        };

    // render(){
        return (
            <div style={{ position: 'relative', top: '20px' }}>
                {/* <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor: '#EBE7B4'}}> */}
                <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#427D9D', marginLeft: '-20px', marginRight: '-20px' }}>

                    <div className='container-fluid'>
                        <button className='navbar-toggler' data-bs-toggle="collapse"
                            data-bs-target="#navbarm" aria-controls='navbarm' aria-expanded="false"
                                aria-label='Toggle navigation'>
                                    <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-md-between" id='navbarm'>
                            <ul className='navbar-nav'>
                                <div className="d-flex">
                                <button className="btn btn-secondary rounded-pill" style={{ backgroundColor: '#EFF396' }} onClick={handleClick}>
                                    <span className="ms-2" style={{ color: 'black', fontSize: '1rem'}}>HOME </span>
                                </button>
                                </div>
                            </ul>
                            <ul className='navbar-nav ms-auto'>
                            <li className="nav-item mx-2">
                                {/* <div className="relative"> */}
                                <li className="nav-item mx-2">
                                <a className= {`nav-link dropdown-toggle ${isDropdownOpenNotify ? 'show' : ''}`}
                                href="#"
                                role="button"
                                onClick={toggleDropdownNotify}
                                aria-expanded={isDropdownOpenNotify}
                                >
                                <span className="rounded-pill py-2 px-3 position-relative" style={{ backgroundColor: '#EFF396', color: 'black' }}>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.9rem'}}>
                                5
                                </span>
                                <i className="fa-solid fa-bell text-2xl" style={{ fontSize: '1.2rem'}}></i>
                            </span>

                        </a>
                        <ul className={`dropdown-menu ${isDropdownOpenNotify ? 'show' : ''}`}
                            // style={{
                            //     position: 'absolute',
                            //     left: 'calc(50% - 150px)', // Adjust the value based on the dropdown width
                            //     width: '300px', // Adjust the width as needed
                            //     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                            // }}
                            >
                            <li>
                                <h6 className="dropdown-header px-4 py-2 text-gray-900 font-semibold">
                                    Notifications
                                </h6>
                            </li>
                            <hr className="dropdown-divider border-gray-200 my-2" />
                            <li>
                                
                                <a    className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                >
                                    <span className="flex-1">Lorem ipsum dolor sit a...</span>
                                    <span className="ml-auto text-green-500">Success</span>
                                </a>
                            </li>
                            <hr className="dropdown-divider border-gray-200 my-2" />
                            <li>
                                
                                <a    className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                >
                                    <span className="flex-1">Lorem ipsum dolor sit a...</span>
                                    <span className="ml-auto text-red-500">Failed</span>
                                </a>
                            </li>
                            
                            <hr className="dropdown-divider border-gray-200 my-2" />
                            <li>
                                
                                <a   className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                >
                                    <span className="flex-1">Lorem ipsum dolor sit a...</span>
                                    <span className="ml-auto text-green-500">Succes</span>
                                </a>
                            </li>
                            <hr className="dropdown-divider border-gray-200 my-2" />
                            <li>
                                
                                <a   className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                >
                                    <span className="flex-1">Lorem ipsum dolor sit a...</span>
                                    <span className="ml-auto text-red-500">Failed</span>
                                </a>
                            </li>
                            <hr className="dropdown-divider border-gray-200 my-2" />
                            <li>
                                
                                <a  className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                >
                                    <span className="flex-1">Lorem ipsum dolor sit a...</span>
                                    <span className="ml-auto text-green-500">Success</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-gray-200 my-2" />
                            </li>
                            {/* <li>
                                
                                    <a className="dropdown-item px-4 py-2 hover:bg-gray-100"
                                    href="#"
                                    >
                                    Show All Activities
                                    </a>
                            </li> */}
                        </ul>
                        </li>
                    {/* </div> */}
                    </li>





 
                                <li className="nav-item mx-2">
                                    <a className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                                        href="#"
                                        role="button"
                                        onClick={toggleDropdown}
                                        aria-expanded={isDropdownOpen}
                                    >
                                        <span className="rounded-pill py-1 px-3" style={{ backgroundColor: '#EFF396', color: 'black', fontSize: '1rem'}}>USER: Paula Wilson</span>
                                    </a>
                                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                        <li>
                                        <a className="dropdown-item" href="/profiles">
                                            Profile
                                        </a>
                                        </li>
    
                                        <li>
                                        <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                        <a className="dropdown-item" href="/login">
                                            Logout
                                        </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
// }

export default NavBarPatientList



