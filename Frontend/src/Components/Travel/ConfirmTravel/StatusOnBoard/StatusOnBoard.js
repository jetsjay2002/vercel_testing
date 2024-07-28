// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
import './StatusOnBoard.css'; // Assuming you have a CSS file for styles
// import ArrivalFlight from '../ArrivalFlight/ArrivalFlight';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NotificationContent = ({ onClose }) => (
    <div style={{
      color: 'black',
      padding: '16px',
      maxWidth: '300px', // Fixed max width for mobile view
      margin: '0 auto', // Center it horizontally
      fontSize: '14px', // Smaller text for mobile
      lineHeight: '1.5', // For better readability on mobile
    }}>
      <h4>Notification Treatment Plan & Contact</h4>
      <p>Location: Jay Hospital</p>
      <p>Date: 19/02/2024</p>
      <p>Time: 09:00 AM to 12:00 AM</p>
      <p>Package: Cosmetic Surgery</p>
      <p>Doctor: Dr. Adisak Intana</p>
      <p>Contact: 02 123 456 7</p>
      <button onClick={onClose} style= {{
          backgroundColor: 'green',
          color: 'white',
        }} className='form-control'>
        Accept
      </button>
    </div>
  );

function StatusOnBoard(){

    const customId = "custom-id-yes";

    const notify = () => toast(
      <NotificationContent onClose={() => toast.dismiss(customId)} />,
      {
        toastId: customId,
        position: "top-right",
        closeButton: true,
        autoClose: false,
        draggable: false,
        style: {
          width: '90%', // Full width toasts for mobile
          maxWidth: 'none',
        }
      }
    );

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/notify"); // Use navigate to go to /home page
    }
    const handleClick2 = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      navigate("/travelcancel"); // Use navigate to go to /home page
    }

    const handleClick3 = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      navigate("/traveldelay"); // Use navigate to go to /home page
    }
    // const handleClick3 = (event) => {
    //   event.preventDefault(); // Prevent the default form submission behavior
    //   navigate("/notify"); // Use navigate to go to /home page
    // }

    return(
        <div className="card-container-status-onboard">
            <h2 className="text-status-onboard mb-4">Confirm Your Travel</h2> 
                <div className="travel-card-status-onboard">
              
                    <h3 className='mb-4' style={{ textAlign: 'center'}}>Travel Confirm</h3>
               
                <div className="travel-card-body-status-onboard">
                    <p>From: Newyork 09:00 AM</p>
                    <p>To: Phuket 10:00 AM</p>
                    <p>Date: 19 February 2024</p>
                </div>
                {/* <div className="travel-card-status-status-onboard">
                    <p>STATUS: PRE-JOURNEY</p>
                </div> */}
                {/* <button className="onboard-button">On Board</button> */}
    
                {/* <div className="travel-card-buttons-status-onboard"> */}
                    {/* <button className="btn btn-green-status-onboard" onClick={notify}>Notify!</button>
                    <ToastContainer /> */}
                    {/* <button className="btn btn-green">Arrive in airport</button> */}
                    {/* <button className="btn btn-red-status-onboard">Flight Cancel</button>
                    <button className="btn btn-red-status-onboard">Flight Delay</button> */}
               {/* </div> */}

                <div className="travel-card-buttons-status-onboard mt-4">
                    {/* <button className="btn btn-green" onClick={notify}>Notify!</button> */}
                    <button className="btn btn-green-status-onboard" onClick={handleClick}>Arrive in airport</button>
                    <button className="btn btn-red-status-onboard" onClick={handleClick2}>Flight Cancel</button>
                    <button className="btn btn-red-status-onboard" onClick={handleClick3}>Flight Delay</button>
                </div>
                </div>
        
        </div>
    )
}

export default StatusOnBoard


