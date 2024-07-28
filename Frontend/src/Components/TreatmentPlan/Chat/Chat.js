// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ReplyChat from './ReplyChat';
import './Chat.css';
function Chat(){
    return(
        <div className="card-container-chat">
            <div className="chat">
                <h3 className="text-chat">Discuss from Co-ordinator</h3> 
                <div className="chatcard">
                    <Card className="chat-t-card">
                    <Card.Body>
                        <Card.Title className="mb-3">Emergency Contact</Card.Title>
                        <Card.Text>
                    Dear Patient/Agent
                        </Card.Text>
                        <Card.Text>
                    We need more your Information about your mergency contact please reply this problem.
                        </Card.Text>
                    <ReplyChat />
                    </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Chat


// Chat.js
// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import ReplyChat from './ReplyChat';
// import './Chat.css';

// function Chat() {
//   const [coordinatorMessage, setCoordinatorMessage] = useState('');
//   const [hasNewMessage, setHasNewMessage] = useState(false);

//   useEffect(() => {
//     // Simulate receiving a new message from the coordinator every 5 seconds
//     const interval = setInterval(() => {
//       setCoordinatorMessage('This is a new message from the coordinator.');
//       setHasNewMessage(true);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleMessageRead = () => {
//     setHasNewMessage(false);
//   };

//   return (
//     <div className="card-container-chat">
//       <div className="chat">
//         <h3 className="text">Discuss from Co-ordinator</h3>
//         <div className="chatcard">
//           <Card className="chat-t-card">
//             <Card.Body>
//               <Card.Title className="mb-3">Emergency Contact</Card.Title>
//               <Card.Text>{coordinatorMessage}</Card.Text>
//               {hasNewMessage && (
//                 <Card.Text className="new-message-alert">
//                   New message from coordinator!
//                 </Card.Text>
//               )}
//               <ReplyChat onMessageRead={handleMessageRead} />
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;


