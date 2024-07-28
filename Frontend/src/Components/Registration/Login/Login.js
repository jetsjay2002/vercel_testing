// // import React from 'react'
// // import './login.css'
// // import { Link , useNavigate } from 'react-router-dom'
// // import FilterHospital from '../FilterHospital/FilterHospital';
// // // import { useHistory } from 'react-router-dom';
// // function Login() {
// //     // const history = useHistory();
// //     // const handleClick = () => {
// //     //     history.push("/home"); // Use history.push to navigate to /home page
// //     // }
// //     // const navigate = useNavigate(); // Use useNavigate hook for navigation

// //     // const handleClick = (event) => {
// //     //     event.preventDefault(); // Prevent the default form submission behavior
// //     //     navigate("/home"); // Use navigate to go to /home page
// //     // }

// //     return (
// //         <div className='login template d-flex justify-content-center align-items-center vh-100'>
// //             <div className='form_container-login p-5 rounded bg-white'>
// //                 <form>
// //                     <h3 className='text-center'>Sign In</h3>
// //                     <div className='mb-2' style={{ textAlign: 'left' }}>
// //                         <label htmlFor='email'>Email</label>
// //                         {/* <label htmlFor='email'>Email</label> */}
// //                         <input type='email' placeholder='Enter Email' className='form-control' />
// //                     </div>

// //                     <div className='mb-2' style={{ textAlign: 'left' }}>
// //                         <label htmlFor='password'>Password</label>
// //                         <input type='password' placeholder='Enter Password' className='form-control' />
// //                     </div>

// //                     <div className='mb-2' style={{ textAlign: 'left' }}>
// //                     <input type='checkbox' className='custom-control custom-checkbox' id='check' />
// //                     <label htmlFor='check' className='custom-input-label ms-2'>
// //                         Remember me
// //                     </label>
// //                     </div>

// //                     <div className='d-grid'>
// //                         {/* <button className='btn btn-primary' onClick={handleClick}>Sign in</button> */}
// //                         <FilterHospital/>
// //                     </div>


// //                     <p className='tex-end mt-2'>
// //                         {/* Forgot <a href="">Password?</a>  */}
// //                         Don't have an account?<Link to="/signup" className='ms-2'>Sign Up</Link>
// //                     </p>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Login

// import React from 'react'
// import './login.css'
// import { Link, useNavigate } from 'react-router-dom'
// import FilterHospital from '../FilterHospital/FilterHospital';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
// import FilterUser from '../FilterUser/FilterUser';
// import IHTS from '../NavBarRegistration/IHTS_Logo (2).png'
// function Login() {
//     return (
//         <div>
//             <NavBarRegistration />
       
//             <div className='login template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
            
//                 <div className='form_container-login p-5 rounded bg-white'>
//                     {/* <img classname="t-image-login" src={IHTS} /> */}
//                     {/* <img className="t-image-login" src={IHTS} /> */}

//                     <form>
//                         <h3 className='text-center'>Sign In</h3>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='username'>Username</label>
//                             <input type='username' placeholder='Enter username' className='form-control' />
//                         </div>
//                         <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <label htmlFor='password'>Password</label>
//                             <input type='password' placeholder='Enter Password' className='form-control' />
//                         </div>
//                         {/* <div className='mb-2' style={{ textAlign: 'left' }}>
//                             <input type='checkbox' className='custom-control custom-checkbox' id='check' />
//                             <label htmlFor='check' className='custom-input-label ms-2'> Remember me </label>
//                         </div> */}
//                         <div className='d-grid'>
//                             <FilterHospital />
//                         </div>
//                         <div className='d-grid'>
//                             <FilterUser />
//                         </div>

//                         {/* <p className='tex-end mt-2'>
//                             Don't have an account?<Link to="/signup" className='ms-2'>Sign Up</Link>
//                         </p> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
// import FilterHospital from '../FilterHospital/FilterHospital';

