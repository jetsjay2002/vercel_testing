import React, { useState } from 'react';
import { users as initialUsers } from './DataHotel';
import './ScheduleHotel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ScheduleHotel() {
  const [users, setUsers] = useState(initialUsers);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, hotelname: '', hotellocation: '',numofroom: '', roomtype: '', nightstay: '' , checkindate: '' , checkintime: '' });
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
    setCurrentUser({ id: user.id, hotelname: user.hotelname, hotellocation: user.hotellocation, numofroom: user.numofroom
        ,roomtype: user.roomtype,nightstay: user.nightstay,checkindate: user.checkindate,checkintime: user.checkintime
        ,patientname: user.patientname,checkoutdate: user.checkoutdate,checkouttime: user.checkouttime});
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

    <div>
        {showEditUserDialog && (
        <div className="dialog-container-edit-hotel">
            <div className="dialog-edit-hotel">
                <div className="dialog-content-edit-hotel">
                    <div className="edit-hotel-dialog-content">
                    <button className="close-button-edit-hotel" onClick={() => setShowEditUserDialog(false)}>
                        X
                    </button>
                    
                    <div className="dialog-card-edit-hotel">
                    <h2>Change Hotel Booking</h2>
                        <div className="dialog-form-edit-hotel">
                            <form
                                onSubmit={(event) => {
                                event.preventDefault();
                                updateUser(currentUser.id, currentUser);
                                }}
                            >
                                <input
                                placeholder="hotelname"
                                type="text"
                                value={currentUser.hotelname}
                                onChange={(e) => setCurrentUser({ ...currentUser, hotelname: e.target.value })}
                                />
                                <input
                                placeholder="hotellocation"
                                type="text"
                                value={currentUser.hotellocation}
                                onChange={(e) => setCurrentUser({ ...currentUser, hotellocation: e.target.value })}
                                />
                                <input
                                placeholder="numofroom"
                                type="number"
                                value={currentUser.numofroom}
                                onChange={(e) => setCurrentUser({ ...currentUser, numofroom: e.target.value })}
                                />
                                                                <input
                                placeholder="roomtype"
                                type="text"
                                value={currentUser.roomtype}
                                onChange={(e) => setCurrentUser({ ...currentUser, roomtype: e.target.value })}
                                />
                                <input
                                placeholder="nightstay"
                                type="number"
                                value={currentUser.nightstay}
                                onChange={(e) => setCurrentUser({ ...currentUser, nightstay: e.target.value })}
                                />
                                <input
                                placeholder="checkindate"
                                type="text"
                                value={currentUser.checkindate}
                                onChange={(e) => setCurrentUser({ ...currentUser, checkindate: e.target.value })}
                                />
                                <input
                                placeholder="checkintime"
                                type="text"
                                value={currentUser.checkintime}
                                onChange={(e) => setCurrentUser({ ...currentUser, checkintime: e.target.value })}
                                />
                                <input
                                placeholder="patientname"
                                type="text"
                                value={currentUser.patientname}
                                onChange={(e) => setCurrentUser({ ...currentUser, pickupTime: e.target.value })}
                                />
                                                                <input
                                placeholder="checkoutdate"
                                type="text"
                                value={currentUser.checkoutdate}
                                onChange={(e) => setCurrentUser({ ...currentUser, checkoutdate: e.target.value })}
                                />
                                <input
                                placeholder="checkouttime"
                                type="text"
                                value={currentUser.patientname}
                                onChange={(e) => setCurrentUser({ ...currentUser, checkouttime: e.target.value })}
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

        <div className='d-flex hotelpanel-home'>
            <div className='hotelpanel-content  mt-3'>
            <div className='hotel-table'>
            <div className="d-flex justify-content-between mt-3">
                <h2>List of Hotel</h2>
                <button className="add-hotel-btn" onClick={() => setShowAddUserDialog(true)}>
                    + Add Hotel
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
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Hotel Location</th>
                    <th scope="col">Num of room</th>
                    <th scope="col">Room Type</th>
                    <th scope="col">Night Stay</th>
                    <th scope="col">Check-in date</th>
                    <th scope="col">Check-in time</th>
                    <th scope="col">Patient name</th>
                    <th scope="col">Check-out date</th>
                    <th scope="col">Check-out time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action1</th>
                    <th scope="col">Action2</th>
                </tr>
                </thead>
                <tbody>
                {currentUsers.map((user) => (
                    <tr key={user.id} style={{ backgroundColor: user.id % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                    <td>{user.id}</td>
                    <td>{user.hotelname}</td>
                    <td>{user.hotellocation}</td>
                    <td>{user.numofroom}</td>
                    <td>{user.roomtype}</td>
                    <td>{user.nightstay}</td>
                    <td>{user.checkindate}</td>
                    {/* <td>{user.departureFrom}</td>
                    <td>{user.departureDate}</td>
                    <td>{user.departureTime}</td> */}
                    <td>{user.checkintime}</td>
                    {/* <td>{user.arrivalDate}</td>
                    <td>{user.arrivalTime}</td> */}
                    <td>{user.patientname}</td>
                    <td>{user.checkoutdate}</td>
                    <td>{user.checkouttime}</td>
                    <td>
                    <span
                        className={`status-badge-hotel ${
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
                         className={`action-button-hotel ${user.status === 'Waiting for approval' ? 'waiting' : 'approved'}`}
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
        <div className="dialog-container-addhotel">
            <div className="dialog-addhotel">
                <div className="dialog-content-addhotel">
                    <div className="add-hotel-dialog-content">
                    <button className="close-button-addhotel" onClick={() => setShowAddUserDialog(false)}>
                        X
                    </button>

                    <div className="dialog-card-addhotel">
                        <h2>Add hotel</h2>
                        
                        <div className="dialog-form-addhotel">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                addUser({
                                hotelDriver: event.target.hotelDriver.value,
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
                                event.target.hotelDriver.value = '';
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
                            <input placeholder="hotelDriver" type="text" name="hotelDriver" />
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

export default ScheduleHotel;