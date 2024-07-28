import Navbar from "../../../Components/Navbar";
import DoctorSelect from "../../../Components/PackageDoctor/DoctorSelection/DoctorSelect";
import "../../../App.css";
function DoctorSelectPage(){
    return (
            <div className="testpicture">
            <Navbar />
            <DoctorSelect />
            {/* <Destination />
            <Trip />
            <Footer/> */}
        </div>
    )
}


export default DoctorSelectPage;