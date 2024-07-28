// import Navbar from "../../Components/Navbar";
import NavbarPackage from "../../../Components/PackageDoctor/PackageSelection/NavBarPackage";
import PackageDetails from "../../../Components/PackageDoctor/PackageSelection/PackageDetails";
import "../../../App.css";
function PackageDetailsPage(){
    return (
            <div className="testpicture">
            {/* <Navbar /> */}
            <NavbarPackage />
            <PackageDetails />
            {/* <Destination />
            <Trip />
            <Footer/> */}
        </div>
    )
}


export default PackageDetailsPage;