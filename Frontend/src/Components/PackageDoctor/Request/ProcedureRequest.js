import NavbarHome from "../../NavBarItem/NavBarHome";
import "./ALLRequest.css"
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import Habit  from "./Habit";
import BreasySurgeyDetails from "./BreastSurgeyDetails";
import WomenForm from "./WomenForm";
function ProcedureRequest(){
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/processtreatment"); // Use navigate to go to /home page
    }

    return(
        // <div style={{
        //     backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // }}>
        <div className="card-picture">
        <div className="card-container-request" >
            <div className="from-container">
                <NavbarHome />
                <div className='text-request' style={{ backgroundColor: '#ffffff;', padding: '20px', borderRadius: '20px', boxShadow: '0 5px 25px 2px rgba(0, 0, 0, 0.11)' }}>
                    <h1>Requested Procedure</h1>
                    <form>
                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Procedure</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='text' placeholder='Cosmetic Surgey' className='form-control' />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Preferred Surqeon</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='text' placeholder='Dr.Adisak Intana' className='form-control' />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Additional Comments</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='text' placeholder='Enter your Additional Comments' className='form-control' />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Preferred Date of Surgery</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='date' placeholder='Enter your Preferred Date of Surgery' className='form-control' />
                        </div>


                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Arrive Date to Phuket, if know</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='date' placeholder='Enter your Arrive Date to Phuket' className='form-control' />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                                <label htmlFor='fname'>Departure Date from Phuket</label>
                                {/* <label htmlFor='email'>Email</label> */}
                                <input type='date' placeholder='Enter your Departure Date from Phuket' className='form-control' />
                        </div>


                        <Habit />
                        <WomenForm />
                        <BreasySurgeyDetails />

                        <Button 
                        className="button mt-4" 
                        onClick={handleClick} 
                        sx={{ 
                            backgroundColor: '#2563eb', 
                            color: 'white', 
                            '&:hover': {
                                backgroundColor: 'darkblue', // Darken the button on hover
                            }
                        }}>
                            Submit
                        </Button>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}

export default ProcedureRequest