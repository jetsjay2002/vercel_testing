import "./DoctorSelect.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import {Card , Form} from 'react-bootstrap';
import {data} from './DoctorData.js'
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import doctor1 from './../AssetDoctor/doctor1.png'
import doctor2 from './../AssetDoctor/doctor2.png'
import doctor3 from './../AssetDoctor/doctor3.png'


function DoctorSelect(){

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

    // const [search, setSearch] = useState('');
    // console.log(search)
    const [query, setQuery] = useState("")

    return(
        <div className="package-doctor-select">
{/* 
            <Form>
                <InputGroup className="mt-4">
                    <Form.Control onChange={(e) => setQuery(e.target.value)} placeholder='Search Doctor' />
                </InputGroup>
            </Form> */}

            <h2 className="text-doctor-select">Select a doctor</h2> 
            {/* <p>TEST</p> */}

            <input className="searchdoctor-doctor-select form-control mt-4" placeholder="Search the doctor" onChange={event => setQuery(event.target.value)} />
                {
                data.filter(post => {
                    if (query === '') {
                    return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                    }
                }).map((post) => {
                    <div key={post.name}>
                    <p>{post.name}</p>
                    <p>{post.last_name}</p>
                    </div>
                })
                }
                        

            <div className="packagecard-doctor-select">


                <Card className="t-card-doctor-select">
                <Card.Img className="t-image-doctor-select" src={doctor1}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '16px', textAlign: 'center'}}>Dr.Passaratep Anurukpaliboon</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button" 
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

                <Card className="t-card-doctor-select">
                <Card.Img className="t-image-doctor-select" src={doctor2} />
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '1rem', textAlign: 'center'}}>Dr.Sithiporn Teachatamanant</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button" 
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


                <Card className="t-card-doctor-select">
                <Card.Img className="t-image-doctor-select" src={doctor3}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '1rem', textAlign: 'center'}}>Dr.Sanguan KunapornI</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                <Button 
                className="button" 
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

export default DoctorSelect