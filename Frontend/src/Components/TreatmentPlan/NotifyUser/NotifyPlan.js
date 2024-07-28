// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { useNavigate } from 'react-router-dom'
import './NotifyPlan.css'; // Assuming you have a CSS file for styles

function NotifyPlan(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/during"); // Use navigate to go to /home page
    }

    const location = "Joy Hospital";
    const date = "19/02/2024";
    const time = "09:00 AM to 12:00 AM";
    const packageName = "Cosmetic Surgery";
    const doctor = "Dr. Adisak Intana";
    const contact = "02 123 456 7";

    return(
        <div className="card-container-Notify-Plan">
            <h2 className="text-notify mb-4">Notify Date & Time</h2> 
                <div className="travel-card-Notify-Plan">
                
                    <h5 className='mb-4' style={{ textAlign: 'center'}}>Notification Treatment Plan & Contact</h5>
                <div className="travel-card-body-Notify-Plan">
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Time:</strong> {time}</p>
                    <p><strong>Package:</strong> {packageName}</p>
                    <p><strong>Doctor:</strong> {doctor}</p>
                    <p><strong>Contact:</strong> {contact}</p>
                </div>
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-Notify-Plan mt-4">
                    <button className="btn btn-green-Notify-Plan" onClick={handleClick}>Accept</button>
                </div>
                </div>
        
        </div>
    )
}

export default NotifyPlan


