// import Hero from "../Components/Hero";
import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
import TravelDelay from "../../../Components/Travel/TravelDelay/TravelDelay";
import "../../../App.css";

function TravelDelayPage(){
    return (
        <div className="testpicture">
            {/* <div  style={{ backgroundColor: 'grey',  }}></div> */}
        <NavbarHome />
        <TravelDelay />
        </div>
    )
}


export default TravelDelayPage;