import React, { useState } from 'react';
// import "./ALLRequest.css"
function BreasySurgeyDetails() {
  // State to manage whether the form should be shown or not
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

      <label className='mt-4 mb-3'>
        {/* <h6>Habit?
        </h6> */} 
        <span style={{ marginRight: '10px' }}>Breast Surgery Details?</span> 
        <select onChange={handleSelectionChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>
      {showForm && (
        <div className='form-control'>
          <form style={{ backgroundColor: '#fff'}}>
          <h6 className='mb-3'>Breast Surgey Details</h6>
                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='BraSize'>Current Bra Size?</label>
                        <input type='number' placeholder='current bra size' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='RequestSize'>Requested Bra Size?</label>
                        <input type='number' placeholder='Requested bra size' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='DesiredPlacement'>Desired Placement</label>
                        <input type='text' placeholder='Desired Placement' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='DesiredImplant'>Desired Implant</label>
                        <input type='text' placeholder='Desired Implant' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='DesiredIncision'>Desired Incision</label>
                        <input type='text' placeholder='Desired Incision' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='ExpectedOutcome'>Expected Outcome</label>
                        <input type='text' placeholder='Expected Outcome' className='form-control' />
                </div>
             
            </form>
        </div>
      )}
    </div>
  );
}

export default BreasySurgeyDetails;
