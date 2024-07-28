import React, { useState } from 'react';
import { users as initialUsers } from './DataTaxi';
import './ScheduleTaxi.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ScheduleTaxi() {
  const [users, setUsers] = useState(initialUsers);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, taxiDriver: '', vehicleType: '',licenseplate: '', flight: '', departureFrom: '' , departureTime: '' , arrivalLocation: '' , arrivalDate: '' , arrivalTime: '', pickupDate: '' , pickupTime: ''   });
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [showEditUserDialog, setShowEditUserDialog] = useState(false);
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
    setCurrentUser({ id: user.id, taxiDriver: user.taxiDriver, vehicleType: user.vehicleType, licenseplate: user.licenseplate,flight: user.flight,departureFrom: user.departureFrom,departureDate: user.departureDate,departureTime: user.departureTime,arrivalLocation: user.arrivalLocation,arrivalDate: user.arrivalDate,arrivalTime: user.arrivalTime,pickupDate: user.pickupDate,pickupTime: user.pickupTime});
    setShowEditUserDialog(true);
};

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setShowEditUserDialog(false);
};


const handleStatusUpdate = (id, newStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
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
    // <div className="admin-panel">
    <div>
        {showEditUserDialog && (
        <div className="dialog-container-edit-taxi">
            <div className="dialog-edit-taxi">
                <div className="dialog-content-edit-taxi">
                    <div className="edit-taxi-user-dialog-content">
                    <button className="close-button-edit-taxi" onClick={() => setShowEditUserDialog(false)}>
                        X
                    </button>
                    
                    <div className="dialog-card-edit-taxi">
                    <h2>Change Taxi Booking</h2>
                        <div className="dialog-form-edit-taxi">
                            <form
                                onSubmit={(event) => {
                                event.preventDefault();
                                updateUser(currentUser.id, currentUser);
                                }}
                            >
                                <input
                                placeholder="taxiDriver"
                                type="text"
                                value={currentUser.taxiDriver}
                                onChange={(e) => setCurrentUser({ ...currentUser, taxiDriver: e.target.value })}
                                />
                                <input
                                placeholder="vehicleType"
                                type="text"
                                value={currentUser.vehicleType}
                                onChange={(e) => setCurrentUser({ ...currentUser, vehicleType: e.target.value })}
                                />
                                <input
                                placeholder="licenseplate"
                                type="text"
                                value={currentUser.licenseplate}
                                onChange={(e) => setCurrentUser({ ...currentUser, licenseplate: e.target.value })}
                                />
                                                                <input
                                placeholder="patientName"
                                type="text"
                                value={currentUser.patientName}
                                onChange={(e) => setCurrentUser({ ...currentUser, patientName: e.target.value })}
                                />
                                <input
                                placeholder="numPassengers"
                                type="number"
                                value={currentUser.numPassengers}
                                onChange={(e) => setCurrentUser({ ...currentUser, numPassengers: e.target.value })}
                                />
                                {/* <input
                                placeholder="departureFrom"
                                type="text"
                                value={currentUser.departureFrom}
                                onChange={(e) => setCurrentUser({ ...currentUser, departureFrom: e.target.value })}
                                />
                                                                <input
                                placeholder="departureDate"
                                type="text"
                                value={currentUser.departureDate}
                                onChange={(e) => setCurrentUser({ ...currentUser, departureDate: e.target.value })}
                                />
                                <input
                                placeholder="departureTime"
                                type="text"
                                value={currentUser.departureTime}
                                onChange={(e) => setCurrentUser({ ...currentUser, departureTime: e.target.value })}
                                /> */}
                                <input
                                placeholder="arrivalLocation"
                                type="text"
                                value={currentUser.arrivalLocation}
                                onChange={(e) => setCurrentUser({ ...currentUser, arrivalLocation: e.target.value })}
                                />
                                                                {/* <input
                                placeholder="arrivalDate"
                                type="text"
                                value={currentUser.arrivalDate}
                                onChange={(e) => setCurrentUser({ ...currentUser, arrivalDate: e.target.value })}
                                />
                                <input
                                placeholder="arrivalTime"
                                type="text"
                                value={currentUser.arrivalTime}
                                onChange={(e) => setCurrentUser({ ...currentUser, arrivalTime: e.target.value })}
                                /> */}
                                <input
                                placeholder="pickupDate"
                                type="text"
                                value={currentUser.pickupDate}
                                onChange={(e) => setCurrentUser({ ...currentUser, pickupDate: e.target.value })}
                                />
                                <input
                                placeholder="pickupTime"
                                type="text"
                                value={currentUser.pickupTime}
                                onChange={(e) => setCurrentUser({ ...currentUser, pickupTime: e.target.value })}
                                />
                               

                                {/* <div className="dialog-actions"> */}
                                <button type="submit">Update User</button>
                                {/* </div> */}
                            </form>
                        </div>    
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )}

        <div className='d-flex taxipanel-home'>
            {/* <div className='d-flex taxipanel-sidebar flex-column flex-shrink-0  bg-dark'>
                <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
                    <li className='taxipanel-nav-item'>
                        <a href="/admin" className='nav-link text-white active'>
                            <FaList /> <span className='ms-2'>List of Taxi</span>
                        </a>
                    </li>
                </ul> */}

            {/* </div> */}
            <div className='taxipanel-content  mt-3'>
            <div className='taxi-table'>
            <div className="d-flex justify-content-between mt-3">
                <h2>List of Taxi</h2>
                <button className="add-taxi-btn" onClick={() => setShowAddUserDialog(true)}>
                    + Add Taxi
                </button>
                <div>
                <label htmlFor="status-filter">Filter by status:</label>
                <select id="status-filter" onChange={handleStatusFilter}>
                    <option value="">All</option>
                    <option value="Waiting for approval">Waiting for approval</option>
                    <option value="Approved">Approved</option>
                </select>
                </div>
            </div>
            <table>
                <thead>
                <tr style={{ backgroundColor: '#9cd3fb' }}>
                    <th scope="col">ID</th>
                    <th scope="col">Taxi Driver</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">License Plate</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Num Passengers</th>
                    <th scope="col">Flight</th>
                    {/* <th scope="col">Departure From</th>
                    <th scope="col">Departure Date</th>
                    <th scope="col">Departure Time</th> */}
                    <th scope="col">Arrival Location</th>
                    {/* <th scope="col">Arrival Date</th>
                    <th scope="col">Arrival Time</th> */}
                    <th scope="col">Pickup Date</th>
                    <th scope="col">Pickup Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action1</th>
                    <th scope="col">Action2</th>
                </tr>
                </thead>
                <tbody>
                {currentUsers.map((user) => (
                    <tr key={user.id} style={{ backgroundColor: user.id % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                    <td>{user.id}</td>
                    <td>{user.taxiDriver}</td>
                    <td>{user.vehicleType}</td>
                    <td>{user.licenseplate}</td>
                    <td>{user.patientName}</td>
                    <td>{user.numPassengers}</td>
                    <td>{user.flight}</td>
                    {/* <td>{user.departureFrom}</td>
                    <td>{user.departureDate}</td>
                    <td>{user.departureTime}</td> */}
                    <td>{user.arrivalLocation}</td>
                    {/* <td>{user.arrivalDate}</td>
                    <td>{user.arrivalTime}</td> */}
                    <td>{user.pickupDate}</td>
                    <td>{user.pickupTime}</td>
                    <td>
                    <span
                        className={`status-badge-taxi ${
                            user.status === 'Waiting for approval' ? 'waiting' : 'approved'
                        }`}
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
                        className={`action-button-taxi ${user.status === 'Waiting for approval' ? 'waiting' : 'approved'}`}
                        onClick={() => handleStatusUpdate(user.id, user.status === 'Waiting for approval' ? 'Approved' : 'Waiting for approval')}
                        >
                          {user.status === 'Waiting for approval' ? 'Approve' : 'Waiting for Approval'}
                        </button>
                    </td>


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


      {showAddUserDialog && (
        <div className="dialog-container-addtaxi">
            <div className="dialog-addtaxi">
                <div className="dialog-content-addtaxi">
                    <div className="add-taxi-dialog-content">
                    <button className="close-button-addtaxi" onClick={() => setShowAddUserDialog(false)}>
                        X
                    </button>

                    <div className="dialog-card-addtaxi">
                        <h2>Add Taxi</h2>
                        
                        <div className="dialog-form-addtaxi">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                addUser({
                                taxiDriver: event.target.taxiDriver.value,
                                vehicleType: event.target.vehicleType.value,
                                licenseplate: event.target.licenseplate.value,
                                patientName: event.target.patientName.value,
                                numPassengers: event.target.numPassengers.value,
                                flight: event.target.flight.value,
                                arrivalLocation: event.target.arrivalLocation.value,
                                // arrivalDate: event.target.arrivalDate.value,
                                // arrivalTime: event.target.arrivalTime.value,
                                pickupDate: event.target.pickupDate.value,
                                pickupTime: event.target.pickupTime.value,
                                });
                                event.target.taxiDriver.value = '';
                                event.target.vehicleType.value = '';
                                event.target.licenseplate.value = '';
                                event.target.patientName.value = '';
                                event.target.numPassengers.value = '';
                                event.target.flight.value = '';
                                event.target.arrivalLocation.value = '';
                                // event.target.arrivalDate.value = '';
                                // event.target.arrivalTime.value = '';
                                event.target.pickupDate.value = '';
                                event.target.pickupTime.value = '';
                            }}
                            >
                            <input placeholder="taxiDriver" type="text" name="taxiDriver" />
                            <input placeholder="vehicleType" type="text" name="vehicleType" />
                            <input placeholder="licenseplate" type="text" name="licenseplate" />
                            <input placeholder="patientName" type="text" name="patientName" />
                            <input placeholder="numPassengers" type="number" name="numPassengers" />
                            <input placeholder="flight" type="text" name="flight" />
                            <input placeholder="arrivalLocation" type="text" name="arrivalLocation" />
                            {/* <input placeholder="arrivalDate" type="text" name="arrivalDate" />
                            <input placeholder="arrivalTime" type="text" name="arrivalTime" /> */}
                            <input placeholder="pickupDate" type="text" name="pickupDate" />
                            <input placeholder="pickupTime" type="text" name="pickupTime" />
                            {/* <div className="dialog-actions"> */}
                            <button type="submit">Add User</button>
                            {/* </div> */}
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

export default ScheduleTaxi;