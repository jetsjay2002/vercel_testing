// import React from 'react'
// import aitasi from '../AssetsHeader/aitasi.png'
// import './PatientListHeader.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import NavBarPatientList from '../NavBarPatientList/NavBarPatientList'

// function PatientListHeader() {
//   return (
//     <div className='patientlist-header'>
//         <div className='d-flex justify-content-around '>
//             <div>
//                 {/* <img src={aitasi} alt="" /> */}
//             </div>
//             {/* <div className='d-flex align-items-left'> */}
//             <div className='ml-3'>
//                 <h2>Intelligent Health</h2>
//                 <h2>Tourism System (IHTS)</h2>
//             </div>
//             <div>
//                 {/* <img src={aitasi} alt="" /> */}
//             </div>
//         </div>
//         <NavBarPatientList />
//     </div>
//   )
// }

// export default PatientListHeader


import React from 'react';
import './PatientListHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPatientList from '../NavBarPatientList/NavBarPatientList';

function PatientListHeader() {
  return (
    <div className='patientlist-header'>
        <div className='d-flex justify-content-start align-items-center'>
            <div className='text-frame'>
                <h2 className='front-page'>Intelligent Health</h2>
                <h2 className='thin'>Tourism System (IHTS)</h2>
            </div>
        </div>
        <NavBarPatientList />
    </div>
  );
}

export default PatientListHeader;


