// // import { useState } from 'react';
// import React, { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import Modal from 'react-bootstrap';
// // import Creatable from "react-select/creatable";
// // import Select from "react-select";
// import { Modal, Button,Form, } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// function FilterHospital() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
// //   const [selectedOption, setSelectedOption] = useState(null);

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/home"); // Use navigate to go to /home page
//     }

//     return (
//       <>
//         {/* <Button variant="primary" onClick={handleShow}>
//           Sign In
//         </Button> */}

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Filter Hospital</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <Form.Select className="mt-2" aria-label="Default select example">
//               {/* <Creatable options={options} onChange={setSelectedOption} isMulti /> */}
//               <option>Medical Problem</option>
//               {/* <Select options={options} /> */}
//               <option value="1">Cusmetic Sugey</option>
//               <option value="2">Dentist</option>
//               {/* <option value="3">Three</option> */}
//           </Form.Select>

//           <Form.Select className="mt-2" aria-label="Default select example">
//               <option>Hospital</option>
//               <option value="1">Siriroj Bangkok Hospital</option>
//               <option value="2">Bangkok Hospital Phuket</option>
//               {/* <option value="3">Three</option> */}
//           </Form.Select>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={handleClick}>
//               Submit
//               {/* <button className='btn btn-primary' onClick={handleClick}>Sign in</button> */}
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }

// export default FilterHospital;


import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FilterHospital({ show, onHide }) {
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/home"); // Use navigate to go to /home page
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Filter Hospital</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Select className="mt-2" aria-label="Medical Problem">
                    <option>Medical Problem</option>
                    <option value="1">Cosmetic Surgery</option>
                    <option value="2">Dentist</option>
                </Form.Select>

                <Form.Select className="mt-2" aria-label="Hospital">
                    <option>Hospital</option>
                    <option value="1">Siriroj Bangkok Hospital</option>
                    <option value="2">Bangkok Hospital Phuket</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FilterHospital;
