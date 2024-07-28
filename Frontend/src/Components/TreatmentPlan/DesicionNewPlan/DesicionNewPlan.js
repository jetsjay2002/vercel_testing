// import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { useNavigate } from 'react-router-dom'
import './DecisionNewPlan.css'; // Assuming you have a CSS file for styles

function DecisionNewPlan(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/onboard"); // Use navigate to go to /home page
    }

    return(
        <div className="card-container-decision-new-plan">
            <h2 className="text-decision-new-plan mb-4">Desicion of new plan</h2> 
                <div className="travel-card-decision-new-plan">
                <div className="travel-card-header-decision-new-plan">
                    
                    <h3>Butler Talk with doctor</h3>
                </div>

                <div className="travel-card-body-decision-new-plan">
                    <p>Butler will discuss will a doctor for new plan then will talk with you.</p>
                </div>
                <div className="travel-card-body-decision-new-plan">
                    <p>From: Newyork 11:00 AM</p>
                    <p>To: Phuket 12:00 AM</p>
                    <p>Date: 22 Febuary 2024 </p>
                </div>
                <div className="travel-card-status-decision-new-plan">
                    <p>STATUS: WAITING FOR APPROVAL</p>
                </div>
                {/* <button className="onboard-button">On Board</button> */}
                
                <div className="travel-card-buttons-decision-new-plan ">
                    <button className="btn btn-green-decision-new-plan" onClick={handleClick}>Accept</button>
                </div>
                </div>
        
        </div>
    )
}

export default DecisionNewPlan


