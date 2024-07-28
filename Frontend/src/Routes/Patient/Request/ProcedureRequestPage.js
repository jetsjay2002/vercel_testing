// import Hero from "../Components/Hero";
import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
// import Navbar from "../../Components/Navbar";
// import Footer from "../Components/Footer";
// import ContactForm from "../Components/ContactForm";
import ProcedureRequest from "../../../Components/PackageDoctor/Request/ProcedureRequest";
import "../../../App.css";

function ProcedureRequestPage(){
    return (
        <div className="testpicture">
            <NavbarHome />
            <ProcedureRequest />
        </div>
    )
}


export default ProcedureRequestPage;