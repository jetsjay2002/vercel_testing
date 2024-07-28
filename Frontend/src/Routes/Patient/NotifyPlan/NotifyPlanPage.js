// import Navbar from "../../Components/Navbar";
import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
import NotifyPlan from "../../../Components/TreatmentPlan/NotifyUser/NotifyPlan";
import "../../../App.css";

function NotifyPlanPage(){
    return (
            <div className="testpicture">
            {/* <Navbar /> */}
            <NavbarHome />
            <NotifyPlan />
            {/* <Destination />
            <Trip />
            <Footer/> */}
            </div>
    )
}


export default NotifyPlanPage;