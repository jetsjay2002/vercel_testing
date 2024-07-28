// import React, { useState } from 'react';
// import "./ReschedulingWaitingBody.css"
// // import { FaList } from 'react-icons/fa'
// // import NavBarBody from '../../NavBarBody';
// import { users as initialUsers } from './datareschedule';
// function ReschedulingWaitingBody() {

  
//     const [users, setUsers] = useState(initialUsers);



//     const [changeappointmenting, setchangeappointmenting] = useState(false);
//     const [currentUser, setCurrentUser] = useState({ id: null, name: '', package: '',doctor: '', preferred_date1: '', preferred_date2: '' });
//     const [showAddUserDialog, setShowAddUserDialog] = useState(false);
//     const [showchangeappointmentUserDialog, setShowchangeappointmentUserDialog] = useState(false);

//     const changeappointmentUser = (user) => {
//         setchangeappointmenting(true);
//         setCurrentUser({ id: user.id, name: user.name, package: user.package, doctor: user.doctor,preferred_date1: user.preferred_date1 ,preferred_date2: user.preferred_date2});
//         setShowchangeappointmentUserDialog(true);
//     };
    
//       const updateUser = (id, updatedUser) => {
//         setchangeappointmenting(false);
//         setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
//         setShowchangeappointmentUserDialog(false);
//     };
    
    
//       const handleStatusUpdate = (id, newStatus) => {
//         setUsers(prevUsers =>
//           prevUsers.map(user =>
//             user.id === id ? { ...user, status: newStatus } : user
//           )
//         );
//       };

//         const chatButton = document.getElementById('chatButton');
//         const chatForm = document.getElementById('chatForm');
//         const submitButton = document.getElementById('submitButton');
//         const closeButton = document.getElementById('closeButton');

//         chatButton.addEventListener('click', () => {
//         chatForm.style.display = 'flex';
//         });

//         closeButton.addEventListener('click', () => {
//         chatForm.style.display = 'none';
//         });

//         submitButton.addEventListener('click', () => {
//         const titleInput = document.getElementById('titleInput');
//         const messageInput = document.getElementById('messageInput');

//         // Here, you can add your logic to handle the form submission
//         console.log('Title:', titleInput.value);
//         console.log('Message:', messageInput.value);

//         // Clear the input values
//         titleInput.value = '';
//         messageInput.value = '';

//         // Hide the form
//         chatForm.style.display = 'none';
//         });

//     return (
//         <div>

// {showchangeappointmentUserDialog && (
//         <div className="dialog-container-changeappointment">
//             <div className="dialog-changeappointment">
//                 <div className="dialog-content-changeappointment">
//                     <div className="changeappointment-dialog-content">
//                     <button className="close-button-changeappointment" onClick={() => setShowchangeappointmentUserDialog(false)}>
//                         X
//                     </button>
                    
//                     <div className="dialog-card-changeappointment">
//                     <h2>Change Appointment</h2>
//                         <div className="dialog-form-changeappointment">
//                             <form
//                                 onSubmit={(event) => {
//                                 event.preventDefault();
//                                 updateUser(currentUser.id, currentUser);
//                                 }}
//                             >
//                                 <input
//                                 placeholder="Name"
//                                 type="text"
//                                 value={currentUser.name}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
//                                 />
//                                 <input
//                                 placeholder="Package"
//                                 type="text"
//                                 value={currentUser.package}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, package: e.target.value })}
//                                 />
//                                 <input
//                                 placeholder="Doctor"
//                                 type="text"
//                                 value={currentUser.doctor}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, doctor: e.target.value })}
//                                 />
//                                 <input
//                                 placeholder="Pre_1"
//                                 type="text"
//                                 value={currentUser.preferred_date1}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, preferred_date1: e.target.value })}
//                                 />
//                                 <input
//                                 placeholder="Pre_2"
//                                 type="text"
//                                 value={currentUser.preferred_date2}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, preferred_date2: e.target.value })}
//                                 />
//                                 {/* <div className="dialog-actions"> */}
//                                 <button type="submit">Update User</button>
//                                 {/* </div> */}
//                             </form>
//                         </div>    
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )}




        
//         <div className='d-flex ReschedulingWaitingBody-home'>
//             <div className='ReschedulingWaitingBody-content  mt-3'>
//                 <div className="d-flex justify-content-between mt-3">
//                     <h2 className='mb-2'>Decision Of New Plan</h2>
//                 </div>
//                 <table className="ReschedulingWaitingBody-table">
//                     <thead>
//                         <tr>
//                             {/* <th scope="col">ID</th>
//                             <th scope="col">NAME</th>
//                             <th scope="col">Package</th>

