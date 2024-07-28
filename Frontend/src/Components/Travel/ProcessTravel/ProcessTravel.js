// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
import './ProcessTravel.css'; // Assuming you have a CSS file for styles

function ProcessTravel(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/onboard"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-process-travel">
            
                {/* <div className='text' style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 15px 20px rgba(0, 0, 0, 0.1)' }}> */}
                    <h1 className="text mb-4">Process of Travel</h1>
                    <div className="travel-card-process-travel mt-5">
                    <div className="travel-card-header-process-travel">
                        <div className="plane-icon-process-travel">
                        {/* Icon would be placed here, potentially as an <img> tag or a font icon */}
                        </div>
                        <h2>Hotel Booking</h2>
                    </div>
                    <div className="travel-card-body-process-travel">
                        <p>Mr.Adisak Intana</p>
                    </div>
                    <div className="travel-card-status-process-travel">
                        <p>STATUS: Waiting for confirmed</p>
                    </div>
                    {/* <button className="onboard-button">On Board</button> */}

                    </div>


        
                    <div className="travel-card-process-travel mt-4">
                    <div className="travel-card-header-process-travel">
                        <div className="plane-icon-process-travel">
                        {/* Icon would be placed here, potentially as an <img> tag or a font icon */}
                        </div>
                        <h2>Taxi Booking</h2>
                    </div>
                    <div className="travel-card-body-process-travel">
                        <p>Mr.Adisak Intana</p>
                    </div>
                    <div className="travel-card-status-process-travel">
                        <p>STATUS: Waiting for confirmed</p>
                    </div>
                    {/* <button className="onboard-button">On Board</button> */}

                    </div>

                    <button className='btn btn-primary form-control mt-4 mb-4' onClick={handleClick}>Accept</button>
                    
               
            {/* </div>  */}
        </div>
    )
}

export default ProcessTravel


