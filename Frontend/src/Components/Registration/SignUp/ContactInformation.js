// import React from 'react'
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function ContactInformation() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signup4"); // Use navigate to go to /home page
//     }

//     return (
//         <div>
//             <div className='signup template d-flex justify-content-center align-items-center' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//             <NavBarRegistration />
//             <div style={{ paddingTop: '3rem' }}>

//             <div className='form_container p-5 rounded bg-white my-5'>
//                 <form>
//                     <h1 className='text-center ms-3'>Sign Up</h1>
//                     <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Contact Information</h6>
//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Address1'>Address 1</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter Address 1' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Address2'>Address 2</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter Address 2' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Address3'>Address 3</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter Address 3' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='City'>City</label>
//                         {/* <label htmlFor='email'>Email</label> */}
//                         <input type='text' placeholder='Enter City' className='form-control' />
//                     </div>

//                     {/* <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Country'>Country</label>
//                         {/* <label htmlFor='email'>Email</label> 
//                         <input type='text' placeholder='Enter Country' className='form-control' />
//                     </div> */}

//                     <div style={{ textAlign: 'left' }}>
//                     <label htmlFor="CountrySelect" className="form-label">Country</label>
//                     <Form.Select id="CountrySelect" className="mb-2" aria-label="Default select example">
//                         <option>-</option>
//                         <option value="1">Thailand</option>
//                         <option value="2">Russia</option>
//                         <option value="2">Japan</option>
//                     </Form.Select>
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Postal'>Postal Code</label>
//                         <input type='text' placeholder='Enter Postal Code' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='Email'>Email</label>
//                         <input type='email' placeholder='Enter Email' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='TelHome'>Tel(Home)</label>
//                         <input type='text' placeholder='Enter Tel (Home)' className='form-control' />
//                     </div>

//                     <div className='mb-2' style={{ textAlign: 'left' }}>
//                         <label htmlFor='TelMobile'>Tel(Mobile)</label>
//                         <input type='text' placeholder='Enter Tel (Mobile)' className='form-control' />
//                     </div>

//                     {/* <button type="button" onClick={handleToggleContactInfo}>
//                         {showContactInfo ? 'Hide Contact Info' : 'Show Contact Info'}
//                     </button>
//                     {showContactInfo && <ContactInformation />} */}
//                     <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
//                 </form>
//             </div>
//             </div>
//         </div>
//         </div>

//     )
// }

// export default ContactInformation


// version finish

// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function ContactInformation() {
//     const [formData, setFormData] = useState({
//         address1: '',
//         address2: '',
//         address3: '',
//         city: '',
//         country: '',
//         postalCode: '',
//         email: '',
//         telHome: '',
//         telMobile: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };

