import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
import Departure from "../../../Components/Travel/ConfirmTravel/DepartureAirport/Departure";
import "../../../App.css";



function DeparturePage(){
    return (
        <div className="testpicture">
            <NavbarHome />
            <Departure />
        </div>
    )
}


export default DeparturePage;