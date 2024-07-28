// import React, { useState } from 'react';
// import './DashBoard.css';

// const DashBoard = () => {


//   return (
//     <div className="d-flex dashboard-home">
//       <div className="dashboard-content mt-3">
//         <div className="d-flex justify-content-between mt-3">
//           <h2 className="mb-2">DashBoard</h2>
//           <div className="filter-dashboard-controls">

//           </div>
//         </div>
//         <div className="card-container">
//             <h2>test</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;


import React from 'react';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom'


const DashBoard = () => {

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/patientlist"); // Use navigate to go to /home page
    }

  return (
    <div className="d-flex dashboard-home">
      <div className="dashboard-content mt-3">

       <div className="topic-card-1 mt-4">
        <div className="d-flex justify-content-between mt-3">
        {/* <div className="topic-card"> */}
          <h2 className="mb-4">Pre-Journey</h2>
          {/* <div className="filter-dashboard-controls"></div> */}
        </div>
        <div className="card-container">
          <div className="report-card card-delay">
            <div className="card-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div className="card-value">15</div>
            <button className="card-label" onClick={handleClick}>Flight Delay</button>
          </div>

          <div className="report-card card-cancel">
            <div className="card-icon">
                <i class="fas fa-times-circle"></i>
            </div>
            <div className="card-value">20</div>
            <button className="card-label" onClick={handleClick}>Flight Cancel</button>
          </div>
          <div className="report-card card-onboard">
            <div className="card-icon">
                <i class="fa-solid fa-plane-departure"></i>
            </div>
            <div className="card-value">20</div>
            <button className="card-label" onClick={handleClick}>On Board</button>
          </div>
          <div className="report-card card-arrival">
            <div className="card-icon">
                <i class="fa-solid fa-plane-arrival" ></i>
            </div>
            <div className="card-value">20</div>
            <button className="card-label" onClick={handleClick}>Arrival</button>
          </div>
        {/* </div> */}
        </div>

        <div className="card-container-2">
          <div className="report-card-2 card-yellow">
            <div className="card-icon">
                <i class="fas fa-hourglass-half"></i>
            </div>
            <div className="card-value">10</div>
            <button className="card-label" onClick={handleClick}>Waiting for Approval</button>
          </div>
          <div className="report-card-2 card-green">
            <div className="card-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div className="card-value">20</div>
            <button className="card-label" onClick={handleClick}>Approval</button>
          </div>
          </div>
          </div>

 <div className="topic-card mt-4">
        <div className="d-flex justify-content-between mt-3">
            {/* <div className="topic-card"> */}
            <h2 className="mb-4">During Stay</h2>
            {/* <div className="filter-dashboard-controls"></div> */}
            </div>
            <div className="card-container-2">
          <div className="report-card-2 card-operation">
            <div className="card-icon">
                <i class="fas fa-cogs"></i>
            </div>
            <div className="card-value">10</div>
            <button className="card-label" onClick={handleClick}>Operation</button>
          </div>
          <div className="report-card-2 card-recuperate">
            <div className="card-icon">
                <i class="fas fa-bed"></i>
            </div>
            <div className="card-value">15</div>
            <button className="card-label" onClick={handleClick}>Recuperate</button>
          </div>
          </div>
        </div>
      
        
<div className="topic-card mt-4">
        <div className="d-flex justify-content-between mt-3">
        {/* <div className="topic-card"> */}
          <h2 className="mb-4">Post-Journey</h2>
          {/* <div className="filter-dashboard-controls"></div> */}
          </div>
            <div className="card-container">
            <div className="report-card card-departure">
                <div className="card-icon">
                    <i class="fas fa-plane-departure"></i>
                </div>
                <div className="card-value">25</div>
                <button className="card-label" onClick={handleClick}>Departure</button>
            </div>
            </div>
            </div>
      {/* </div> */}

      </div>
    </div>
  );
};

export default DashBoard;