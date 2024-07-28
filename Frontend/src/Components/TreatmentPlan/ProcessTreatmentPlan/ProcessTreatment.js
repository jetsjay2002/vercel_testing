// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
import './ProcessTreatment.css'
function ProcessTreatment(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/traveldetails"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-process-treat">
            <h2 className="text-process-treat mb-4">Process Of Treatment Plan</h2> 
                <div className="travel-card-process-treat">
            
                    <h3 className='mb-4' style={{ textAlign: 'center'}}>Procedure Request</h3>
                
                <div className="travel-card-body-process-treat">
                    <p className='mt-3'>Procedure: Cosmetic Surgey</p>
                    <p>Hospital: Siriroj Bangkok Hospital</p>
                    <p>Doctor: Dr.Adisak Intana</p>
                </div>
                <div className="travel-card-status-process-treat mt-4">
                    <p>Status: Waiting for Approval</p>
                </div>
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-process-treat">
                    <button className="btn btn-green-process-treat" onClick={handleClick}>Accept</button>
                </div>
                </div>
        </div>
    )
}

export default ProcessTreatment


