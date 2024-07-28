import "./Package.css"
// import PackageData from "./PackageData"
// import Trip1 from "../Assets/10.jpg"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
// const backgroundImageUrl = 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
import cusmetic from './../AssetPackage/cosmetic.png'
import detal from './../AssetPackage/dental.png'
import meta from './../AssetPackage/meta.png'
import plastic from './../AssetPackage/plasticsurgery.png'


function Package(){

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick1 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/packagedetails"); // Use navigate to go to /home page
    }

    const handleClick2 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/packagedetails"); // Use navigate to go to /home page
    }

    const handleClick3 = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/packagedetails"); // Use navigate to go to /home page
    }

    return(
        <div>

 
        <div className="package">
            
            <h2 className="text">Package/Procedure</h2> 
            {/* <p>TEST</p> */}

            <div className="packagecard">

                <Card className="t-card">
                <Card.Img className="t-image" src={cusmetic} />
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Cusmetic Surgey</Card.Title>
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
 
                    },
                }}>
                    View
                </Button>
                </Card.Body>
                </Card>

                <Card className="t-card">
                <Card.Img className="t-image" src={plastic}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Plastic Surgey Institure</Card.Title>
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


                <Card className="t-card">
                <Card.Img className="t-image" src={detal}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>Cusmetic Detal Center</Card.Title>
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

                <Card className="t-card">
                <Card.Img className="t-image" src={meta}/>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ textAlign: 'center'}}>MetaLife Anti-Aging</Card.Title>
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
        </div>
    )
}

export default Package


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