//                             <th scope="col">Status of patient</th>
//                             <th scope="col">Status of taxi</th>
//                             <th scope="col">Status of hotel</th> */}
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Package</th>
//                             <th>Doctor</th>
//                             <th>preferred_date1</th>
//                             <th>preferred_date2</th>
//                             <th>Status</th>
//                             <th>Change Status</th>
//                             <th>Change Appointment</th>
//                             <th>Chat</th>
            
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.package}</td>
//                             <td>{user.doctor}</td>
//                             <td>{user.preferred_date1}</td>
//                             <td>{user.preferred_date2}</td>
//                             <td>
//                             <span
//                                 className={`status-badge ${
//                                 user.status === 'Waiting for approval' ? 'waiting' : 'approved'
//                                 }`}
//                             >
//                                 {user.status}
//                             </span>
//                             </td>
//                             <td>
//                             {user.status === 'Waiting for approval' ? (
//                                 <button
//                                 className="action-button approved"
//                                 onClick={() => handleStatusUpdate(user.id, 'Approved')}
//                                 >
//                                 Approve
//                                 </button>
//                             ) : (
//                                 <button
//                                 className="action-button waiting"
//                                 onClick={() => handleStatusUpdate(user.id, 'Waiting for approval')}
//                                 >
//                                 Waiting for Approval
//                                 </button>
//                             )}
//                                 </td>

//                                 <td>
//                                 <button onClick={() => changeappointmentUser(user)}>changeappointment</button>
//                                 </td>
//                                 <td>
//                                 <button onClick={() => changeappointmentUser(user)}>chat</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//             </div>
//         </div>
//         </div>
//     )
// }

// export default ReschedulingWaitingBody


// import React, { useState } from 'react';
// import "./ReschedulingWaitingBody.css"
// import { users as initialUsers } from './datareschedule';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// function ReschedulingWaitingBody() {
//     const [users, setUsers] = useState(initialUsers);
//     const [changeappointmenting, setchangeappointmenting] = useState(false);
//     const [currentUser, setCurrentUser] = useState({ id: null, name: '', package: '', doctor: '', preferred_date1: '', preferred_date2: '' });
//     const [showchangeappointmentUserDialog, setShowchangeappointmentUserDialog] = useState(false);
//     const [showChatDialog, setShowChatDialog] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [usersPerPage] = useState(10);

//   const changeappointmentUser = (user) => {
//     setchangeappointmenting(true);
//     setCurrentUser({ id: user.id, name: user.name, package: user.package, doctor: user.doctor, preferred_date1: user.preferred_date1, preferred_date2: user.preferred_date2 });
//     setShowchangeappointmentUserDialog(true);
//   };

//   const updateUser = (id, updatedUser) => {
//     setchangeappointmenting(false);
//     setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
//     setShowchangeappointmentUserDialog(false);
//   };

//   const handleStatusUpdate = (id, newStatus) => {
//     setUsers(prevUsers =>
//       prevUsers.map(user =>
//         user.id === id ? { ...user, status: newStatus } : user
//       )
//     );
//   };

//   const TestshowChatDialog = (user) => {
//     setShowChatDialog(true);
//   };

//   const closeChatDialog = () => {
//     setShowChatDialog(false);
//   };

//   const submitChat = () => {
//     const titleInput = document.getElementById('titleInput');
//     const messageInput = document.getElementById('messageInput');

//     // Here, you can add your logic to handle the form submission
//     console.log('Title:', titleInput.value);
//     console.log('Message:', messageInput.value);

//     // Clear the input values
//     titleInput.value = '';
//     messageInput.value = '';

//     // Hide the form
//     setShowChatDialog(false);
//   };

//   const [filteredStatus, setFilteredStatus] = useState("");

