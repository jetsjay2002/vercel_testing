// import React from 'react'
// import "./PatientListBody.css"
// import {FaList} from 'react-icons/fa'
// import ReschedulButton from '../../../Rescheduling/ReschedulButton/ReschedulButton';

// function PatientListBody() {

//     const patients = [
//         { id: '00001', name: 'Christine Brooks', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Waiting for confirmation' },
//         { id: '00002', name: 'James Smith', package: 'Dental Care', flight: 'Confirmed', statusPatient: 'Travelled', statusHotel: 'Confirmed' },
//         { id: '00003', name: 'Patricia Johnson', package: 'Health Checkup', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Waiting for confirmation' },
//         // Add more patients here
//         { id: '00004', name: 'Robert Williams', package: 'Cosmetic Surgery', flight: 'Confirmed', statusPatient: 'Confirmed', statusHotel: 'Confirmed' },
//         { id: '00005', name: 'Linda Brown', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Confirmed', statusHotel: 'Waiting for confirmation' },
//         { id: '00006', name: 'Michael Davis', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Cancelled' },
//         { id: '00007', name: 'Elizabeth Miller', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Travelled', statusHotel: 'Confirmed' },
//         { id: '00008', name: 'William Wilson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Pre-journey', statusHotel: 'Waiting for confirmation' },
//         { id: '00009', name: 'David Moore', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Cancelled' },
//         { id: '00010', name: 'Jennifer Taylor', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Travelled', statusHotel: 'Confirmed' },
//         { id: '00011', name: 'Charles Anderson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Confirmed', statusHotel: 'Waiting for confirmation' },
//         { id: '00012', name: 'Barbara Thomas', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Cancelled' },
//         { id: '00013', name: 'Susan Jackson', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Travelled', statusHotel: 'Confirmed' },
//         { id: '00014', name: 'Joseph White', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Pre-journey', statusHotel: 'Waiting for confirmation' },
//         { id: '00015', name: 'Margaret Harris', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-journey', statusHotel: 'Cancelled' },
//       ];

//   return (
//     <div className='d-flex patinetlistbody-home'>
//         <div className='d-flex patinetlistbody-sidebar flex-column flex-shrink-0  bg-dark'>
//             <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
//                 <li className='patinetlistbody-nav-item'>                    
//                     <a href="" className='nav-link text-white active'>
//                     <FaList /> <span className='ms-2'>List of patients</span>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                     <i class="fa-regular fa-file"> <span className='ms-2'>Report of agent</span></i>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                     <i class="fa-regular fa-file"> <span className='ms-2'>Report of patient</span></i>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                         <i class='fa-regular fa-comment-dots'><span className='ms-2'>Chat</span></i> 
//                     </a>
//                 </li>
//             </ul>

//         </div>
//         <div className='patinetlistbody-content  mt-3'>
//             {/* <div className='row'>
//                 <div className='patinetlistbody-col-md-3 text-white col bg-success d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Cars</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='patinetlistbody-col-md-3 text-white col bg-danger d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Driver</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='patinetlistbody-col-md-3 text-white col bg-warning d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Expense</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='patinetlistbody-col-md-3 text-white col bg-primary d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Report</p>
//                     <FaCartArrowDown />
//                 </div>
//             </div> */}

//             <div className="d-flex justify-content-between mt-3">
//                 <h2 className='mb-2'>Patient List</h2>
//                 {/* <button className="btn btn-success">+Add</button> */}
//             </div>
//             <table class="patient-list-table">
//                 <thead>
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">NAME</th>
//                         <th scope="col">Package</th>
//                         <th scope="col">Flight confirmation</th>
//                         <th scope="col">Reschedule</th>
//                         <th scope="col">Status of patient</th>
//                         <th scope="col">Status of patient</th>
//                         <th scope="col">Status of hotel</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {patients.map((patient, index) => (
//                 <tr key={index}>
//                     <td>{patient.id}</td>
//                     <td>{patient.name}</td>
//                     <td>{patient.package}</td>
//                     <td>{patient.flight}</td>
//                     <td>
//                         {/* <button className="reschedule-btn">Click here</button> */}
//                         <ReschedulButton />
//                     </td>
//                     <td className="pre-journey">{patient.statusPatient}</td>
//                     <td className="confirmed">{patient.statusPatient === 'Travelled' ? 'Travelled' : 'Not Travelled'}</td>
//                     <td className="waiting-for-confirmation">{patient.statusHotel}</td>
//                 </tr>
//                 ))}
//                 </tbody>
//             </table>

//         </div>
//     </div>
//   )
// }