//     const patientId = localStorage.getItem('patient_id');
//     if (!patientId) {
//         // Redirect or show an error message if patientId is missing
//         navigate('/signup/account');
//         return null; // or you can return some error message component
//     }
//     console.log("Patient ID Contact",patientId)
//     // const { patientId } = useParams();
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axios.post(`http://localhost:5000/api/signup/contact`, {
//                 ...formData,
//                 patient_id: patientId
//             });
//             navigate(`/signup4`);
//         } catch (error) {
//             console.error('There was an error!', error);
//         }
//     };
//     return (
//         <div>
//             <div className='signup template d-flex justify-content-center align-items-center' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <NavBarRegistration />
//                 <div style={{ paddingTop: '3rem' }}>
//                     <div className='form_container p-5 rounded bg-white my-5'>
//                         <form onSubmit={handleSubmit}>
//                             <h1 className='text-center ms-3'>Sign Up</h1>
//                             <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Contact Information</h6>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='address1'>Address 1</label>
//                                 <input
//                                     type='text'
//                                     name='address1'
//                                     placeholder='Enter Address 1'
//                                     className='form-control'
//                                     value={formData.address1}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='address2'>Address 2</label>
//                                 <input
//                                     type='text'
//                                     name='address2'
//                                     placeholder='Enter Address 2'
//                                     className='form-control'
//                                     value={formData.address2}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='address3'>Address 3</label>
//                                 <input
//                                     type='text'
//                                     name='address3'
//                                     placeholder='Enter Address 3'
//                                     className='form-control'
//                                     value={formData.address3}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='city'>City</label>
//                                 <input
//                                     type='text'
//                                     name='city'
//                                     placeholder='Enter City'
//                                     className='form-control'
//                                     value={formData.city}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div style={{ textAlign: 'left' }}>
//                                 <label htmlFor="country" className="form-label">Country</label>
//                                 <Form.Select
//                                     id="country"
//                                     name="country"
//                                     className="mb-2"
//                                     value={formData.country}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="">Select Country</option>
//                                     <option value="Thailand">Thailand</option>
//                                     <option value="Russia">Russia</option>
//                                     <option value="Japan">Japan</option>
//                                 </Form.Select>
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='postalCode'>Postal Code</label>
//                                 <input
//                                     type='text'
//                                     name='postalCode'
//                                     placeholder='Enter Postal Code'
//                                     className='form-control'
//                                     value={formData.postalCode}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='email'>Email</label>
//                                 <input
//                                     type='email'
//                                     name='email'
//                                     placeholder='Enter Email'
//                                     className='form-control'
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='telHome'>Tel (Home)</label>
//                                 <input
//                                     type='text'
//                                     name='telHome'
//                                     placeholder='Enter Tel (Home)'
//                                     className='form-control'
//                                     value={formData.telHome}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className='mb-2' style={{ textAlign: 'left' }}>
//                                 <label htmlFor='telMobile'>Tel (Mobile)</label>
//                                 <input
//                                     type='text'
//                                     name='telMobile'
//                                     placeholder='Enter Tel (Mobile)'
//                                     className='form-control'
//                                     value={formData.telMobile}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <button className='btn btn-primary mt-2' type='submit'>Next</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ContactInformation;

// version update

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

function ContactInformation() {
    const [formData, setFormData] = useState({
        address1: '',
        address2: '',
        address3: '',
        city: '',
        country: '',
        postalCode: '',
        email: '',
        telHome: '',
        telMobile: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        const requiredFields = [
            'address1', 'city', 'country', 'postalCode', 'email', 'telHome', 'telMobile'
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                formErrors[field] = 'This field is required';
            }
        });

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const patientId = localStorage.getItem('patient_id');
        if (!patientId) {
            navigate('/signup/account');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/signup/contact', {
                ...formData,
                patient_id: patientId
            });
            navigate('/signup4');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className='signup template d-flex justify-content-center align-items-center' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <NavBarRegistration />
            <div style={{ paddingTop: '3rem' }}>
                <div className='form_container p-5 rounded bg-white my-5'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center ms-3'>Sign Up</h1>
                        <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Contact Information</h6>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='address1'>Address 1</label>
                            <input
                                type='text'
                                name='address1'
                                placeholder='Enter Address 1'
                                className='form-control'
                                value={formData.address1}
                                onChange={handleChange}
                            />
                            {errors.address1 && <p className='text-danger'>{errors.address1}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='address2'>Address 2</label>
                            <input
                                type='text'
                                name='address2'
                                placeholder='Enter Address 2'
                                className='form-control'
                                value={formData.address2}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='address3'>Address 3</label>
                            <input
                                type='text'
                                name='address3'
                                placeholder='Enter Address 3'
                                className='form-control'
                                value={formData.address3}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='city'>City</label>
                            <input
                                type='text'
                                name='city'
                                placeholder='Enter City'
                                className='form-control'
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <p className='text-danger'>{errors.city}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='country' className="form-label">Country</label>
                            <Form.Select
                                id="country"
                                name="country"
                                className="mb-2"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option value="">Select Country</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Russia">Russia</option>
                                <option value="Japan">Japan</option>
                            </Form.Select>
                            {errors.country && <p className='text-danger'>{errors.country}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='postalCode'>Postal Code</label>
                            <input
                                type='text'
                                name='postalCode'
                                placeholder='Enter Postal Code'
                                className='form-control'
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                            {errors.postalCode && <p className='text-danger'>{errors.postalCode}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                className='form-control'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='text-danger'>{errors.email}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='telHome'>Tel (Home)</label>
                            <input
                                type='text'
                                name='telHome'
                                placeholder='Enter Tel (Home)'
                                className='form-control'
                                value={formData.telHome}
                                onChange={handleChange}
                            />
                            {errors.telHome && <p className='text-danger'>{errors.telHome}</p>}
                        </div>

                        <div className='mb-3' style={{ textAlign: 'left' }}>
                            <label htmlFor='telMobile'>Tel (Mobile)</label>
                            <input
                                type='text'
                                name='telMobile'
                                placeholder='Enter Tel (Mobile)'
                                className='form-control'
                                value={formData.telMobile}
                                onChange={handleChange}
                            />
                            {errors.telMobile && <p className='text-danger'>{errors.telMobile}</p>}
                        </div>

                        <button className='btn btn-primary mt-2' type='submit'>Next</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactInformation;

