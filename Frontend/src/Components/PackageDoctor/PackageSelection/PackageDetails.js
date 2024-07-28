import "./PackageDetails.css"
import React, { useState } from 'react';
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import "../DoctorSelection/DoctorComponent"
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import DoctorComponent from "../DoctorSelection/DoctorComponent";
import Breast from './../AssetPackage/Breastreshapingsurgery.png'
import Breast2 from './../AssetPackage/Breastaugmentationsurgery.png'
import Lip from './../AssetPackage/Lip.png'


function PackageDetails(){
    const [showComponent, setShowComponent] = useState(false);
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    // const handleClick1 = (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior
    //     navigate("/medicaltreatment"); // Use navigate to go to /home page
    // }

    // const handleClick2 = (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior
    //     navigate("/medicaltreatment"); // Use navigate to go to /home page
    // }

    // const handleClick3 = (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior
    //     navigate("/medicaltreatment"); // Use navigate to go to /home page
    // }
    
    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctorselect"); // Use navigate to go to /home page
    }

    const handleClick2 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctorrecommended"); // Use navigate to go to /home page
    }
    return(
        <div className="package-details">
            

            <h2 className="text-details">Package Details</h2> 
            {/* <p>TEST</p> */}

            <div className="packagecard-details">


                <Card className="t-card-details">
                <Card.Img className="t-image-details" src={Breast}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Breast Reshaping Surgery</Card.Title>
                    <Card.Text as="div" className="text-des-details mb-3" style={{ textAlign: 'center'}}>
                    {/* <p>This special price is</p>  */}
                    This special price is
                    <text style={{ color: 'red' }}> 49$</text>
                    </Card.Text>
                {/* <Button 
                className="button" 
                onClick={handleClick1} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    Select this package
                </Button> */}
                 
                {/* <button className='select-package-button' onClick={() => setShowComponent(true)}>
                Select this package
                </button>

                {showComponent && (
                <div className="overlay">
                    <div className="modal">
                    <p>Choose the doctor of you want or recommended from System?</p>
                    <button className='option-button' onClick={{handleClick}}>Choose it myself</button>
                    <button className='option-button' onClick={{handleClick2}}>Recommended</button>
                    {/* <button className='close-button' onClick={(handleClose) => setShowComponent(false)}>Close</button>
                    </div>
                </div>
                )} */}
                <DoctorComponent />
                </Card.Body>
                </Card>

                <Card className="t-card-details">
                <Card.Img className="t-image-details" src={Lip}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Lip filler</Card.Title>
                    <Card.Text style={{ textAlign: 'center'}}>
                    This special price is
                    <text style={{ color: 'red' }}> 49$</text>
                    </Card.Text>
                {/* <Button 
                className="button" 
                onClick={handleClick2} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    Select this package
                </Button> */}
                 <DoctorComponent />
                </Card.Body>
                </Card>


                <Card className="t-card-details">
                <Card.Img className="t-image-details" src={Breast2}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Breast augmentation surgery</Card.Title>
                    <Card.Text style={{ textAlign: 'center'}}>
                    This special price is <text style={{ color: 'red' }}>49$</text>
                    {/* <p style={{ color: 'red' }}>49$</p> */}
                    </Card.Text>
                {/* <Button 
                className="button" 
                onClick={handleClick3} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    Select this package
                </Button> */}
                <DoctorComponent />

                {/* <Button className="button" onClick={handleClick3}>View</Button> */}
                </Card.Body>
                </Card>

            

        
            </div>

        </div>
    )
}

export default PackageDetails


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Package() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Package;