// import React, { useState } from 'react'
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import './SignUp.css'
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function PatientDetails() {

//     const [dateOfBirth, setDateOfBirth] = useState('');

//     const handleDateChange = (event) => {
//     setDateOfBirth(event.target.value);
//     };

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signup3"); // Use navigate to go to /home page
//     }

//     return (
//         <div className='signup template d-flex justify-content-center align-items-center' style={{
//             backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             minHeight: 'calc(100vh - 56px)'
//         }}>

//             <NavBarRegistration/>
//             <div style={{ paddingTop: '3rem' }}>
//             <div className='form_container p-5 rounded bg-white my-5'>
//                 <form>
//                     <h1 className='text-center ms-3'>Sign Up</h1>
//                     <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Details</h6>
//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='fname'>First Name</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter First Name' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='lname'>Last Name</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter First Name' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='lname'>Middle Name</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter First Name' className='form-control' />
//                     </div>

//                     <div style={{ textAlign: 'left' }}>
//                     <label htmlFor="GenderSelect" className="form-label">Gender</label>
//                     <Form.Select id="GenderSelect" className="mb-2" aria-label="Default select example">
//                         <option>-</option>
//                         <option value="1">Male</option>
//                         <option value="2">Female</option>
//                         <option value="2">Other</option>
//                     </Form.Select>
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='age'>Age</label>
//                         <input type='number' placeholder='Enter Age' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor="dob">Date of Birth:</label>
//                         <input
//                             type="date"
//                             id="dob"
//                             name="dob"
//                             value={dateOfBirth}
//                             onChange={handleDateChange}
//                             className='form-control'
//                         />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='height'>Height(cm)</label>
//                         <input type='number' placeholder='Enter Height' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='weight'>Weight(kg)</label>
//                         <input type='number' placeholder='Enter Weight' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Nationality'>Nationality</label>
//                         <input type='text' placeholder='Enter Nationality' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Passport'>Passport No.</label>
//                         <input type='text' placeholder='Passport No.' className='form-control' />
//                     </div>

//                     {/* <button type="button" onClick={handleToggleContactInfo}>
//                         {showContactInfo ? 'Hide Contact Info' : 'Show Contact Info'}
//                     </button>
//                     {showContactInfo && <ContactInformation />} */}
//                     <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
//                 </form>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default PatientDetails


// version finish
// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './SignUp.css';
// import axios from 'axios';

// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function PatientDetails() {
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [details, setDetails] = useState({
//         firstName: '',
//         lastName: '',
//         middleName: '',
//         gender: '',
//         age: '',
//         height: '',
//         weight: '',
//         nationality: '',
//         passportNo: ''
//     });

//     const handleChange = (e) => {
//         setDetails({
//             ...details,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleDateChange = (event) => {
//         setDateOfBirth(event.target.value);
//     };
//     const navigate = useNavigate();

//     // const handleClick = async (event) => {
//     //     event.preventDefault();
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/api/signup/contact', {
//     //             ...formData});
//     //         console.log(response.data);
//     //         navigate("/signup4");
//     //     } catch (error) {
//     //         console.error('There was an error registering!', error.response ? error.response.data : error.message);
//     //     };
//     // };
//     // Retrieve the patient_id from localStorage
//     const patientId = localStorage.getItem('patient_id');
//     if (!patientId) {
//         // Redirect or show an error message if patientId is missing
//         navigate('/signup');
//         return null; // or you can return some error message component
//     }
//     console.log("Patient ID Details",patientId)
    
//     const handleClick = async (e) => {
//         e.preventDefault();

//         const dataToSubmit = {
//             patient_id: patientId,
//             ...details
//         };
//         console.log('Data to Submit:', dataToSubmit); // Debugging line


//         try {
//             const response = await axios.post('http://localhost:5000/api/signup/details', dataToSubmit);
//             console.log('Response from server:', response.data);
//             navigate("/signup3");
//             console.log('Patient details updated:', response.data);
//         } catch (error) {
//             console.error('Error updating patient details:', error);
//         }
//     };

//     return (
//         <div className='signup template d-flex justify-content-center align-items-center' style={{
//             backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             minHeight: 'calc(100vh - 56px)'
//         }}>
//             <NavBarRegistration/>
//             <div style={{ paddingTop: '3rem' }}>
//                 <div className='form_container p-5 rounded bg-white my-5'>
//                     <form>
//                         <h1 className='text-center ms-3'>Sign Up</h1>
//                         <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Details</h6>
                        
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='firstName'>First Name</label>
//                             <input
//                                 type='text'
//                                 name='firstName'
//                                 placeholder='Enter First Name'
//                                 className='form-control'
//                                 value={details.firstName}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='lastName'>Last Name</label>
//                             <input
//                                 type='text'
//                                 name='lastName'
//                                 placeholder='Enter Last Name'
//                                 className='form-control'
//                                 value={details.lastName}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='middleName'>Middle Name</label>
//                             <input
//                                 type='text'
//                                 name='middleName'
//                                 placeholder='Enter Middle Name'
//                                 className='form-control'
//                                 value={details.middleName}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div style={{ textAlign: 'left' }}>
//                             <label htmlFor='gender' className="form-label">Gender</label>
//                             <Form.Select
//                                 id="gender"
//                                 name="gender"
//                                 className="mb-2"
//                                 aria-label="Default select example"
//                                 value={details.gender}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select Gender</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                             </Form.Select>
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='age'>Age</label>
//                             <input
//                                 type='number'
//                                 name='age'
//                                 placeholder='Enter Age'
//                                 className='form-control'
//                                 value={details.age}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='dob'>Date of Birth:</label>
//                             <input
//                                 type="date"
//                                 id="dob"
//                                 name="dob"
//                                 value={dateOfBirth}
//                                 onChange={handleDateChange}
//                                 className='form-control'
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='height'>Height (cm)</label>
//                             <input
//                                 type='number'
//                                 name='height'
//                                 placeholder='Enter Height'
//                                 className='form-control'
//                                 value={details.height}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='weight'>Weight (kg)</label>
//                             <input
//                                 type='number'
//                                 name='weight'
//                                 placeholder='Enter Weight'
//                                 className='form-control'
//                                 value={details.weight}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='nationality'>Nationality</label>
//                             <input
//                                 type='text'
//                                 name='nationality'
//                                 placeholder='Enter Nationality'
//                                 className='form-control'
//                                 value={details.nationality}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='passportNo'>Passport No.</label>
//                             <input
//                                 type='text'
//                                 name='passportNo'
//                                 placeholder='Passport No.'
//                                 className='form-control'
//                                 value={details.passportNo}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PatientDetails;



// version update require

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

function PatientDetails() {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
        nationality: '',
        passportNo: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
    };

    const handleDateChange = (event) => {
        setDateOfBirth(event.target.value);
    };

    const validateForm = () => {
        let formErrors = {};
        const requiredFields = ['firstName', 'lastName', 'gender', 'age', 'height', 'weight', 'nationality', 'passportNo'];

        requiredFields.forEach(field => {
            if (!details[field]) {
                formErrors[field] = 'This field is required';
            }
        });

        if (!dateOfBirth) {
            formErrors['dateOfBirth'] = 'This field is required';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const dataToSubmit = {
            patient_id: localStorage.getItem('patient_id'),
            ...details,
            dateOfBirth
        };

        try {
            const response = await axios.post('http://localhost:5000/api/signup/details', dataToSubmit);
            navigate("/signup3");
        } catch (error) {
            console.error('Error updating patient details:', error);
        }
    };

    return (
        <div className='signup template d-flex justify-content-center align-items-center' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: 'calc(100vh - 56px)'
        }}>
            <NavBarRegistration />
            <div style={{ paddingTop: '3rem' }}>
                <div className='form_container p-5 rounded bg-white my-5'>
                    <form>
                        <h1 className='text-center ms-3'>Sign Up</h1>
                        <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Details</h6>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                className='form-control'
                                value={details.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className='text-danger'>{errors.firstName}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Enter Last Name'
                                className='form-control'
                                value={details.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className='text-danger'>{errors.lastName}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='middleName'>Middle Name</label>
                            <input
                                type='text'
                                name='middleName'
                                placeholder='Enter Middle Name'
                                className='form-control'
                                value={details.middleName}
                                onChange={handleChange}
                            />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                            <label htmlFor='gender' className="form-label">Gender</label>
                            <Form.Select
                                id="gender"
                                name="gender"
                                className="mb-2"
                                aria-label="Default select example"
                                value={details.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Select>
                            {errors.gender && <p className='text-danger'>{errors.gender}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='age'>Age</label>
                            <input
                                type='number'
                                name='age'
                                placeholder='Enter Age'
                                className='form-control'
                                value={details.age}
                                onChange={handleChange}
                            />
                            {errors.age && <p className='text-danger'>{errors.age}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='dob'>Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={dateOfBirth}
                                onChange={handleDateChange}
                                className='form-control'
                            />
                            {errors.dateOfBirth && <p className='text-danger'>{errors.dateOfBirth}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='height'>Height (cm)</label>
                            <input
                                type='number'
                                name='height'
                                placeholder='Enter Height'
                                className='form-control'
                                value={details.height}
                                onChange={handleChange}
                            />
                            {errors.height && <p className='text-danger'>{errors.height}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='weight'>Weight (kg)</label>
                            <input
                                type='number'
                                name='weight'
                                placeholder='Enter Weight'
                                className='form-control'
                                value={details.weight}
                                onChange={handleChange}
                            />
                            {errors.weight && <p className='text-danger'>{errors.weight}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='nationality'>Nationality</label>
                            <input
                                type='text'
                                name='nationality'
                                placeholder='Enter Nationality'
                                className='form-control'
                                value={details.nationality}
                                onChange={handleChange}
                            />
                            {errors.nationality && <p className='text-danger'>{errors.nationality}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='passportNo'>Passport No.</label>
                            <input
                                type='text'
                                name='passportNo'
                                placeholder='Passport No.'
                                className='form-control'
                                value={details.passportNo}
                                onChange={handleChange}
                            />
                            {errors.passportNo && <p className='text-danger'>{errors.passportNo}</p>}
                        </div>

                        <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;


