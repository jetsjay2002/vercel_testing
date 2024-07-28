import React, { useState } from 'react';

function Habit() {
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

      <label className='mb-3'>
        {/* <h6>Habit?
        </h6> */} 
        <span style={{ marginRight: '10px' }}>Do you have a Habits?</span> 
        <select onChange={handleSelectionChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>
      {showForm && (
        <div className='form-control' style={{ backgroundColor: '#fff'}}>
          <form style={{ backgroundColor: '#fff'}}>
          <h6 className='mb-3'>Habits</h6>
            <div style={{ textAlign: 'left' }}>
            <label htmlFor='First Name'>Smoking ?</label>
                <select id='HabitSelect' className='form-control mb-4'>
                    <option value=''>-</option>
                    <option value='YesSmoking'>Yes</option>
                    <option value='NoSmoking'>No</option>
                </select>
            </div>
            <div style={{ textAlign: 'left' }}>
            <label htmlFor='First Name'>Drinking ?</label>
                <select id='HabitSelect' className='form-control mb-4'>
                    <option value=''>-</option>
                    <option value='YesDrinking'>Yes</option>
                    <option value='NoDrinking'>No</option>
                </select>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Habit;