//   const handleStatusFilter = (event) => {
//     setFilteredStatus(event.target.value);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.filter((user) =>
//     filteredStatus ? user.status === filteredStatus : true
//   ).slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(users.length / usersPerPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {showchangeappointmentUserDialog && (
//         <div className="dialog-container-changeappointment">
//           <div className="dialog-changeappointment">
//             <div className="dialog-content-changeappointment">
//               <div className="changeappointment-dialog-content">
//                 <button className="close-button-changeappointment" onClick={() => setShowchangeappointmentUserDialog(false)}>
//                   X
//                 </button>
//                 <div className="dialog-card-changeappointment">
//                   <h2>Change Appointment</h2>
//                   <div className="dialog-form-changeappointment">
//                     <form
//                       onSubmit={(event) => {
//                         event.preventDefault();
//                         updateUser(currentUser.id, currentUser);
//                       }}
//                     >
//                       <input
//                         placeholder="Name"
//                         type="text"
//                         value={currentUser.name}
//                         onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
//                       />
//                       <input
//                         placeholder="Package"
//                         type="text"
//                         value={currentUser.package}
//                         onChange={(e) => setCurrentUser({ ...currentUser, package: e.target.value })}
//                       />
//                       <input
//                         placeholder="Doctor"
//                         type="text"
//                         value={currentUser.doctor}
//                         onChange={(e) => setCurrentUser({ ...currentUser, doctor: e.target.value })}
//                       />
//                       <input
//                         placeholder="Pre_1"
//                         type="text"
//                         value={currentUser.preferred_date1}
//                         onChange={(e) => setCurrentUser({ ...currentUser, preferred_date1: e.target.value })}
//                       />
//                       <input
//                         placeholder="Pre_2"
//                         type="text"
//                         value={currentUser.preferred_date2}
//                         onChange={(e) => setCurrentUser({ ...currentUser, preferred_date2: e.target.value })}
//                       />
//                       <button type="submit">Update User</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showChatDialog && (
//         <div className="dialog-container-chat-decision">
//             <div className="dialog-chat-decision">
//                 <div className="dialog-content-chat-decision">
//                     <div className="chat-decision-user-dialog-content">
//                     <button className="close-button-chat-decision" onClick={() => closeChatDialog(false)}>
//                         X
//                     </button>

//                     <div className="dialog-card-chat-decision">
//                     <h2 className='mt-4 mb-4'>Chat To Patient</h2>
//                     <div className="dialog-form-chat-decision">
//                         <input type="text" placeholder="Title" id="titleInput" />
//                         <textarea placeholder="Message" id="messageInput"></textarea>
//                         <button onClick={submitChat}>Submit</button>
//                     </div>
//                     </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         )}

//       <div className='d-flex ReschedulingWaitingBody-home'>
//         <div className='ReschedulingWaitingBody-content  mt-3'>
//           <div className="d-flex justify-content-between mt-3">
//             <h2 className='mb-2'>Decision Of New Plan</h2>
//             <div>
//               <label htmlFor="status-filter">Filter by status:</label>
//               <select id="status-filter" onChange={handleStatusFilter}>
//                 <option value="">All</option>
//                 <option value="Waiting for approval">Waiting for approval</option>
//                 <option value="Approved">Approved</option>
//               </select>
//             </div>
//           </div>
//           <table className="ReschedulingWaitingBody-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Package</th>
//                 <th>Doctor</th>
//                 <th>preferred_date1</th>
//                 <th>preferred_date2</th>
//                 <th>Status</th>
//                 <th>Change Status</th>
//                 <th>Change Appointment</th>
//                 <th>Chat</th>
//               </tr>
//             </thead>
//             <tbody>
//             {users
//                 .filter((user) =>
//                   filteredStatus ? user.status === filteredStatus : true
//                 ).map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.package}</td>
//                   <td>{user.doctor}</td>
//                   <td>{user.preferred_date1}</td>
//                   <td>{user.preferred_date2}</td>
//                   <td>
//                     <span
//                       className={`status-badge ${
//                         user.status === 'Waiting for approval' ? 'waiting' : 'approved'
//                       }`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>
//                   <td>
//                     {user.status === 'Waiting for approval' ? (
//                       <button
//                         className="action-button approved"
//                         onClick={() => handleStatusUpdate(user.id, 'Approved')}
//                       >
//                         Approve
//                       </button>
//                     ) : (
//                       <button
//                         className="action-button waiting"
//                         onClick={() => handleStatusUpdate(user.id, 'Waiting for approval')}
//                       >
//                         Waiting for Approval
//                       </button>
//                     )}
//                   </td>
//                   <td>
//                     <button onClick={() => changeappointmentUser(user)}>changeappointment</button>
//                   </td>
//                   <td>
//                     <button onClick={() => TestshowChatDialog(user)}>Chat</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => paginate(currentPage - 1)}
//               className="pagination-btn"
//             >
//               <FaChevronLeft />
//             </button>
//             <span>Page {currentPage} of {totalPages}</span>
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => paginate(currentPage + 1)}
//               className="pagination-btn"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReschedulingWaitingBody;
import React, { useState } from 'react';
import "./ReschedulingWaitingBody.css"
import { users as initialUsers } from './datareschedule';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { replyMessages } from '../../AppointmentWaitingForApproval/AppointmentBody/DataReplyMsg';


