// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { useNavigate } from 'react-router-dom'
import './DuringTreatmentPlan.css'; // Assuming you have a CSS file for styles

function DuringTreatment(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/servicerating"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-during-treatment">
            <h2 className="text-during-stay mb-4">Treatment Plan</h2> 
                <div className="travel-card-during-treatment">
                <div className="travel-card-header-during-treatment">
                    
                    <h3>Cardiac Catheterization</h3>
                </div>

                <div className="travel-card-body-during-treatment">
                    <p>Hoispital : Adisak Hospital Phuket</p>
                    <p>Doctor Adisak Intana</p>
                    <p>Cardiologists</p>
                </div>
                {/* <div className="travel-card-status-during-treatment">
                    <p>STATUS: DURING STAY</p>
                </div> */}
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-during-treatment mt-4">
                    <button className="btn btn-green-during-treatment" onClick={handleClick}>FINISH TREATMENT</button>
                </div>
                </div>
        
        </div>
    )
}

export default DuringTreatment


