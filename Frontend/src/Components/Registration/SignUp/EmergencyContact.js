// import React from 'react'
// // import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// // import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function EmergencyContact() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signup5"); // Use navigate to go to /home page
//     }

    

//     return (
//         <div>
            // <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
            //     backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat'
            // }}>
//                 <NavBarRegistration />
                
//                 <div className='form_container p-5 rounded bg-white '>
//                 <form>
//                     <h1 className='text-center ms-3'>Sign Up</h1>
//                     <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Emergency Contact Details</h6>
//                     <div style={{ textAlign: 'left' }}>
//                       <label htmlFor='First Name'>First Name</label>
//                       <input type='text' placeholder='Enter your first name' className='form-control' />
//                   </div>

//                   <div style={{ textAlign: 'left' }}>
//                       <label htmlFor='LastName'>Last Name</label>
//                       <input type='text' placeholder='Enter your last name' className='form-control' />
//                   </div>

//                   <div style={{ textAlign: 'left' }}>
//                       <label htmlFor='Tel(Home)'>Tel(Home)</label>
//                       <input type='number' placeholder='Enter your Tel(Home)' className='form-control' />
//                   </div>
//                   <div style={{ textAlign: 'left' }}>
//                       <label htmlFor='Tel(Mobile)'>Tel(Mobile)</label>
//                       <input type='number' placeholder='Enter your Tel(Home)' className='form-control' />
//                   </div>
//                     <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
//                 </form>
//             </div>
//             </div>
//         </div>
  

//     )
// }

// export default EmergencyContact

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
import axios from 'axios';

function EmergencyContact() {
    const [emergencyContact, setEmergencyContact] = useState({
        first_name: '',
        last_name: '',
        tel_home: '',
        tel_mobile: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmergencyContact(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const patientId = localStorage.getItem('patient_id');
    if (!patientId) {
        // Redirect or show an error message if patientId is missing
        navigate('/signup');
        return null; // or you can return some error message component
    }
    console.log("Patient ID Emergency",patientId)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup/emergency', 
                {...emergencyContact, 
                patient_id: patientId
            });
            console.log('Patient emergency created:', response.data);
            navigate("/signup5"); // Go to the next page
        } catch (err) {
            console.error('Error creating emergency contact:', err);
        }
    };

    return (
        <div>
            <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <NavBarRegistration />
            <div className='signup template d-flex justify-content-center align-items-center'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center ms-3'>Sign Up</h1>
                        <h6 className='mt-3 mb-2'>Emergency Contact</h6>
                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='first_name'>First Name</label>
                            <input
                                type='text'
                                id='first_name'
                                name='first_name'
                                placeholder='Enter First Name'
                                className='form-control'
                                value={emergencyContact.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='last_name'>Last Name</label>
                            <input
                                type='text'
                                id='last_name'
                                name='last_name'
                                placeholder='Enter Last Name'
                                className='form-control'
                                value={emergencyContact.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='tel_home'>Home Tel</label>
                            <input
                                type='text'
                                id='tel_home'
                                name='tel_home'
                                placeholder='Enter Home Tel'
                                className='form-control'
                                value={emergencyContact.tel_home}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='tel_mobile'>Mobile Tel</label>
                            <input
                                type='text'
                                id='tel_mobile'
                                name='tel_mobile'
                                placeholder='Enter Mobile Tel'
                                className='form-control'
                                value={emergencyContact.tel_mobile}
                                onChange={handleChange}
                            />
                        </div>
                        <button className='btn btn-primary mt-2' type='submit'>Next</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default EmergencyContact;


