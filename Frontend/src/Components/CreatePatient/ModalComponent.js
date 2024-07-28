// import React from 'react';
// import './ModalComponent.css';

// export const ModalComponent = ({ visible, onClose, children }) => {
//   if (!visible) return null;

//   const handleOnClose = (e) => {
//     if (e.target.id === "container") onClose();
//   };

//   return (
//     <div
//       id="container"
//       onClick={handleOnClose}
//       className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       {children}
//     </div>
//   );
// };

// export const SignInContent = () => {
//   return (
//     <div className="bg-white p-4 rounded">
//       <h1 className="font-semibold text-center text-xl text-gray-700">Welcome back</h1>
//       <p className="text-center text-gray-700 mb-5">Sign in</p>
//       <div className="flex flex-col">
//         <input
//           type="text"
//           className="border border-gray-700 p-2 rounded mb-5"
//           placeholder="email@example.com"
//         />
//         <input
//           type="password"
//           className="border border-gray-700 p-2 rounded mb-5"
//           placeholder="********"
//         />
//       </div>
//       <div className="text-center">
//         <button className="px-5 py-2 bg-gray-700 text-white rounded">Sign in</button>
//       </div>
//     </div>
//   );
// };

// Importing necessary components and hooks from react and react-bootstrap
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

// The ModalComponent function component
function ModalComponent() {
  const [show, setShow] = useState(false);  // State to handle visibility of the modal

  const handleClose = () => setShow(false);  // Handler to close the modal
  const handleShow = () => setShow(true);    // Handler to show the modal

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate("/signup"); // Use navigate to go to /home page
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add new Patient
      </Button>

      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to add patient ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>

          <Button className="mb-3 form-control" variant="primary" onClick={handleClick}>
            Yes
          </Button>

          <Button className="mb-2 form-control" variant="secondary" onClick={handleClose}>
            No
          </Button>

        </Modal.Footer>
      </Modal>
       {/* <Button className='form-control' variant="primary" onClick={handleShow}>
           Select this package
         </Button>

         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Choos the doctor of you want or 
             recommended from System?</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Button className="mb-3 form-control" variant="primary" >
           Choose it myself
           </Button>

           <Button className="mb-2 form-control" variant="secondary">
           Recommended
           </Button>
           </Modal.Body>
         </Modal> */}
    </>
  );
}

export default ModalComponent;  // Exporting the component

