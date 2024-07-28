import "./Doctor.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import doctor1 from './../AssetDoctor/doctor1.png'
import doctor2 from './../AssetDoctor/doctor2.png'
import doctor3 from './../AssetDoctor/doctor3.png'

function DoctorRecommeded(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick1 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctordetails"); // Use navigate to go to /home page
    }

    const handleClick2 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctordetails"); // Use navigate to go to /home page
    }

    const handleClick3 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/doctordetails"); // Use navigate to go to /home page
    }

    return(
        <div className="package-doctor">
            

            <h2 className="text-doctor">Recommended</h2> 
            {/* <p>TEST</p> */}

            <div className="packagecard-doctor">


                <Card className="t-card">
                <Card.Img className="t-image" src={doctor1}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '16px', textAlign: 'center'}}>Dr.Passaratep Anurukpaliboon</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button-doctor" 
                onClick={handleClick1} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    View
                </Button>
                </Card.Body>
                </Card>

                <Card className="t-card-doctor">
                <Card.Img className="t-image" src={doctor2}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '1rem', textAlign: 'center'}}>Dr.Sithiporn Teachatamanant</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button-doctor" 
                onClick={handleClick2} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    View
                </Button>
                </Card.Body>
                </Card>


                <Card className="t-card-doctor">
                <Card.Img className="t-image-doctor" src={doctor3}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '1rem', textAlign: 'center'}}>Dr.Sanguan Kunaporn</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button-doctor" 
                onClick={handleClick3} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    View
                </Button>

                {/* <Button className="button" onClick={handleClick3}>View</Button> */}
                </Card.Body>
                </Card>

            </div>

        </div>
    )
}

export default DoctorRecommeded


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