import Hero from "../../../Components/Hero";
import Navbar from "../../../Components/Navbar";
import { useState, useEffect } from 'react';
import axios from "axios"; // Make sure axios is imported

function Home() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve username from local storage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token'); // Assume the token is stored in local storage
            if (!token) {
                console.error('No token found');
                return;
            }

            await axios.post('http://localhost:5000/api/auth/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // Clear username and token from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('token');

            // Redirect user to login or home page
            window.location.href = '/login'; // Change to your desired route
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <Navbar />
            <Hero
                cNmae="hero"
                heroImg="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Welcome to Medical Tourism"
                text="Select Package Here!"
                buttonText="Package"
                url="/package"
                btnClass="show"
            />
            <div className="user-info">
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                <h2>Hello, {username ? username : 'Guest'}!</h2>
            </div>
        </>
    );
}

export default Home;
