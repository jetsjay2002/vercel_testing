// import { Form, Navbar } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
// // import './SignUp.css'

// function SignupAgent() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/login"); // Use navigate to go to /home page
//     }

//     return (
//         <div>
//             {/* <NavBarRegistration /> */}
      
//             <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <NavBarRegistration />
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

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='First Name'>First Name</label>
//                             {/* <label htmlFor='email'>Email</label> */}
//                             <input type='text' placeholder='Enter First Name' className='form-control' />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='Last Name'>Last Name</label>
//                             {/* <label htmlFor='email'>Email</label> */}
//                             <input type='text' placeholder='Enter Last Name' className='form-control' />
//                         </div>

//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='Middle Name'>Middle Name</label>
//                             {/* <label htmlFor='email'>Email</label> */}
//                             <input type='text' placeholder='Enter Middle Name' className='form-control' />
//                         </div>

            

//                         <button className='btn btn-primary mt-2' onClick={handleClick}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignupAgent


// import { useState } from 'react';
// import { Form, Navbar } from 'react-bootstrap';
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
//             const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//             console.log(response.data);
//             navigate("/login");
//         } catch (error) {
//             console.error('There was an error registering!', error);
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

//                         <button className='btn btn-primary mt-2' type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupAgent;

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

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        const newFormErrors = {
            username: formData.username ? '' : 'Username is required',
            password: formData.password ? '' : 'Password is required',
            firstName: formData.firstName ? '' : 'First Name is required',
            lastName: formData.lastName ? '' : 'Last Name is required'
        };

        setFormErrors(newFormErrors);

        if (Object.values(newFormErrors).some(error => error)) {
            return; // Stop submission if there are validation errors
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                ...formData,
                role: 'agent' // Assuming role is always 'agent'
            });
            console.log('Signup successful:', response.data);
            navigate("/login");
        } catch (error) {
            console.error('There was an error registering!', error.response ? error.response.data : error.message);
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
                            {formErrors.username && <div className='text-danger'>{formErrors.username}</div>}
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
                            {formErrors.password && <div className='text-danger'>{formErrors.password}</div>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                className='form-control'
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {formErrors.firstName && <div className='text-danger'>{formErrors.firstName}</div>}
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
                            {formErrors.lastName && <div className='text-danger'>{formErrors.lastName}</div>}
                        </div>

                        <div className='mb-2' style={{ textAlign: 'left' }}>
                            <label htmlFor='middleName'>Middle Name (Optional)</label>
                            <input
                                type='text'
                                name='middleName'
                                placeholder='Enter Middle Name'
                                className='form-control'
                                value={formData.middleName}
                                onChange={handleChange}
                            />
                        </div>

                        <button className='btn btn-primary mt-2' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupAgent;





// import { useState } from 'react';
// import { Form, Navbar } from 'react-bootstrap';
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

//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };

//     // const handleSubmit = async (event) => {
//     //     event.preventDefault();
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//     //         console.log(response.data);
//     //         navigate("/login");
//     //     } catch (error) {
//     //         console.error('There was an error registering!', error);
//     //         console.error('Error details:', error.response ? error.response.data : error.message);
//     //     }
//     // };
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/register', {
//                 ...formData,
//                 role: 'agent'  // Include role in the request
//             });
//             console.log(response.data);
//             navigate("/login");
//         } catch (error) {
//             console.error('There was an error registering!', error);
//             console.error('Error details:', error.response ? error.response.data : error.message);
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

//                         <button className='btn btn-primary mt-2' type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupAgent;

