// import React, { useState } from 'react'
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'
// import './SignUp.css'
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';




// const titles = [
//     "Heart Disease:",
//     "Diabetes",
//     "Hypertension:",
//     "Deep Vein Thrombosis:",
//     "Cardiovascular Accidents:",
//     "Asthma:",
//     "Bleeding Tendency:",
//     "Hyper/hypothyroidism:",
//     "Adrenal Insufficiency:",
//     "Hepatitis:",
//     "HIV:",
//     "Keloid Scarring:",
//     "Cancer:",
//     "History of previous surgery:",
//     "Other:",
//     "Underlying Disease:",
//     "Drug Allergies:",
//     "Food Allergies:",
//     "Current Medications and Dosage:",
//     "Current vitamins, food nutritional supplements:"
//   ];

// function PatientMedicalConditions() {

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/login"); // Use navigate to go to /home page
//     }

//     const [selections, setSelections] = useState(
//         titles.map(() => ({ showInput: false }))
//       );
    
//       const handleSelectChange = (index, value) => {
//         const updatedSelections = selections.map((select, i) =>
//           i === index ? { ...select, showInput: value === "1" } : select
//         );
//         setSelections(updatedSelections);
//       };


//     // const initialSelectState = new Array(22).fill({ showInput: false });
//     // const [selections, setSelections] = useState(initialSelectState);
  
//     // const handleSelectChange = (index, value) => {
//     //   // Update the state for the specific select box
//     //   const updatedSelections = [...selections];
//     //   updatedSelections[index] = { ...updatedSelections[index], showInput: value === "1" };
//     //   setSelections(updatedSelections);
//     // };

//     return (
//         <div className='signup template d-flex justify-content-center align-items-center' style={{
//             backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//         }}>
//             <NavBarRegistration />
//             <div style={{ paddingTop: '4rem' }}>
//             <div className='form_container p-5 rounded bg-white my-5'>
//                 <form>
//                     <h1 className='text-center ms-3'>Sign Up</h1>
//                     <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Medical Condition</h6>


//                         <div>
//                         {titles.map((title, index) => (
//                             <div key={index} style={{ marginBottom: '20px' }}>
//                             <label htmlFor={`select${index}`} className="form-label">
//                                 {title}
//                             </label>
//                             <Form.Select 
//                                 id={`select${index}`} 
//                                 className="mb-2" 
//                                 onChange={(e) => handleSelectChange(index, e.target.value)}
//                             >
//                                 <option value="">-</option>
//                                 <option value="1">Yes</option>
//                                 <option value="2">No</option>
//                                 <option value="3">Not Know</option>
//                             </Form.Select>
//                             {selections[index].showInput && (
//                                 <input 
//                                 type="text" 
//                                 id={`detailsInput${index}`} 
//                                 className="form-control" 
//                                 placeholder="Specify" 
//                                 />
//                             )}
//                             </div>
//                         ))}
//                         </div>
//                     <button className='btn btn-primary mt-2' onClick={handleClick}>Submit</button>
//                 </form>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default PatientMedicalConditions



//----------version2
// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignUp.css';
// import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';

// // Define your conditions titles
// const titles = [
//     "Heart Disease",
//     "Diabetes",
//     "Hypertension",
//     "Deep Vein Thrombosis",
//     "Cardiovascular Accidents",
//     "Asthma",
//     "Bleeding Tendency",
//     "Hyperthyroidism",
//     "Adrenal Insufficiency",
//     "Hepatitis",
//     "HIV",
//     "Keloid Scarring",
//     "Cancer",
//     "History of Surgery",
//     "Other Conditions",
//     "Drug Allergies",
//     "Food Allergies",
//     "Current Medications",
//     "Current Vitamins"
// ];

