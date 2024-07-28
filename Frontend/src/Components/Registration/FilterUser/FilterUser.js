// import React, { useState } from 'react';
// import { Modal, Button, } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'

// function FilterUser() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
// //   const [selectedOption, setSelectedOption] = useState(null);

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signup"); // Use navigate to go to /home page
//     }

//     const handleClick2 = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signupagent"); // Use navigate to go to /home page
//     }

//     return (
//       <>

//         <p className='tex-end mt-2'>
//         Don't have an account?
//         <span
//             onClick={handleShow}
//             style={{
//             color: 'blue',
//             textDecoration: 'underline',
//             cursor: 'pointer',
//             }}
//         >
//             Sign Up
//         </span>
//         </p>

//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>Register For User?</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//             <Button onClick={handleClick}>Patient</Button>
//             <Button onClick={handleClick2}>Agent</Button>
//             {/* <button className='btn btn-primary' onClick={handleClick}>Sign in</button> */}
//             </div>
//         </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Cancel
//             </Button>

//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }

// export default FilterUser;


import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FilterUser({ show, onHide }) {
    const navigate = useNavigate();

    const handleClickPatient = () => {
        navigate("/signup"); // Redirect to patient signup
    };

    const handleClickAgent = () => {
        navigate("/signupagent"); // Redirect to agent signup
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Register As</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Button variant="primary" onClick={handleClickPatient}>Patient</Button>
                    <Button variant="secondary" onClick={handleClickAgent}>Agent</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FilterUser;
