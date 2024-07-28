import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../PackageDoctor/Request/ALLRequest.css'

function TravelCancel() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/decision");
    }

  return (
        <div className="card-container-request" >
                <div className="from-container">
                <div className='text-request' style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 25px 2px rgba(0, 0, 0, 0.11)' }}>
                        <h1>New Travel Details</h1>
                        <form style={{ backgroundColor: '#fff'}}>
                        <div style={{ textAlign: 'left' }}>
                        <label htmlFor='departure'>From</label>
                        <input type='text' placeholder='Enter your departure from' className='form-control' />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                        <label htmlFor='arrive'>To</label>
                        <input type='text' placeholder='Enter your arrive to' className='form-control' />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                        <label htmlFor='DepartureDateTime'>Date & Time From</label>
                        <input type='date' placeholder='Enter your date to departure' className='form-control' />
                        <input type='time' placeholder='Enter your time to departure' className='form-control' />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                        <label htmlFor='ArriveDateTime'>Date & Time to</label>
                        <input type='date' placeholder='Enter your date to arrive' className='form-control' />
                        <input type='time' placeholder='Enter your time to arrive' className='form-control' />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                        <label htmlFor='Flight'>Flight</label>
                        <input type='text' placeholder='Enter your flight number' className='form-control' />
                        </div>
                        </form>
                        <button className="form-control" style={{ backgroundColor: '#2563eb', 
                            color: 'white', 
                            '&:hover': {
                                backgroundColor: 'darkblue', // Darken the button on hover
                            }}} onClick={handleClick}>Submit</button>

                        {/* <TravelCompanion />
                        <TaxiHotelComponent /> */}
                        
                </div>
                </div>
        </div>
  )
}

export default TravelCancel