// function PatientMedicalConditions() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState(
//         titles.reduce((acc, title) => {
//             acc[title.toLowerCase().replace(/ /g, '_')] = '';
//             return acc;
//         }, {})
//     );
//     const [selectionState, setSelectionState] = useState(
//         titles.reduce((acc, title) => {
//             acc[title.toLowerCase().replace(/ /g, '_')] = '0'; // 0 for default
//             return acc;
//         }, {})
//     );

//     // Handles changes in the select dropdown
//     const handleSelectChange = (title, value) => {
//         setSelectionState(prevState => ({
//             ...prevState,
//             [title.toLowerCase().replace(/ /g, '_')]: value
//         }));
//         if (value === "1") {
//             setFormData(prevState => ({
//                 ...prevState,
//                 [title.toLowerCase().replace(/ /g, '_')]: ''
//             }));
//         } else {
//             setFormData(prevState => ({
//                 ...prevState,
//                 [title.toLowerCase().replace(/ /g, '_')]: ''
//             }));
//         }
//     };

//     // Handles changes in the input fields
//     const handleInputChange = (title, value) => {
//         setFormData(prevState => ({
//             ...prevState,
//             [title.toLowerCase().replace(/ /g, '_')]: value
//         }));
//     };

//     const patientId = localStorage.getItem('patient_id');
//     if (!patientId) {
//         navigate('/signup');
//         return null;
//     }
//     console.log("Patient ID Medical", patientId);

//     // Handles form submission
//     // In the handleClick function
// const handleClick = async (event) => {
//     event.preventDefault();

//     // Prepare data to be sent to the backend
//     const dataToSubmit = {
//         patient_id: patientId,
//         ...Object.fromEntries(
//             Object.entries(formData).map(([key, value]) => [key, value.trim() || null])
//         )
//     };

//     try {
//         const response = await axios.post('http://localhost:5000/api/signup/medical', dataToSubmit);
//         console.log('Response from server:', response.data);
//         navigate("/login");
//     } catch (error) {
//         console.error('Error updating patient medical:', error.response?.data || error.message);
//     }
// };
//     return (
//         <div
//             className='signup template d-flex justify-content-center align-items-center'
//             style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}
//         >
//             <NavBarRegistration />
//             <div style={{ paddingTop: '4rem' }}>
//                 <div className='form_container p-5 rounded bg-white my-5'>
//                     <form>
//                         <h1 className='text-center ms-3'>Sign Up</h1>
//                         <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Medical Condition</h6>
//                         <div>
//                             {titles.map((title, index) => (
//                                 <div key={index} style={{ marginBottom: '20px' }}>
//                                     <label htmlFor={`select${index}`} className="form-label">
//                                         {title}
//                                     </label>
//                                     <Form.Select
//                                         id={`select${index}`}
//                                         className="mb-2"
//                                         value={selectionState[title.toLowerCase().replace(/ /g, '_')]}
//                                         onChange={(e) => handleSelectChange(title, e.target.value)}
//                                     >
//                                         <option value="0">-</option>
//                                         <option value="1">Yes</option>
//                                         <option value="2">No</option>
//                                         <option value="3">Not Known</option>
//                                     </Form.Select>
//                                     {selectionState[title.toLowerCase().replace(/ /g, '_')] === "1" && (
//                                         <input
//                                             type="text"
//                                             id={`detailsInput${index}`}
//                                             className="form-control"
//                                             placeholder="Specify"
//                                             value={formData[title.toLowerCase().replace(/ /g, '_')]}
//                                             onChange={(e) => handleInputChange(title, e.target.value)}
//                                         />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <button className='btn btn-primary mt-2' onClick={handleClick}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PatientMedicalConditions;



import NavBarRegistration from '../NavBarRegistration/NavBarRegistration';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const titles = [
    "Heart Disease", "Diabetes", "Hypertension", "Deep Vein Thrombosis", "Cardiovascular Accidents",
    "Asthma", "Bleeding Tendency", "Hyperthyroidism", "Adrenal Insufficiency", "Hepatitis",
    "HIV", "Keloid Scarring", "Cancer", "History of Surgery", "Other Conditions",
    "Drug Allergies", "Food Allergies", "Current Medications", "Current Vitamins"
];

