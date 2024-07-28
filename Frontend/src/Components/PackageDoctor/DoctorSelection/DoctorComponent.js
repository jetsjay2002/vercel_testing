// import React, { useState } from 'react';
// // import { Modal, Button,Form, } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './DoctorComponent.css';
// function DoctorComponent() {
//     // const [show, setShow] = useState(false);
//     const [showComponent, setShowComponent] = useState(false);
//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);
// //   const [selectedOption, setSelectedOption] = useState(null);

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/doctorselect"); // Use navigate to go to /home page
//     }

//     const handleClick2 = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/doctorrecommended"); // Use navigate to go to /home page
//     }

//     return (
//         <>
//         <div className="app">
//         <button className='select-package-button' onClick={() => setShowComponent(true)}>
//           Select this package
//         </button>

//         {showComponent && (
//           <div className="overlay">
//             <div className="modal">
//               <p>Choose the doctor of you want or recommended from System?</p>
//               <button className='option-button' onClick={{handleClick}}>Choose it myself</button>
//               <button className='option-button' onClick={{handleClick2}}>Recommended</button>
//               {/* <button className='close-button' onClick={(handleClose) => setShowComponent(false)}>Close</button> */}
//             </div>
//           </div>
//         )}
//       </div>
//       </>
//     );
// }

// export default DoctorComponent;




import React, { useState } from 'react';
import { Modal, Button,Form, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function DoctorComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//   const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctorselect"); // Use navigate to go to /home page
    }

    const handleClick2 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctorrecommended"); // Use navigate to go to /home page
    }

    return (
      <>
        <Button className='form-control' variant="primary" onClick={handleShow}>
          Select this package
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choos the doctor of you want or 
            recommended from System?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button className="mb-3 form-control" variant="primary" onClick={handleClick}>
          Choose it myself
          </Button>

          <Button className="mb-2 form-control" variant="secondary" onClick={handleClick2}>
          Recommended
          </Button>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Submit
              {/* <button className='btn btn-primary' onClick={handleClick}>Sign in</button> *
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
}

export default DoctorComponent;