// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { useNavigate } from 'react-router-dom'
import './Departure.css'; // Assuming you have a CSS file for styles

function Departure(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/clinicrating"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-departure">
            <h2 className="text-departure mb-4">Departure confirm</h2> 
                <div className="travel-card-departure">
               
                    <h3 className="mb-4" style={{ textAlign: 'center'}}>Departure Confirmation</h3>
   
                <div className="travel-card-body-departure">
                    <p>From: Phuket 10:00 AM</p>
                    <p>To: Newyour 11:00 AM</p>
                    <p>Date: 26 Febuary 2024 </p>
                </div>
                {/* <div className="travel-card-status-departure">
                    <p>STATUS: POST-JOURNEY</p>
                </div> */}
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-departure mt-3">
                    <button className="btn btn-green-departure" onClick={handleClick}>Departure From Airport</button>
                </div>
                </div>
        
        </div>
    )
}

export default Departure