function PatientMedicalConditions() {
    const navigate = useNavigate();
    const [selections, setSelections] = useState(
        titles.map(() => ({ value: 'No', details: '' }))
    );

    const handleSelectChange = (index, value) => {
        const updatedSelections = selections.map((select, i) =>
            i === index ? { ...select, value: value, details: value === 'Yes' ? select.details : '' } : select
        );
        setSelections(updatedSelections);
    };

    const handleInputChange = (index, value) => {
        const updatedSelections = selections.map((select, i) =>
            i === index ? { ...select, details: value } : select
        );
        setSelections(updatedSelections);
    };

    const patientId = localStorage.getItem('patient_id');
    if (!patientId) {
        navigate('/signup');
        return null;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataToSubmit = {
            patient_id: patientId,
            heart_disease: selections[0].value === 'Yes' ? selections[0].details : selections[0].value,
            diabetes: selections[1].value === 'Yes' ? selections[1].details : selections[1].value,
            hypertension: selections[2].value === 'Yes' ? selections[2].details : selections[2].value,
            deep_vein_thrombosis: selections[3].value === 'Yes' ? selections[3].details : selections[3].value,
            cardiovascular_accidents: selections[4].value === 'Yes' ? selections[4].details : selections[4].value,
            asthma: selections[5].value === 'Yes' ? selections[5].details : selections[5].value,
            bleeding_tendency: selections[6].value === 'Yes' ? selections[6].details : selections[6].value,
            hyperthyroidism: selections[7].value === 'Yes' ? selections[7].details : selections[7].value,
            adrenal_insufficiency: selections[8].value === 'Yes' ? selections[8].details : selections[8].value,
            hepatitis: selections[9].value === 'Yes' ? selections[9].details : selections[9].value,
            hiv: selections[10].value === 'Yes' ? selections[10].details : selections[10].value,
            keloid_scarring: selections[11].value === 'Yes' ? selections[11].details : selections[11].value,
            cancer: selections[12].value === 'Yes' ? selections[12].details : selections[12].value,
            history_of_surgery: selections[13].value === 'Yes' ? selections[13].details : selections[13].value,
            other_conditions: selections[14].value === 'Yes' ? selections[14].details : selections[14].value,
            drug_allergies: selections[15].value === 'Yes' ? selections[15].details : selections[15].value,
            food_allergies: selections[16].value === 'Yes' ? selections[16].details : selections[16].value,
            current_medications: selections[17].value === 'Yes' ? selections[17].details : selections[17].value,
            current_vitamins: selections[18].value === 'Yes' ? selections[18].details : selections[18].value,
        };
        console.log('Data to be sent:', dataToSubmit);

        try {
            await axios.post('http://localhost:5000/api/signup/medical', dataToSubmit);
            navigate("/login");
        } catch (error) {
            console.error('Error updating patient medical:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className='signup template d-flex justify-content-center align-items-center'
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <NavBarRegistration />
            <div style={{ paddingTop: '4rem' }}>
                <div className='form_container p-5 rounded bg-white my-5'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center ms-3'>Sign Up</h1>
                        <h6 className='mt-3 mb-2' style={{ textAlign: 'left' }}>Patient Medical Condition</h6>
                        <div>
                            {titles.map((title, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <label htmlFor={`select${index}`} className="form-label">{title}</label>
                                    <Form.Select
                                        id={`select${index}`}
                                        className="mb-2"
                                        onChange={(e) => handleSelectChange(index, e.target.value)}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                        <option value="Not Know">Not Know</option>
                                    </Form.Select>
                                    {selections[index].value === 'Yes' && (
                                        <input
                                            type="text"
                                            id={`detailsInput${index}`}
                                            className="form-control"
                                            placeholder="Specify"
                                            value={selections[index].details}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientMedicalConditions;







