// import React, { useState } from 'react';
// import { users as initialUsers } from './data';
// import './AdminPanel.css';
// import { FaList } from 'react-icons/fa'

// function AdminPanel() {
//   const [users, setUsers] = useState(initialUsers);
//   const [editing, setEditing] = useState(false);
//   const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '',phone: '', role: '' });
//   const [showAddUserDialog, setShowAddUserDialog] = useState(false);
//   const [showEditUserDialog, setShowEditUserDialog] = useState(false);
//   const addUser = (user) => {
//     user.id = users.length + 1;
//     setUsers([...users, user]);
//     setShowAddUserDialog(false);
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const editUser = (user) => {
//     setEditing(true);
//     setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone,role: user.role });
//     setShowEditUserDialog(true);
// };

//   const updateUser = (id, updatedUser) => {
//     setEditing(false);
//     setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
//     setShowEditUserDialog(false);
// };

//   return (
//     // <div className="admin-panel">
//     <div>
//       {/* <h2>Admin Panel</h2> */}
//       {/* {editing ? (
//         <div className="user-management">
//           <h2>User Management</h2>
//           <div className="new-user">
//             <h2>Edit user</h2>
//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 updateUser(currentUser.id, currentUser);
//               }}
//             >
//               <input
//                 placeholder="Name"
//                 type="text"
//                 value={currentUser.name}
//                 onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
//               />
//               <input
//                 placeholder="Email"
//                 type="email"
//                 value={currentUser.email}
//                 onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
//               />
//               <input
//                 placeholder="Phone"
//                 type="text"
//                 value={currentUser.phone}
//                 onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
//               />
//               <select
//                 value={currentUser.role}
//                 onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//                 <option value="admin">Co-Ordinator</option>
//               </select>
//               <button>Update user</button>
//             </form>
//           </div>
//         </div> */}
//         {showEditUserDialog && (
//         <div className="dialog-container-edit">
//             <div className="dialog-edit">
//                 <div className="dialog-content-edit">
//                     <div className="edit-user-dialog-content">
//                     <button className="close-button-admin-edit" onClick={() => setShowEditUserDialog(false)}>
//                         X
//                     </button>
                    
//                     <div className="dialog-card-edit">
//                     <h2>Edit User</h2>
//                         <div className="dialog-form-edit">
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
//                                 placeholder="Email"
//                                 type="email"
//                                 value={currentUser.email}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
//                                 />
//                                 <input
//                                 placeholder="Phone"
//                                 type="text"
//                                 value={currentUser.phone}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
//                                 />
//                                 <select
//                                 value={currentUser.role}
//                                 onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
//                                 >
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                                 <option value="Co-Ordinator">Co-Ordinator</option>
//                                 </select>

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

//         <div className='d-flex adminpanel-home'>
//             <div className='d-flex adminpanel-sidebar flex-column flex-shrink-0  bg-dark'>
//                 <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
//                     <li className='adminpanel-nav-item'>
//                         <a href="/admin" className='nav-link text-white active'>
//                             <FaList /> <span className='ms-2'>List of users</span>
//                         </a>
//                     </li>
//                     {/* <li className='nav-item'>
//                         <a href="" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of agent</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of patient</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="" className='nav-link text-white'>
//                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Chat</span></i>
//                         </a>
//                     </li> */}
//                 </ul>

//             </div>
//             {/* <div className="user-table"> */}
//             <div className='adminpanel-content  mt-3'>
//             <div className='user-table'>
//             <div className="d-flex justify-content-between mt-3">
//                 <h2>List of Users</h2>
//                 <button className="add-user-btn" onClick={() => setShowAddUserDialog(true)}>
//                     + Add User
//                 </button>
//             </div>
//             <table>
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Phone</th>
//                     <th scope="col">Role</th>
//                     <th scope="col">Actions</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {users.map((user) => (
//                     <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.role}</td>
//                     <td>
//                         <button onClick={() => editUser(user)}>Edit</button>
//                         <button onClick={() => deleteUser(user.id)}>Delete</button>
//                     </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//             </div>
//             </div>
//         </div>


//       {showAddUserDialog && (
//         <div className="dialog-container-adding">
//             <div className="dialog-adding">
//                 <div className="dialog-content-adding">
//                     <div className="add-user-dialog-content">
//                     <button className="close-button-admin-adding" onClick={() => setShowAddUserDialog(false)}>
//                         X
//                     </button>

//                     <div className="dialog-card-adding">
//                         <h2>Add User</h2>
                        
//                         <div className="dialog-form-adding">
//                         <form
//                             onSubmit={(event) => {
//                                 event.preventDefault();
//                                 addUser({
//                                 name: event.target.name.value,
//                                 email: event.target.email.value,
//                                 phone: event.target.phone.value,
//                                 role: event.target.role.value,
//                                 });
//                                 event.target.name.value = '';
//                                 event.target.email.value = '';
//                                 event.target.phone.value = '';
//                                 event.target.role.value = '';
//                             }}
//                             >
//                             <input placeholder="Name" type="text" name="name" />
//                             <input placeholder="Email" type="email" name="email" />
//                             <input placeholder="Phone" type="text" name="phone" />
//                             <select name="role">
//                                 <option value="User">User</option>
//                                 <option value="Admin">Admin</option>
//                                 <option value="Co-Ordinator">Co-Ordinator</option>
//                             </select>
//                             {/* <div className="dialog-actions"> */}
//                             <button type="submit">Add User</button>
//                             {/* </div> */}
//                         </form>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminPanel;

import React, { useState } from 'react';
import { users as initialUsers } from './data';
import './AdminPanel.css';
import { FaList, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function AdminPanel() {
  const [users, setUsers] = useState(initialUsers);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', phone: '', role: '' });
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [showEditUserDialog, setShowEditUserDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setShowAddUserDialog(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone, role: user.role });
    setShowEditUserDialog(true);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setShowEditUserDialog(false);
  };

  const filteredUsers = selectedRole === 'all' ? users : users.filter((user) => user.role === selectedRole);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="d-flex adminpanel-home">
      <div className="d-flex adminpanel-sidebar flex-column flex-shrink-0" style={{backgroundColor: '#31502E'}}>
        <ul className="nav nav-pills flex-column mb-auto px-0 mt-3">
          <li className="adminpanel-nav-item">
            <a href="/admin" className="nav-link text-white" style={{ textAlign: 'left' }}>
              <FaList /> <span className="ms-2">List of users</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="adminpanel-content mt-3">
        <div className="user-table">
          <div className="d-flex justify-content-between mt-3">
            <h2>List of Users</h2>
            <div>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="form-control me-2"
              >
                <option value="all">All</option>
                <option value="Agent">Agent</option>
                <option value="Patient">Patient</option>
                <option value="Admin">Admin</option>
                <option value="Co-Ordinator">Co-Ordinator</option>
              </select>
              <button className="add-user-btn" onClick={() => setShowAddUserDialog(true)}>
                + Add User
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => editUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
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
            <span>
              Page {currentPage} of {totalPages}
            </span>
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

      {showEditUserDialog && (
        <div className="dialog-container-edit">
          <div className="dialog-edit">
            <div className="dialog-content-edit">
              <div className="edit-user-dialog-content">
                <button className="close-button-admin-edit" onClick={() => setShowEditUserDialog(false)}>
                  X
                </button>

                <div className="dialog-card-edit">
                  <h2>Edit User</h2>
                  <div className="dialog-form-edit">
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
                        placeholder="Email"
                        type="email"
                        value={currentUser.email}
                        onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                      />
                      <input
                        placeholder="Phone"
                        type="text"
                        value={currentUser.phone}
                        onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
                      />
                      <select
                        value={currentUser.role}
                        onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                      >
                        <option value="Patient">Patient</option>
                        <option value="Agent">Agent</option>
                        <option value="Admin">Admin</option>
                        <option value="Co-Ordinator">Co-Ordinator</option>
                      </select>
                      <button type="submit">Update User</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddUserDialog && (
        <div className="dialog-container-adding">
          <div className="dialog-adding">
            <div className="dialog-content-adding">
              <div className="add-user-dialog-content">
                <button className="close-button-admin-adding" onClick={() => setShowAddUserDialog(false)}>
                  X
                </button>

                <div className="dialog-card-adding">
                  <h2>Add User</h2>

                  <div className="dialog-form-adding">
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        addUser({
                          name: event.target.name.value,
                          email: event.target.email.value,
                          phone: event.target.phone.value,
                          role: event.target.role.value,
                        });
                        event.target.name.value = '';
                        event.target.email.value = '';
                        event.target.phone.value = '';
                        event.target.role.value = '';
                      }}
                    >
                      <input placeholder="Name" type="text" name="name" />
                      <input placeholder="Email" type="email" name="email" />
                      <input placeholder="Phone" type="text" name="phone" />
                      <select name="role">
                      <option value="Patient">Patient</option>
                        <option value="Agent">Agent</option>
                        <option value="Admin">Admin</option>
                        <option value="Co-Ordinator">Co-Ordinator</option>
                      </select>
                      <button type="submit">Add User</button>
                    </form>
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

export default AdminPanel;