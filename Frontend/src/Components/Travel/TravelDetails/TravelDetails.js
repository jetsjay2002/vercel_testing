import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TravelCompanion from '../TravelCompanion/TravelCompanion';
import TaxiHotelComponent from '../TaxiHotel/TaxiHotelComponent';
import '../../PackageDoctor/Request/ALLRequest.css'

function TravelDetails() {
  return (
        <div className="card-container-request" >
                <div className="from-container">
                <div className='text-request' style={{  backgroundColor: '#ffffff',padding: '20px', borderRadius: '8px', boxShadow: '0 5px 25px 2px rgba(0, 0, 0, 0.11)' }}>
                        <h1>Travel Details</h1>
                        <form style={{ backgroundColor: '#ffffff' }}>
                        <div style={{ textAlign: 'left'}}>
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
                        <TravelCompanion />
                        <TaxiHotelComponent />
                </div>
                </div>
        </div>
  )
}

export default TravelDetails