// import React from 'react';
// import './UserProfiles.css';

// const UserProfiles = () => {
//   return (
//     <div className="d-flex userprofile-home">
//       <div className="userprofile-content mt-3">
//         <div className="d-flex justify-content-between mt-3">
//           <h2 className="mb-2">User Profiles</h2>
//           <div className="filter-userprofile-controls"></div>
//         </div>
//         <div className="card-container-userprofile">
//           <div className="form-field-box">
//             <span className="field-label">Name</span>
//             <span className="field-value">first name</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Surname</span>
//             <span className="field-value">surname</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Mobile Number</span>
//             <span className="field-value">enter phone number</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Address Line 1</span>
//             <span className="field-value">enter address line 1</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Address Line 2</span>
//             <span className="field-value">enter address line 2</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Postcode</span>
//             <span className="field-value">enter address line 2</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">State</span>
//             <span className="field-value">enter address line 2</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Area</span>
//             <span className="field-value">enter address line 2</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Email ID</span>
//             <span className="field-value">enter email id</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Education</span>
//             <span className="field-value">education</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">Country</span>
//             <span className="field-value">country</span>
//           </div>
//           <div className="form-field-box">
//             <span className="field-label">State/Region</span>
//             <span className="field-value">state</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfiles;



import React from 'react';
import './UserProfiles.css';
import aitasi from '../Co-Ordinator/PatientList/AssetsHeader/aitasi.png'

const UserProfiles = () => {
  return (
    <div className="d-flex userprofile-home">
      <div className="userprofile-content mt-3">
        <div className="d-flex justify-content-center mt-3">
            <div className="text-center mt-4">
                <img src="https://tse3.mm.bing.net/th?id=OIP.QqSiyDTpx3fmKEKKugDxdQAAAA&pid=Api&P=0&h=220" alt="Profile Picture" className="profile-picture" />
                <h2 className="mb-2 mt-4">Adisak Intana</h2>
            </div>

          <div className="filter-userprofile-controls "></div>
        </div>
        <div className="card-container-userprofile mt-2">
          <div className="form-field-row">
            <div className="form-field-box">
              <span className="field-label">Name</span>
              <span className="field-value">Adisak</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Surname</span>
              <span className="field-value">Intana</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Mobile Number</span>
              <span className="field-value">+66 123 456 789</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Role</span>
              <span className="field-value">Co-Ordinator</span>
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field-box">
              <span className="field-label">Address</span>
              <span className="field-value">Siriroj Bangkok Hospital</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Postcode</span>
              <span className="field-value">83000</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Email ID</span>
              <span className="field-value">test@gmail.com</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Country</span>
              <span className="field-value">Thailand</span>
            </div>
          </div>
        </div>


        {/* <div className="d-flex justify-content-between mt-3">
                <h2 className="mb-2 mt-4">Jetsdadaporn Noijanghan</h2>
        </div> */}
        <div className="d-flex justify-content-center mt-4"></div>
        <div className="card-container-userprofile mt-4">
          <div className="form-field-row">
            <div className="form-field-box">
              <span className="field-label">Data access rights</span>
              <span className="field-value">Patient</span>
            </div>
            <div className="form-field-box">
              <span className="field-label">Hospital affiliation</span>
              <span className="field-value">Siriroj Bangkok Hospital</span>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default UserProfiles;

