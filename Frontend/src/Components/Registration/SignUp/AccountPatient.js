//// version 1(based on) -------------------------------

// import { Form, Navbar } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
// // import './SignUp.css'

// function AccountPatient() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/signup2"); // Use navigate to go to /home page
//     }

//     return (
//         <div>
//             <NavBarRegistration />
      
//             <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <div className='form_container p-5 rounded bg-white'>
//                     <form>
//                         <h1 className='text-center ms-3'>Sign Up</h1>
//                         <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Account User</h6>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='Username'>Username</label>
//                             {/* <label htmlFor='email'>Email</label> */}
//                             <input type='text' placeholder='Enter Username' className='form-control' />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='Password'>Password</label>
//                             {/* <label htmlFor='email'>Email</label> */}
//                             <input type='Password' placeholder='Enter Password' className='form-control' />
//                         </div>

            

//                         <button className='btn btn-primary mt-2' onClick={handleClick}>Next</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AccountPatient



//// version 2 (connect db) -------------------------------

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function AccountPatient() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/signup/account', {
//                 ...formData,
//                 role: 'patient'
//             });
//             // Store patient_id for future use
//             console.log(response.data);
//             navigate("/signup2");
//         } catch (error) {
//             console.error('There was an error!', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <div>
//             <NavBarRegistration />
//             <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <div className='form_container p-5 rounded bg-white'>
//                     <form onSubmit={handleSubmit}>
//                         <h1 className='text-center ms-3'>Sign Up</h1>
//                         <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Account Information</h6>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='username'>Username</label>
//                             <input
//                                 type='text'
//                                 name='username'
//                                 placeholder='Enter Username'
//                                 className='form-control'
//                                 value={formData.username}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='password'>Password</label>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 placeholder='Enter Password'
//                                 className='form-control'
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <button className='btn btn-primary mt-2' type='submit'>Next</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AccountPatient;




//// version 3 -------------------------------

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// function SignupAgent() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         firstName: '',
//         lastName: '',
//         middleName: ''
//     });
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };


//     const validateForm = () => {
//         const newErrors = {};
//         const { username, password, firstName, lastName } = formData;

//         if (!username) newErrors.username = 'Username is required.';
//         if (!password) newErrors.password = 'Password is required.';
//         if (!firstName) newErrors.firstName = 'First Name is required.';
//         if (!lastName) newErrors.lastName = 'Last Name is required.';

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/signup/account', {
//                 ...formData,
//                 role: 'agent'
//             });
//             const patientId = response.data.patient_id;
//             localStorage.setItem('patient_id', patientId);
//             console.log(response.data);
//             // console.log(response.patientId);
//             navigate("/signup2");
//             // Redirect or show success message
//         } catch (error) {
//             console.error('There was an error registering!', error.response ? error.response.data : error.message);
//         }
//     };


//     return (
//         <div>
//             <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <NavBarRegistration />
//                 <div className='form_container p-5 rounded bg-white'>
//                     <form onSubmit={handleSubmit}>
//                         <h1 className='text-center ms-3'>Sign Up</h1>
//                         {error && <p className='text-danger'>{error}</p>}
//                         <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Account User</h6>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='username'>Username</label>
//                             <input
//                                 type='text'
//                                 name='username'
//                                 placeholder='Enter Username'
//                                 className='form-control'
//                                 value={formData.username}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='password'>Password</label>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 placeholder='Enter Password'
//                                 className='form-control'
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='firstName'>First Name</label>
//                             <input
//                                 type='text'
//                                 name='firstName'
//                                 placeholder='Enter First Name'
//                                 className='form-control'
//                                 value={formData.firstName}
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
//                                 value={formData.lastName}
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
//                                 value={formData.middleName}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <button className='btn btn-primary mt-2' type='submit' disabled={loading}>
//                             {loading ? 'Submitting...' : 'Submit'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupAgent;


/// ---------version 4 update require under box

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

function SignupAgent() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        middleName: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const { username, password, firstName, lastName } = formData;

        if (!username) newErrors.username = 'Username is required.';
        if (!password) newErrors.password = 'Password is required.';
        // if (!firstName) newErrors.firstName = 'First Name is required.';
        // if (!lastName) newErrors.lastName = 'Last Name is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/signup/account', {
                ...formData,
                role: 'patient'
            });
            const patientId = response.data.patient_id;
            localStorage.setItem('patient_id', patientId);
            console.log(response.data);
            navigate("/signup2");
        } catch (error) {
            console.error('There was an error registering!', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
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
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center ms-3'>Sign Up</h1>
                        <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Account User</h6>
                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                name='username'
                                placeholder='Enter Username'
                                className='form-control'
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className='text-danger'>{errors.username}</p>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter Password'
                                className='form-control'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className='text-danger'>{errors.password}</p>}
                        </div>

                        {/* <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                className='form-control'
                                value={formData.firstName}
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
                                value={formData.lastName}
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
                                value={formData.middleName}
                                onChange={handleChange}
                            />
                        </div> */}

                        <button className='btn btn-primary mt-2' type='submit' disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupAgent;


