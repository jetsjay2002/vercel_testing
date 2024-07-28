// // import { useState } from 'react';
// import React, { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import Modal from 'react-bootstrap';
// // import Creatable from "react-select/creatable";
// // import Select from "react-select";
// import { Modal, Button,Form, } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// function ReplyChat() {
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
//         <Button className="form-control" variant="primary" onClick={handleShow}>
//           Reply
//         </Button>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Reply your answer</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <Form className="mt-2" aria-label="Default select example">
//                     {/* <Form.Group className="mb-3" controlId="formMedicalProblem">
//                 <Form.Label>Medical Problem</Form.Label>
//                 <Form.Control type="text" placeholder="Enter medical problem" />
//                 </Form.Group> */}
//             <Form.Group className="mb-3" controlId="formMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
//             </Form.Group>
//           </Form>

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

// export default ReplyChat;



// ReplyChat.js
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function ReplyChat({ onMessageRead }) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     event.preventDefault();
//     onMessageRead(); // Call the onMessageRead function passed as a prop
//     handleClose(); // Close the modal
//   };

//   return (
//     <>
//       <Button className="form-control" variant="primary" onClick={handleShow}>
//         Reply
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reply your answer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="mt-2" aria-label="Default select example">
//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClick}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ReplyChat;


// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function ReplyChat({ onMessageRead }) {
//   const [show, setShow] = useState(false);
//   const [replyAnswer, setReplyAnswer] = useState(''); // Initialize the replyAnswer state
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     event.preventDefault();
//     onMessageRead(); // Call the onMessageRead function passed as a prop
//     handleClose(); // Close the modal
//     // You can pass the replyAnswer to another page or component here
//     // For example, navigate to another page with replyAnswer as a query parameter
//     navigate(`/another-page?replyAnswer=${encodeURIComponent(replyAnswer)}`);
//   };

//   const handleReplyChange = (event) => {
//     setReplyAnswer(event.target.value);
//   };

//   return (
//     <>
//       <Button className="form-control" variant="primary" onClick={handleShow}>
//         Reply
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reply your answer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="mt-2" aria-label="Default select example">
//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Write your message here"
//                 value={replyAnswer}
//                 onChange={handleReplyChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClick}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ReplyChat;



// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function ReplyChat({ onReply }) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const navigate = useNavigate();

//   const [replyMessage, setReplyMessage] = useState(''); // State to store the reply message

//   const handleChange = (event) => {
//     setReplyMessage(event.target.value);
//   };

//   const handleClick = (event) => {
//     event.preventDefault();
//     // Call the onReply function passed as a prop, passing the replyMessage as an argument
//     onReply(replyMessage);
//     handleClose();
//     // navigate('/home'); // Uncomment this line if you want to navigate to /home after submitting the reply
//   };

//   return (
//     <>
//       <Button className="form-control" variant="primary" onClick={handleShow}>
//         Reply
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reply your answer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="mt-2" aria-label="Default select example">
//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Write your message here"
//                 value={replyMessage} // Set the value of the textarea to the replyMessage state
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClick}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ReplyChat;


// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function ReplyChat({ onReply }) {
//   const [show, setShow] = useState(false);
//   const [replyMessage, setReplyMessage] = useState('');
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleClick = () => {
//     onReply(replyMessage); // Pass the reply message to the onReply function
//     setReplyMessage('');
//     handleClose(); // Close the modal
//   };

//   return (
//     <>
      // <Button className="form-control" variant="primary" onClick={handleShow}>
      //   Reply
      // </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reply your answer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="mt-2" aria-label="Default select example">
//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Write your message here"
//                 value={replyMessage}
//                 onChange={(e) => setReplyMessage(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClick}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default ReplyChat;


// import React, { useState , useContext  } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { ReplyContext } from './ReplyContext';
// import { useNavigate } from 'react-router-dom';

// function ReplyChat({ onMessageRead }) {
//     const [show, setShow] = useState(true);
//     const handleClose = () => setShow(false);
//     //   const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const { replyData, setReplyData } = useContext(ReplyContext);

//     const [message, setMessage] = useState('');
//     // const { handleReplyMessage } = useContext(ReplyContext);
//     const navigate = useNavigate();


//   //   const handleSubmit = (event) => {
//   //     event.preventDefault();
//   //     console.log('Before update:', replyData); // Log the current replyData value
//   //     setReplyData((prevReplyData) => {
//   //       const newReplyData = message;
//   //       console.log('New replyData:', newReplyData); // Log the new replyData value
//   //       return newReplyData;
//   //     });
//   //     setMessage('');
//   // };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setReplyData(message);
//     console.log('New replyData:', message); // Log the new replyData value
//     setMessage('');
//     handleClose();
//   };
//     // const handleSubmit = () => {
//     //   setReplyData(message); // Save the message to the context
//     //   // navigate('/appointment-body'); // Navigate to AppointmentBody page
//     //   handleClose(); // Close the modal

//     // };

//     return (
//       <>
//       <Button className="form-control" variant="primary" onClick={handleShow}>
//         Reply
//       </Button>
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Reply your answer</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form className="mt-2" aria-label="Default select example">
//                     <Form.Group className="mb-3" controlId="formMessage">
//                         <Form.Label>Message</Form.Label>
//                         <Form.Control as="textarea" 
//                         rows={3}          
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)} 
//                         placeholder="Write your message here" />
//                       </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Cancel
//                 </Button>
//                 <Button variant="primary" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </Modal.Footer>
//         </Modal> 
//         </>
//     );
// }

// export default ReplyChat;

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ReplyChat({ onMessageRead }) {
  const [show, setShow] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleClose(); // Close the modal
  };

  return (
    <>
      <Button className="form-control" variant="primary" onClick={handleShow}>
        Reply
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply your answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-2" aria-label="Default select example">
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImages">
              <Form.Label>Select Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReplyChat;