// export default PatientListBody
import RescheduleButton from '../../../Rescheduling/ReschedulButton/RescheduleButton'
import React, { useState } from 'react'
import "./PatientListBody.css"
import { FaList, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function PatientListBody() {
  // const [selectedFlightStatus, setSelectedFlightStatus] = useState('All');
  const [selectedPatientStatus, setSelectedPatientStatus] = useState('All');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // const navigate = useNavigate(); // Use useNavigate hook for navigation

  // Handle the submit action
// const handleReschedule = (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior
//   navigate("/reschedulewaiting");
// };

// const handleTaxi= (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior
//   navigate("/scheduletaxi");
// };

// const handleHotel= (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior
//   navigate("/schedulehotel");
// };

const patients = [
  { id: '00001', name: 'Christine Brooks', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Waiting for Approval', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00002', name: 'James Smith', package: 'Dental Care', flight: 'Arrival', statusPatient: 'Approval', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00003', name: 'Patricia Johnson', package: 'Health Checkup', flight: 'Cancelled', statusPatient: 'Flight Cancel', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00004', name: 'Robert Williams', package: 'Cosmetic Surgery', flight: 'Arrival', statusPatient: 'Flight Delay', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00005', name: 'Linda Brown', package: 'Dental Care', flight: 'Delayed', statusPatient: 'On Board', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00006', name: 'Michael Davis', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Arrival', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  { id: '00007', name: 'Elizabeth Miller', package: 'Health Checkup', flight: 'Arrival', statusPatient: 'Operation', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00008', name: 'William Wilson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Recuperate', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00009', name: 'David Moore', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Departure', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  { id: '00010', name: 'Jennifer Taylor', package: 'Health Checkup', flight: 'Arrival', statusPatient: 'Arrival', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00011', name: 'Charles Anderson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Arrival', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00012', name: 'Barbara Thomas', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Waiting for Approval', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  { id: '00013', name: 'Susan Jackson', package: 'Health Checkup', flight: 'Arrival', statusPatient: 'Approval', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00014', name: 'Joseph White', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Approval', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00015', name: 'Margaret Harris', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Flight Delay', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  { id: '00016', name: 'Jennifer Taylor', package: 'Health Checkup', flight: 'Arrival', statusPatient: 'Operation', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00017', name: 'Charles Anderson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Approval', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00018', name: 'Barbara Thomas', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Approval', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  { id: '00019', name: 'Susan Jackson', package: 'Health Checkup', flight: 'Arrival', statusPatient: 'Operation', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  { id: '00020', name: 'Joseph White', package: 'Dental Care', flight: 'Delayed', statusPatient: 'Flight Cancel', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  { id: '00021', name: 'Margaret Harris', package: 'Cosmetic Surgery', flight: 'Arrival', statusPatient: 'Departure', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
];

  // const patients = [
  //   { id: '00001', name: 'Christine Brooks', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00002', name: 'James Smith', package: 'Dental Care', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  //   { id: '00003', name: 'Patricia Johnson', package: 'Health Checkup', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00004', name: 'Robert Williams', package: 'Cosmetic Surgery', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  //   { id: '00005', name: 'Linda Brown', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00006', name: 'Michael Davis', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00007', name: 'Elizabeth Miller', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  //   { id: '00008', name: 'William Wilson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00009', name: 'David Moore', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00010', name: 'Jennifer Taylor', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  //   { id: '00011', name: 'Charles Anderson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00012', name: 'Barbara Thomas', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00013', name: 'Susan Jackson', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
  //   { id: '00014', name: 'Joseph White', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
  //   { id: '00015', name: 'Margaret Harris', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
  // ];
  // const handleFlightStatusChange = (e) => {
  //   setSelectedFlightStatus(e.target.value);
  //   setCurrentPage(1); // Reset the current page when the flight status is changed
  // };

  const handlePatientStatusChange = (e) => {
    setSelectedPatientStatus(e.target.value);
    setCurrentPage(1); // Reset the current page when the patient status is changed
  };

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };


  // const filteredPatients = patients.filter(
  //   (patient) =>
  //     selectedFlightStatus === 'All' || patient.flight === selectedFlightStatus
  // );
  const filteredPatients = patients.filter(
    (patient) =>
      selectedPatientStatus === 'All' || patient.statusPatient === selectedPatientStatus
  );

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

  const getCurrentTable = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPatients.slice(startIndex, endIndex);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

  // const getCurrentTable = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return filteredPatients.slice(startIndex, endIndex);
  // };

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className='d-flex patinetlistbody-home'>
      <div className='patinetlistbody-content  mt-3'>
      <div className="justify-content-between mt-3">
        {/* <div className="d-flex justify-content-between mt-3"> */}
          <h2 className='mb-2'>Patient List</h2>
          <div>
            {/* <label htmlFor="flightStatusFilter">Filter by Flight Status:</label>
            <select
              id="flightStatusFilter"
              value={selectedFlightStatus}
              onChange={handleFlightStatusChange}
            >
              <option value="All">All</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Delayed">Delayed</option>
            </select> */}
            <label htmlFor="patientStatusFilter">Filter by Patient Status:</label>
            <select
              id="patientStatusFilter"
              value={selectedPatientStatus}
              onChange={handlePatientStatusChange}
            >
              <option value="All">All</option>
              <option value="Waiting for Approval">Waiting for Approval</option>
              <option value="Approval">Approval</option>
              <option value="Flight Cancel">Flight Cancel</option>
              <option value="Flight Delay">Flight Delay</option>
              <option value="On Board">On Board</option>
              <option value="Arrival">Arrival</option>
              <option value="Operation">Operation</option>
              <option value="Recuperate">Recuperate</option>
              <option value="Departure">Departure</option>
            </select>
          </div>
        </div>
        <table className="patient-list-table">
          <thead>
            <tr style={{ backgroundColor: '#9cd3fb' }}>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">Package</th>
              <th scope="col">Flight confirmation</th>
              <th scope="col">Reschedule</th>
              <th scope="col">Status of patient</th>
              <th scope="col">Status of taxi</th>
              <th scope="col">Status of hotel</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentTable().map((patient, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.package}</td>
                <td>{patient.flight}</td>
                <td>
                  <RescheduleButton />
                </td>
                <td
                  className={`${
                    patient.statusPatient === 'Waiting for Approval'
                      ? 'text-danger'
                      : patient.statusPatient === 'Approval'
                      ? 'text-success'
                      : patient.statusPatient === 'Flight Cancel'
                      ? 'text-danger'
                      : patient.statusPatient === 'Flight Delay'
                      ? 'text-warning'
                      : patient.statusPatient === 'On Board'
                      ? 'text-primary'
                      : patient.statusPatient === 'Arrival'
                      ? 'text-success'
                      : patient.statusPatient === 'Recuperate'
                      ? 'text-info'
                      : patient.statusPatient === 'Departure'
                      ? 'text-secondary'
                      : patient.statusPatient === 'Operation'
                      ? 'text-warning'
                      : 'text-muted'
                  }`}
                >

                  {patient.statusPatient}
                </td>
                <td
                  className={`${
                    patient.statusTaxi === 'Waiting for confirmation'
                      ? 'text-danger'
                      : 'text-success'
                  }`}
                >
                  {patient.statusTaxi}
                </td>
                <td
                  className={`${
                    patient.statusHotel === 'Waiting for confirmation'
                      ? 'text-danger'
                      : 'text-success'
                  }`}
                >
                  {patient.statusHotel}
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
  );
}

export default PatientListBody;
 
//////ข้างบนเสร็จแล้ว
// import React ,{ useState } from 'react'
// import "./PatientListBody.css"
// import { FaList } from 'react-icons/fa'
// import RescheduleButton from '../../../Rescheduling/ReschedulButton/RescheduleButton'
// // import NavbarBody from '../NavBarPatientList/NavBarBody';


// function PatientListBody() {

  
//     const patients = [
//         { id: '00001', name: 'Christine Brooks', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00002', name: 'James Smith', package: 'Dental Care', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
//         { id: '00003', name: 'Patricia Johnson', package: 'Health Checkup', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00004', name: 'Robert Williams', package: 'Cosmetic Surgery', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
//         { id: '00005', name: 'Linda Brown', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00006', name: 'Michael Davis', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
//         { id: '00007', name: 'Elizabeth Miller', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
//         { id: '00008', name: 'William Wilson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00009', name: 'David Moore', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
//         { id: '00010', name: 'Jennifer Taylor', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
//         { id: '00011', name: 'Charles Anderson', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00012', name: 'Barbara Thomas', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
//         { id: '00013', name: 'Susan Jackson', package: 'Health Checkup', flight: 'Confirmed', statusPatient: 'Complete', statusHotel: 'Confirmed', statusTaxi: 'Confirmed' },
//         { id: '00014', name: 'Joseph White', package: 'Dental Care', flight: 'Delayed', statusPatient: 'During Stay', statusHotel: 'Waiting for confirmation', statusTaxi: 'Waiting for confirmation' },
//         { id: '00015', name: 'Margaret Harris', package: 'Cosmetic Surgery', flight: 'Cancelled', statusPatient: 'Pre-Journey', statusHotel: 'Cancelled', statusTaxi: 'Waiting for confirmation' },
//     ];
    
//     // const [activeTab, setActiveTab] = useState('List of patients');

//     // const handleTabClick = (tab) => {
//     //   setActiveTab(tab);
//     // };

//     return (
//         <div className='d-flex patinetlistbody-home'>
//             {/* <NavbarBody /> */}
//             {/* <div className='d-flex patinetlistbody-sidebar flex-column flex-shrink-0  bg-dark'>
//                 <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
//                     <li className='patinetlistbody-nav-item'>
//                         <a href="" className='nav-link text-white active'>
//                             <FaList /> <span className='ms-2'>List of patients</span>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of agent</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/appointmentwaiting" className='nav-link text-white'>
//                             <i className="fa-regular fa-file"> <span className='ms-2'>Report of patient</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/appointmentwaiting" className='nav-link text-white'>
//                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Status of Appointment</span></i>
//                         </a>
//                     </li>
//                     <li className='nav-item '>
//                         <a href="/reschedulewaiting" className='nav-link text-white'>
//                             <i className='fa-regular fa-comment-dots'><span className='ms-2'>Status of Rescheduling</span></i>
//                         </a>
//                     </li>
//                 </ul>

//             </div> */}
            
//             <div className='patinetlistbody-content  mt-3'>
//                 <div className="d-flex justify-content-between mt-3">
//                     <h2 className='mb-2'>Patient List</h2>
//                 </div>
//                 <table className="patient-list-table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">NAME</th>
//                             <th scope="col">Package</th>
//                             <th scope="col">Flight confirmation</th>
//                             <th scope="col">Reschedule</th>
//                             <th scope="col">Status of patient</th>
//                             <th scope="col">Status of taxi</th>
//                             <th scope="col">Status of hotel</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {patients.map((patient, index) => (
//                             <tr key={index}>
//                                 <td>{patient.id}</td>
//                                 <td>{patient.name}</td>
//                                 <td>{patient.package}</td>
//                                 <td>{patient.flight}</td>
//                                 <td>
//                                     <RescheduleButton />
//                                 {/* <button className="reschedule-btn" onClick={handleButtonClick}>Reschedule</button> */}
//                                 </td>
//                                 <td className={`${patient.statusPatient === 'Pre-Journey' ? 'text-danger' : patient.statusPatient === 'Complete' ? 'text-success' : patient.statusPatient === 'During Stay' ? 'text-warning' : 'text-warning'}`}>
//                                     {patient.statusPatient}
//                                 </td>
//                                 <td className={`${patient.statusTaxi === 'Waiting for confirmation' ? 'text-danger' : 'text-success'}`}>
//                                     {patient.statusTaxi}
//                                 </td>
//                                 <td className={`${patient.statusHotel === 'Waiting for confirmation' ? 'text-danger' : 'text-success'}`}>
//                                     {patient.statusHotel}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//             </div>
//         </div>
//     )
// }

// export default PatientListBody
//////////////


// import React from 'react'
// import "./PatientListBody.css"
// import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCar} from 'react-icons/fa'
// function PatientListBody() {
//   return (
//     <div className='d-flex home'>
//         <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
//             <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white active'>
//                         <FaSafari/> <span className='ms-2'>Dashboard</span>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                         <FaCartArrowDown/> <span className='ms-2'>Cars</span>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                         <FaUserAlt/> <span className='ms-2'>Drivers</span>
//                     </a>
//                 </li>
//                 <li className='nav-item '>                    
//                     <a href="" className='nav-link text-white'>
//                         <FaTasks/> <span className='ms-2'>Report</span>
//                     </a>
//                 </li>
//             </ul>

//         </div>
//         <div className='content container mt-3'>
//             <div className='row'>
//                 <div className='col-md-3 text-white col bg-success d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Cars</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='col-md-3 text-white col bg-danger d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Driver</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='col-md-3 text-white col bg-warning d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Total Expense</p>
//                     <FaCartArrowDown />
//                 </div>
//                 <div className='col-md-3 text-white col bg-primary d-flex 
//                     justify-content-around px-1 py-3 rounded'>
//                     <p>Report</p>
//                     <FaCartArrowDown />
//                 </div>
//             </div>

//             <div className="d-flex justify-content-between mt-3">
//                 <h2>Cars</h2>
//                 <button className="btn btn-success">+Add</button>
//             </div>
//             <table class="table w-100">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Title</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                     <tr>
//                         <td>1,001</td>
//                         <td>Toyota</td>
//                         <td>Corolla</td>
//                         <td>Four R</td>
//                         <td><button class="btn btn-success mx-2">U</button>
//                         <button class="btn btn-danger">D</button> </td>
//                     </tr>
//                 </tbody>
//             </table>

//         </div>
//     </div>
//   )
// }

// export default PatientListBody