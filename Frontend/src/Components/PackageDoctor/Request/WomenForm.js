import React, { useState } from 'react';
// import "./ALLRequest.css"

function WomenForm() {
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
        <span style={{ marginRight: '10px' }}>Are you a female ?</span> 
        <select onChange={handleSelectionChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>
      {showForm && (
        <div className='form-control'>
          <form style={{ backgroundColor: '#fff'}}>
            <h6 className='mb-3'>Women Form</h6>

                <div style={{ textAlign: 'left' }}>
                <label htmlFor='BirthControlPilss'>Birth control pills, hormone replacement medications, hormone patch or implant?</label>
                    <select id='WomenForm' className='form-control mb-4'>
                        <option value=''>-</option>
                        <option value='YesBirthControlPills'>Yes</option>
                        <option value='NoBirthControlPills'>No</option>
                    </select>
                </div>
                <div style={{ textAlign: 'left' }}>
                <label htmlFor='Pregment'>Are you pregnant now ?</label>
                    <select id='WomenForm' className='form-control mb-4'>
                        <option value=''>-</option>
                        <option value='YesPregment'>Yes</option>
                        <option value='NoPregment'>No</option>
                    </select>
                </div>

                <div style={{ textAlign: 'left' }}>
                <label htmlFor='Planning'>Planning for more pregnancies?</label>
                    <input type='text' placeholder='Planning for more pregnancies' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                <label htmlFor='AgeYougestChild'>Age of youngest child ?</label>
                    <input type='number' placeholder='Age of youngest child' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                <label htmlFor='BreastfedOn'>Last breastfed on (month & year) ?</label>
                    <input type='month' placeholder='Last breastfed on (month & year)' className='form-control' />
                </div>

            </form>
        </div>
      )}
    </div>
  );
}

export default WomenForm;
