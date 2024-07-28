import Navbar from "../../../Components/Navbar";
import DoctorRecommeded from "../../../Components/PackageDoctor/DoctorSelection/DoctorRecommeded";
import "../../../App.css";
function DoctorRecommededPage(){
    return (
            <div className="testpicture">
            <Navbar />
            <DoctorRecommeded />
            {/* <Destination />
            <Trip />
            <Footer/> */}
            </div>
    )
}


export default DoctorRecommededPage;