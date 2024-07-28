// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"

import { useNavigate } from 'react-router-dom'
import './OnBoard.css'; // Assuming you have a CSS file for styles

function OnBoard(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/statusonboard"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-onboard">
            <h2 className="text-onboard mb-4">Confirm Your Travel</h2> 
            
                <div className="travel-card-onboard">

                    <h3 className='mb-4' style={{ textAlign: 'center'}}>Travel Confirm</h3>
                <div className="travel-card-body-onboard">
                    <p className='mt-3'>From: Newyork 09:00 AM</p>
                    <p>To: Phuket 10:00 AM</p>
                    <p>Date: 19 February 2024</p>
                </div>

                {/* <div className="travel-card-status-status-onboard mt-4">
                    <p>STATUS: PRE-JOURNEY</p>
                </div> */}
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-onboard mt-4">
                    <button className="btn btn-green-onboard" onClick={handleClick}>On Board</button>
                </div>
                </div>

        </div>
    )
}

export default OnBoard


// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// import './OnBoard.css'; // Assuming you have a CSS file for styles

// function OnBoard(){

//     const navigate = useNavigate(); // Use useNavigate hook for navigation

//     const handleClick = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         navigate("/statusonboard"); // Use navigate to go to /home page
//     }

//     return(
//         <div className="from-control">
//             <div className='text' style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 15px 20px rgba(0, 0, 0, 0.1)' }}>
//             <h2 className="mb-4">Confirm Your Travel</h2> 
//                 <div className="travel-card-onboard mt-5">
//                 <div className="travel-card-header-onboard mt-2">
//                     <div className="plane-icon-onboard">
//                     {/* Icon would be placed here, potentially as an <img> tag or a font icon */}
//                     </div>
//                     <h3 className='mt-3'>Travel Confirm</h3>
//                 </div>
//                 <div className="travel-card-body-onboard mt-4">
//                     <p className='mt-4'>From: Newyork 09:00 AM</p>
//                     <p>To: Phuket 10:00 AM</p>
//                     <p className='mb-4'>Date: 19 February 2024</p>
//                 </div>
//                 <div className="travel-card-status-onboard mt-4 mb-4">
//                     <p>STATUS: PRE-JOURNEY</p>
//                 </div>
//                 {/* <button className="onboard-button">On Board</button> */}
                
//                 {/* <div className="travel-card-buttons-onboard">
//                     <button className="btn btn-green-onboard" onClick={handleClick}>On Board</button>
//                 </div> */}
//                 </div>
//                 <div className="travel-card-buttons-onboard mt-5 mb-5">
//                     <button className="btn btn-green-onboard" onClick={handleClick}>On Board</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OnBoard





