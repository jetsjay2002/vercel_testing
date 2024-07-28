// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// function HotelComponent() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/home"); // Use navigate to go to /home page
//     }

//     const [isChecked, setIsChecked] = useState({
//         yes: false,
//         no: false
//     });

//     const handleCheckboxChange = (event) => {
//         const { name, checked } = event.target;
        
//         // Update the state to reflect the new checkbox status
//         setIsChecked(prevState => ({ ...prevState, [name]: checked }));
        
//         // Here you could also call a function similar to `switchView` based on which checkbox was toggled
//         if (name === 'yes' && checked) {
//             // Perform action for "Yes"
//             console.log("Yes selected");
//         } else if (name === 'no' && checked) {
//             // Perform action for "No"
//             console.log("No selected");
//         }
//     };
//     return (
//       <>
//         <Modal>
//         <Modal.Header closeButton>
//             <Modal.Title>Do you  want to book the hotel?</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <div className="form-check mb-3" style={{ marginRight: '10px' }}> {/* Add margin for spacing */}
//                     <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="yesCheckbox"
//                         onChange={handleCheckboxChange} // This function needs to be defined to handle changes
//                     />
//                     <label className="form-check-label" htmlFor="yesCheckbox">
//                         Yes
//                     </label>
//                 </div>
//                 <div className="form-check mb-3">
//                     <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="noCheckbox"
//                         onChange={handleCheckboxChange} // Reuse the same change handler or define another as needed
//                     />
//                     <label className="form-check-label" htmlFor="noCheckbox">
//                         No
//                     </label>
//                 </div>
//             </div>
//         </Modal.Body>
//         <Button className='form-control' variant="primary" onClick={handleClick}>
//           Submit
//         </Button>
//         </Modal>
//       </>
//     );
// }

// export default HotelComponent;