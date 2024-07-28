// import Hero from "../Components/Hero";
import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
import TravelDetails from "../../../Components/Travel/TravelDetails/TravelDetails";
import "../../../App.css";

function TravelDetailsPage(){
    return (
        <div className="testpicture">
            {/* <div  style={{ backgroundColor: 'grey',  }}></div> */}
        <NavbarHome />
        <TravelDetails />
        </div>
    )
}


export default TravelDetailsPage;