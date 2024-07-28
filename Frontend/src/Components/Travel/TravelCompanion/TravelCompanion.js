import React, { useState } from 'react';
import './TravelCompanion.css'; // make sure to create this CSS file

function TravelCompanion() {

  const [showForm, setShowForm] = useState(false);

  const handleSelectionChange = (event) => {
    // Check if the user selected 'Yes'
    if (event.target.value === 'yes') {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };


  return (
    <div>
      <label className='mb-3'>
        {/* <h6>Habit?
        </h6> */} 
        <span style={{ marginRight: '10px' }}>Do you have a travel companion?</span> 
        <select onChange={handleSelectionChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>

      {showForm && (
        <div className='form-control'>
          <form style={{ backgroundColor: '#fff'}}>
          <h6 className='mb-3'>Travel Companion Details</h6>
            <div style={{ textAlign: 'left' }}>
            <label htmlFor='First Name'>First Name</label>
              <input type='text' placeholder='Enter your first name' className='form-control' />
            </div>
            <div style={{ textAlign: 'left' }}>
            <label htmlFor='First Name'>Last Name</label>
              <input type='text' placeholder='Enter your last name' className='form-control' />
            </div>
            <div style={{ textAlign: 'left' }}>
                    <label htmlFor='MidName'>Middle Name</label>
                    <input type='text' placeholder='Enter your middle name' className='form-control' />
                </div>
          </form>
        </div>
      )}

      {/* {showForm && (
              <div className='form-control mt-4 mb-4'>
                <form>
                <h6 className='mb-3'>Emergency Contact Details</h6>
                  <div style={{ textAlign: 'left' }}>
                      <label htmlFor='First Name'>First Name</label>
                      <input type='text' placeholder='Enter your first name' className='form-control' />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                      <label htmlFor='LastName'>Last Name</label>
                      <input type='text' placeholder='Enter your last name' className='form-control' />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                      <label htmlFor='Tel(Home)'>Tel(Home)</label>
                      <input type='number' placeholder='Enter your Tel(Home)' className='form-control' />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                      <label htmlFor='Tel(Mobile)'>Tel(Mobile)</label>
                      <input type='number' placeholder='Enter your Tel(Home)' className='form-control' />
                  </div>
                </form>
              </div>
            )}
     */}
    </div>
  );
};

export default TravelCompanion;




// import React, { useState } from 'react';
// import './TravelCompanion.css'; // make sure to create this CSS file

// function TravelCompanion() {
// //   const [isToggled, setIsToggled] = useState(false);

// //   const toggleSwitch = () => {
// //     setIsToggled(!isToggled);
// //   };

// const [hasCompanion, setHasCompanion] = useState(false);

//   return (
//     <div>
//       <form>
//       {/* <div style={{ marginBottom: '1em', textAlign: 'left' }}> */}
//         <span style={{ marginRight: '10px' }}>Do you have a travel companion?</span>
//         <div className="radio-group-travel-companion" style={{display: 'flex', align: 'center'}}>
//         <label style={{ marginRight: '10px' }}>
//           Yes
//           <input
//             type="radio"
//             name="travelCompanionToggle"
//             value="Yes"
//             onChange={() => setHasCompanion(true)}
//           />
//         </label>
//         <label>
//           No
//           <input
//             type="radio"
//             name="travelCompanionToggle"
//             value="No"
//             onChange={() => setHasCompanion(false)}
//             defaultChecked
//           />
//         </label>
//         {/* </div> */}
//       </div>
      
//       {hasCompanion && (
//         <div>
//             <form>
//                 <h6 className='mb-4'>Travel Companion Details</h6>
//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='First Name'>First Name</label>
//                     <input type='text' placeholder='Enter your first name' className='form-control' />
//                 </div>

//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='LastName'>Last Name</label>
//                     <input type='text' placeholder='Enter your last name' className='form-control' />
//                 </div>

//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='MidName'>Middle Name</label>
//                     <input type='text' placeholder='Enter your middle name' className='form-control' />
//                 </div>

//             </form>

//             <form>
//                 <h6 className='mb-4'>Emergency Contact Details</h6>
//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='First Name'>First Name</label>
//                     <input type='text' placeholder='Enter your first name' className='form-control' />
//                 </div>

//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='LastName'>Last Name</label>
//                     <input type='text' placeholder='Enter your last name' className='form-control' />
//                 </div>

//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='TelHome'>Tel(Home)</label>
//                     <input type='number' placeholder='Enter your telephon home' className='form-control' />
//                 </div>

//                 <div style={{ textAlign: 'left' }}>
//                     <label htmlFor='TelMobile'>Tel(Mobile)</label>
//                     <input type='number' placeholder='Enter your telephon mobile' className='form-control' />
//                 </div>
//             </form>

//         </div>
//       )}
//     </form>
//     </div>
//   );
// };

// export default TravelCompanion;

