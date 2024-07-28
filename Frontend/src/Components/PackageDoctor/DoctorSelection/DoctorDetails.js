import "./DoctorDetails.css"
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import NavbarDoctorDetails from "./NavBarDoctorDetails";
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
import doctor1 from './../AssetDoctor/doctor1.png'
function DoctorDetails (){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/procedurerequest"); // Use navigate to go to /home page
    }


    return (
        <div className="package-doctor-details">
              {/* <nav className="NavbarItems">
                <h1 className="navbar-logo">Andaman Medical Tourism</h1>
            </nav> */}

            <NavbarDoctorDetails />
{/* 
            <Row className="mt-4 mb-4">
                <Col xs={20} md={4}>
                    <Image src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" thumbnail />
                </Col>
                <h2 className="mb-3">Dr.Adisak Intana</h2>
            </Row>

            <div class="biography-container">
                <h2 className="mb-3">Biography</h2>
                <p className="">Dr. Adisak Intana (Implantologist), is a renowned cardiologist in America, with 20 years of experience in the field.</p>
            </div> */}

            {/* <div className="package-doctor-details"> */}

            {/* <h2 className="text-doctor-details">Doctor Details</h2>  */}
            <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Img className="t-image-doctor-details" src={doctor1} />
                </Card.Body>

                <h2 className="mb-3" style={{ textAlign: 'center',fontSize: '1.3rem' }}>Dr.Passaratep Anurukpaliboon</h2>

                <h2 className="mt-3">Biography</h2>
                <Card.Body>
                    {/* <Card.Text> */}
                        <p>
                            Dr.Adisak Intana (Implantologist), is a renowned cardiologist in America, with 20 years of experience in the field.
                        </p>
                    {/* </Card.Text> */}
                </Card.Body>

                <h2 className="mt-2 mb-4" style={{ textAlign: 'left' }}>Speciaility</h2> 
                <Card className="t-card-doctor-details">
                <Card.Body>
                    {/* <Card.Img className="HeroImg" src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

                    <Card.Text className="text-center-doctor-details">Cardiologists</Card.Text>
                </Card.Body>
                </Card>

                <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Text className="text-center-doctor-details">Dental Surgeon</Card.Text>
                </Card.Body>
                </Card>
            {/* </div> */}


            <h2 className="mb-4" style={{ textAlign: 'left' }}>Language</h2> 
            {/* <p>TEST</p> */}

            {/* <div className="packagecard"> */}

                <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Text className="text-center-doctor-details">THAI</Card.Text>
                </Card.Body>
                </Card>

                <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Text className="text-center-doctor-details">ENGLSIH</Card.Text>
                </Card.Body>
                </Card>
            {/* </div> */}


            <h2 className="mb-4" style={{ textAlign: 'left' }}>Education</h2> 
            {/* <p>TEST</p> */}

            {/* <div className="packagecard"> */}

                <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Text className="text-center-doctor-details"> Faculty of Medicine Prince of Songkla University</Card.Text>
                </Card.Body>
                </Card>

            
            <h2 className="mb-4" style={{ textAlign: 'left' }}>Qualification</h2> 
            {/* <p>TEST</p> */}

            {/* <div className="packagecard"> */}

                <Card className="t-card-doctor-details">
                <Card.Body>
                    <Card.Text className="text-center-doctor-details">Orthodontics brach Prince of Songkla University</Card.Text>
                </Card.Body>
                </Card>
            </Card>
            <Button 
                className="button" 
                onClick={handleClick} 
                sx={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: 'darkblue', // Darken the button on hover
                    }
                }}>
                    Select This Doctor
                </Button>
        </div>

    )
}

export default DoctorDetails



