import Navbar from "../../../Components/Navbar";
import Package from "../../../Components/PackageDoctor/PackageSelection/Package";
import Hero from "../../../Components/Hero";
import "../../../App.css";

function PackagePage(){
    return (
            <div className="testpicture">
            
            <Navbar />
            <Package />
            {/* <Destination />
            <Trip />
            <Footer/> */}
            </div>
    )
}


export default PackagePage;