// function Login() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });
//     const [error, setError] = useState('');
//     const [formErrors, setFormErrors] = useState({
//         username: '',
//         password: ''
//     });
//     const [modalShow, setModalShow] = useState(false); // State to manage FilterHospital modal visibility
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         setFormErrors({
//             ...formErrors,
//             [name]: '' // Clear the error when the user starts typing
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validation
//         const newFormErrors = {
//             username: formData.username ? '' : 'Username is required',
//             password: formData.password ? '' : 'Password is required'
//         };

//         setFormErrors(newFormErrors);

//         if (newFormErrors.username || newFormErrors.password) {
//             return; // Stop submission if there are validation errors
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//             console.log(response.data);
//             localStorage.setItem('token', response.data.token); // Save token
//             setModalShow(true); // Show FilterHospital modal after successful login
//         } catch (error) {
//             console.error('There was an error logging in!', error);
//             setError('Username or password incorrect'); // Set error message
//         }
//     };

//     const handleSignUpClick = () => {
//         navigate("/signup"); // Redirect to signup page
//     };

//     const handleModalClose = () => {
//         setModalShow(false);
//     };

//     return (
//         <div>
//             <div className='login template d-flex justify-content-center align-items-center vh-100' style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <NavBarRegistration />
//                 <div className='form_container p-5 rounded bg-white'>
//                     <form onSubmit={handleSubmit}>
//                         <h1 className='text-center ms-3'>Login</h1>
//                         {error && <div className='alert alert-danger'>{error}</div>}
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
//                             {formErrors.username && <div className='text-danger'>{formErrors.username}</div>}
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
//                             {formErrors.password && <div className='text-danger'>{formErrors.password}</div>}
//                         </div>

//                         <button className='btn btn-primary mt-2' type='submit'>Submit</button>
//                         <button
//                             className='btn btn-secondary mt-2 ms-2'
//                             type='button'
//                             onClick={handleSignUpClick}
//                         >
//                             Sign Up
//                         </button>
//                     </form>
//                 </div>
//             </div>

//             {modalShow && <FilterHospital show={modalShow} onHide={handleModalClose} />}
//         </div>
//     );
// }

// export default Login;


///------------------------------------------
/// update login 2 role


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
import FilterHospital from '../FilterHospital/FilterHospital';
import FilterUser from '../FilterUser/FilterUser';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({
        username: '',
        password: ''
    });
    const [modalShow, setModalShow] = useState(false); // State to manage FilterHospital modal visibility
    const [signupModalShow, setSignupModalShow] = useState(false); // State for FilterUser modal
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: '' // Clear the error when the user starts typing
        });
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     // Validation
    //     const newFormErrors = {
    //         username: formData.username ? '' : 'Username is required',
    //         password: formData.password ? '' : 'Password is required'
    //     };

    //     setFormErrors(newFormErrors);

    //     if (newFormErrors.username || newFormErrors.password) {
    //         return; // Stop submission if there are validation errors
    //     }
        
    //     try {
    //         // Try agent login first
    //         const response = await axios.post('http://localhost:5000/api/auth/login', formData);
    //         if (response.status === 200) {
    //             console.log(response.data);

    //             // If login is successful and the role is 'agent'
    //             localStorage.setItem('token', response.data.token); // Save token
    //             navigate('/agent'); // Redirect to agent page
    //             return;
    //         }
    //     } catch (error) {
    //         console.error('Agent login error:', error);
    //     }

    //     try {
    //         // Try patient login if agent login fails
    //         const response = await axios.post('http://localhost:5000/api/patients/login', formData);
    //         if (response.status === 200) {
    //             // If login is successful and the role is 'patient'
    //             localStorage.setItem('token', response.data.token); // Save token
    //             setModalShow(true); // Show FilterHospital modal for patients
    //         }
    //     } catch (error) {
    //         console.error('Patient login error:', error);
    //         setError('Username or password incorrect'); // Set error message
    //     }
    // };
    const [userStatus, setUserStatus] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newFormErrors = {
            username: formData.username ? '' : 'Username is required',
            password: formData.password ? '' : 'Password is required'
        };

        setFormErrors(newFormErrors);

        if (newFormErrors.username || newFormErrors.password) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            const user = response.data;

            localStorage.setItem('token', user.token);
            localStorage.setItem('username', user.username);

            if (user.role === 'agent') {
                navigate('/agent');
            } else if (user.role === 'patient') {
                navigate('/home');
            }

            
        } catch (error) {
            console.error('Login error:', error);
            setError('Username or password incorrect');
        }
    };
    

    const handleSignUpClick = () => {
        setSignupModalShow(true); // Show FilterUser modal
    };

    const handleModalClose = () => {
        setModalShow(false);
    };

    const handleSignupModalClose = () => {
        setSignupModalShow(false);
    };
    

    return (
        <div>
            <div className='login template d-flex justify-content-center align-items-center vh-100' style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <NavBarRegistration />
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center ms-3'>Login</h1>
                        {error && <div className='alert alert-danger'>{error}</div>}
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

                        <button className='btn btn-primary mt-2' type='submit'>Submit</button>
                        <button
                            className='btn btn-secondary mt-2 ms-2'
                            type='button'
                            onClick={handleSignUpClick}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            {modalShow && <FilterHospital show={modalShow} onHide={handleModalClose} />}
            {signupModalShow && <FilterUser show={signupModalShow} onHide={handleSignupModalClose} />}        </div>
    );
}

export default Login;











