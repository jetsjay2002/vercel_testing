// import Hero from "../Components/Hero";
import NavbarHome from "../../../Components/NavBarItem/NavBarHome";
// import Navbar from "../../Components/Navbar";
// import Footer from "../Components/Footer";
// import ContactForm from "../Components/ContactForm";
import MedicalTreatment from "../../../Components/PackageDoctor/Request/MedicalTreatment";
import "../../../App.css";

function MedicalTreatmentPage(){
    return (
        <div className="testpicture">
        {/* <Navbar /> */}
        <NavbarHome />
        <MedicalTreatment />
        </div>
    )
}


export default MedicalTreatmentPage;