function ReschedulingWaitingBody() {
  const [users, setUsers] = useState(initialUsers);
  const [changeappointmenting, setchangeappointmenting] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', package: '', doctor: '', preferred_date1: '', preferred_date2: '' });
  const [showchangeappointmentUserDialog, setShowchangeappointmentUserDialog] = useState(false);
  const [showChatDialog, setShowChatDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [showChatHistoryDialog, setShowChatHistoryDialog] = useState(false);
  const [selectedUserChatHistory, setSelectedUserChatHistory] = useState([]);
  const [replyHistories, setReplyHistories] = useState({});
  const [selectedReplyIndex, setSelectedReplyIndex] = useState(null);


  const changeappointmentUser = (user) => {
    setchangeappointmenting(true);
    setCurrentUser({ id: user.id, name: user.name, package: user.package, doctor: user.doctor, preferred_date1: user.preferred_date1, preferred_date2: user.preferred_date2 });
    setShowchangeappointmentUserDialog(true);
  };

  const updateUser = (id, updatedUser) => {
    setchangeappointmenting(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setShowchangeappointmentUserDialog(false);
  };

  const handleStatusUpdate = (id, newStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  const TestshowChatDialog = (user) => {
    setShowChatDialog(true);
  };

  const closeChatDialog = () => {
    setShowChatDialog(false);
  };

  // const submitChat = () => {
  //   const titleInput = document.getElementById('titleInput');
  //   const messageInput = document.getElementById('messageInput');

  //   // Here, you can add your logic to handle the form submission
  //   console.log('Title:', titleInput.value);
  //   console.log('Message:', messageInput.value);

  //   // Clear the input values
  //   titleInput.value = '';
  //   messageInput.value = '';

  //   // Hide the form
  //   setShowChatDialog(false);
  // };

  // histoy chat
  // const [selectedUserChatHistory, setSelectedUserChatHistory] = useState([]);

  // const submitChat = () => {
  //   const titleInput = document.getElementById('titleInput');
  //   const messageInput = document.getElementById('messageInput');

  //   // Here, you can add your logic to handle the form submission
  //   console.log('Title:', titleInput.value);
  //   console.log('Message:', messageInput.value);

  //   // Clear the input values
  //   const newMessage = {
  //     title: titleInput.value,
  //     message: messageInput.value,
  //   };

  //   // Add the new message to the selected user's chat history
  //   setSelectedUserChatHistory((prevHistory) => [...prevHistory, newMessage]);

  //   // Hide the form
  //   setShowChatDialog(false);
  // };

  
  const handleDeleteMessage = (index) => {
    setSelectedUserChatHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory.splice(index, 1);
      return updatedHistory;
    });
  };


  const submitChat = () => {
    const titleInput = document.getElementById('titleInput');
    const messageInput = document.getElementById('messageInput');
    const imageInput = document.getElementById('imageInput');

    // const imageFile = imageInput.files[0];
    const imageFiles = Array.from(imageInput.files);

    const imageDataPromises = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    // Here, you can add your logic to handle the form submission
    // console.log('Title:', titleInput.value);
    // console.log('Message:', messageInput.value);
    // console.log('Image File:', imageInput.imageFile);

    // // Clear the input values
    // const newMessage = {
    //   title: titleInput.value,
    //   message: messageInput.value,
    //   imageFileNames: imageFiles.map((file) => file.name),
    // };
    Promise.all(imageDataPromises)
    .then((imageDataArray) => {
      const newMessage = {
        title: titleInput.value,
        message: messageInput.value,
        imageFileNames: imageFiles.map((file) => file.name),
        imageData: imageDataArray,
      };

    // Add the new message to the selected user's chat history
    setSelectedUserChatHistory((prevHistory) => [...prevHistory, newMessage]);

    // Hide the form
    setShowChatDialog(false);
  })
  .catch((error) => {
    console.error('Error converting image files:', error);
  });
};


  const [filteredStatus, setFilteredStatus] = useState("");

  const handleStatusFilter = (event) => {
    setFilteredStatus(event.target.value);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.filter((user) =>
    filteredStatus ? user.status === filteredStatus : true
  ).slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {showchangeappointmentUserDialog && (
        <div className="dialog-container-changeappointment">
          <div className="dialog-changeappointment">
            <div className="dialog-content-changeappointment">
              <div className="changeappointment-dialog-content">
                <button className="close-button-changeappointment" onClick={() => setShowchangeappointmentUserDialog(false)}>
                  X
                </button>
                <div className="dialog-card-changeappointment">
                  <h2>Change Appointment</h2>
                  <div className="dialog-form-changeappointment">
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        updateUser(currentUser.id, currentUser);
                      }}
                    >
                      <input
                        placeholder="Name"
                        type="text"
                        value={currentUser.name}
                        onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                      />
                      <input
                        placeholder="Package"
                        type="text"
                        value={currentUser.package}
                        onChange={(e) => setCurrentUser({ ...currentUser, package: e.target.value })}
                      />
                      <input
                        placeholder="Doctor"
                        type="text"
                        value={currentUser.doctor}
                        onChange={(e) => setCurrentUser({ ...currentUser, doctor: e.target.value })}
                      />
                      <input
                        placeholder="Pre_1"
                        type="text"
                        value={currentUser.preferred_date1}
                        onChange={(e) => setCurrentUser({ ...currentUser, preferred_date1: e.target.value })}
                      />
                      <input
                        placeholder="Pre_2"
                        type="text"
                        value={currentUser.preferred_date2}
                        onChange={(e) => setCurrentUser({ ...currentUser, preferred_date2: e.target.value })}
                      />
                      <button type="submit">Update User</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showChatDialog && (
        <div className="dialog-container-chat-decision">
          <div className="dialog-chat-decision">
            <div className="dialog-content-chat-decision">
              <div className="chat-decision-user-dialog-content">
                <button className="close-button-chat-decision" onClick={() => closeChatDialog(false)}>
                  X
                </button>

                <div className="dialog-card-chat-decision">
                  <h2 className='mt-4 mb-4'>Chat To Patient</h2>
                  <div className="dialog-form-chat-decision">
                    <input type="text" placeholder="Title" id="titleInput" />
                    <textarea placeholder="Message" id="messageInput"></textarea>
                    <input type="file" accept="image/*" id="imageInput" multiple />

                    <button onClick={submitChat}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{showChatHistoryDialog && (
  <div className="dialog-container-chat-decision fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="dialog-chat-decision rounded-lg shadow-lg overflow-hidden max-h-[80vh] max-w-md mx-auto">
      <div className="dialog-content-chat-decision flex flex-col p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="chat-decision-user-dialog-content">
            <button className="close-button-chat-decision" onClick={() => setShowChatHistoryDialog(false)}>
              X
            </button>
            <div className="dialog-card-chat-decision">
              <h2 className="mt-4 mb-4 text-xl font-bold">Chat History</h2>
            </div>
          </div>
          <div className="chat-history overflow-y-scroll" style={{ maxWidth: '600px', width: '100vh' }}>
          {selectedUserChatHistory.length === 0 ? (
                    <p>No chat history yet.</p>
                  ) : (
          <div className="space-y-4">
          {selectedUserChatHistory.slice(0, 20).map((message, index) => (
          <div key={index} className="bg-white overflow-hidden rounded-lg shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 flex items-center justify-between">
              <h4 className="text-lg font-bold">Title: {message.title}</h4>
              <div className="p-4">
                <p className="text-gray-700">Message: {message.message}</p>
                {/* {replyHistories[index] && <p className="text-gray-700 mt-2">Reply: {replyHistories[index]}</p>} */}
              </div>
              <div className="button-delete-reply">
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(index)}
              >
                Delete
              </button>
              {!replyHistories[index] && (
                <button
                  className="reply-button"
                  onClick={() => setSelectedReplyIndex(index)}
                  // onClick={() => handleReplySelection(replyMessage)}
                >
                  Reply
                </button>
                
              )}

              </div>
            </div>
          </div>

        ))}
          </div>
        )}
        </div>
      </div>
    </div>
    </div>
    </div>
)}

{selectedReplyIndex !== null && (
                <div className="dialog-container-chat-decision fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="dialog-chat-decision rounded-lg shadow-lg overflow-hidden max-h-[80vh] max-w-md mx-auto">
                        <div className="dialog-content-chat-decision flex flex-col p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="chat-decision-user-dialog-content">
                                    <button className="close-button-chat-decision" onClick={() => setSelectedReplyIndex(null)}>
                                        X
                                    </button>
                                    <div className="dialog-card-chat-decision">
                                        <h2 className="mt-4 mb-4 text-xl font-bold">Reply Message</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history overflow-y-scroll" style={{ maxWidth: '600px', width: '100vh' }}>
                                {/* {selectedReplyMessage ? (
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 flex items-center justify-between">
                                        <p className="text-lg font-bold">Reply Message: {selectedReplyMessage.replyMessage}</p>
                                    </div>
                                ) : null} */}

                                {replyMessages.slice(0, 20).map((replyMessage) => (
                                    <div key={replyMessage.id} className="bg-white overflow-hidden rounded-lg shadow-lg">
                                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 flex items-center justify-between">
                                        <h4 className="text-lg font-bold">User: {replyMessage.userReply}</h4>
                                          <div className="p-4">
                                            <p className="text-lg font-bold">Reply Message: {replyMessage.replymsg}</p>
                                          </div>
                                          {selectedUserChatHistory[selectedReplyIndex].imageFileNames.length > 0 && (
                                          <div>
                                            <p className="text-gray-700 mt-2">Attached Images:</p>
                                            <ul>

                                            {/* call only file name */}
                                            {/* {selectedUserChatHistory[selectedReplyIndex].imageFileNames.length > 0 && (
                    <div>
                      <p className="text-gray-700 mt-2">Attached Images:</p>
                      <ul>
                        {selectedUserChatHistory[selectedReplyIndex].imageFileNames.map((fileName, index) => (
                          <li key={index}>
                            <a href="#" className="text-blue-500 hover:underline">
                              {fileName}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                  
                                              {selectedUserChatHistory[selectedReplyIndex].imageFileNames.map((fileName, index) => (
                                                <li key={index}>
                                                  
                                                    <a href="#"
                                                    className="text-blue-500 hover:underline"
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      const imageData = selectedUserChatHistory[selectedReplyIndex].imageData[index];
                                                      const newWindow = window.open();
                                                      newWindow.document.write(`<img src="${imageData}" alt="${fileName}" style="max-width: 100%; max-height: 100%;">`);
                                                    }}
                                                  >
                                                    {fileName}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

      <div className='d-flex ReschedulingWaitingBody-home'>
        <div className='ReschedulingWaitingBody-content  mt-3'>
          <div className="d-flex justify-content-between mt-3">
            <h2 className='mb-2'>Decision Of New Plan</h2>
            <div>
              <label htmlFor="status-filter">Filter by status:</label>
              <select id="status-filter" onChange={handleStatusFilter}>
                <option value="">All</option>
                <option value="Waiting for approval">Waiting for approval</option>
                <option value="Approved">Approved</option>
              </select>
            </div>
          </div>
          <table className="ReschedulingWaitingBody-table">
            <thead>
              <tr style={{ backgroundColor: '#9cd3fb' }}>
                <th>ID</th>
                <th>Name</th>
                <th>Package</th>
                <th>Doctor</th>
                <th>preferred_date1</th>
                <th>preferred_date2</th>
                <th>Status</th>
                <th>Change Status</th>
                <th>Change Appointment</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id} style={{ backgroundColor: user.id % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.package}</td>
                  <td>{user.doctor}</td>
                  <td>{user.preferred_date1}</td>
                  <td>{user.preferred_date2}</td>
                  <td>
                  <span
                  className={`status-badge-reschedule ${user.status === 'Waiting for approval' ? 'waiting' : 'approved'}`}
                  >
                  {user.status}
                  </span>
                  </td>
                  <td>
                    {/* {user.status === 'Waiting for approval' ? (
                      <button
                        className="action-button approved"
                        onClick={() => handleStatusUpdate(user.id, 'Approved')}
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        className="action-button waiting"
                        onClick={() => handleStatusUpdate(user.id, 'Waiting for approval')}
                      >
                        Waiting for Approval
                      </button>
                    )} */}
                    <button
                    className={`action-button-reschedule ${user.status === 'Waiting for approval' ? 'waiting' : 'approved'}`}
                    onClick={() => handleStatusUpdate(user.id, user.status === 'Waiting for approval' ? 'Approved' : 'Waiting for approval')}
                    >
                    {user.status === 'Waiting for approval' ? 'Approve' : 'Waiting for Approval'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => changeappointmentUser(user)}>changeappointment</button>
                  </td>
                  <td>
                    <button onClick={() => TestshowChatDialog(user)}>Chat</button>
                    <button onClick={() => setShowChatHistoryDialog(true)}>Chat History</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="pagination-btn"
            >
              <FaChevronLeft />
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className="pagination-btn"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReschedulingWaitingBody;