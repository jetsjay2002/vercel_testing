// class RescheduleButton {
//   constructor(onClick) {
//     this.button = this.createButton();
//     this.button.addEventListener('click', onClick);
//   }

//   createButton() {
//     const button = document.createElement('button');
//     button.classList.add('reschedule-button');
//     button.style.backgroundColor = '#4CAF50';
//     button.style.border = 'none';
//     button.style.color = 'white';
//     button.style.padding = '10px 20px';
//     button.style.textAlign = 'center';
//     button.style.textDecoration = 'none';
//     button.style.display = 'inline-block';
//     button.style.fontSize = '16px';
//     button.style.margin = '4px 2px';
//     button.style.cursor = 'pointer';
//     button.style.borderRadius = '4px';
//     button.textContent = 'Rescheduling of Patient';
//     return button;
//   }
// }

// export default RescheduleButton;

import React, { useState } from 'react';
import './RescheduleButton.css';
import { useNavigate } from 'react-router-dom'


function RescheduleButton() {


  const navigate = useNavigate(); // Use useNavigate hook for navigation

  // Handle the submit action
const handleReschedule = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  navigate("/reschedulewaiting");
};

const handleTaxi= (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  navigate("/scheduletaxi");
};

const handleHotel= (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  navigate("/schedulehotel");
};


  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="button-and-dialog">
      <button className="dialog-button" onClick={handleButtonClick}>
        Reschedule
      </button>
      {showDialog && (
        <div className="dialog-container-Reschedule">
          <div className="dialog-Reschedule">
          <div className="edit-user-dialog-content">
            <div className="dialog-content-Reschedule">
              <button className="close-button-Reschedule" onClick={handleDialogClose}>
                X
              </button>

              <div className="button-and-dialog">
              <div className="dialog">
                <h3 className='mt-4 mb-4'>Rescheduling Of Patient</h3>
              <div className="dialog-buttons-Reschedule">
                <button onClick={handleReschedule}>Appointment Details</button>
                <button onClick={handleTaxi}>Taxi Booking</button>
                <button onClick={handleHotel}>Hotel Booking</button>
              </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RescheduleButton;