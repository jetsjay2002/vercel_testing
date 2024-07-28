import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ActiveUsers() {
    const [activeUsers, setActiveUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActiveUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/active');
                console.log('Active users response:', response.data); // Log response data
                setActiveUsers(response.data.activeUsers);
            } catch (error) {
                console.error('Error fetching active users:', error);
                setError('Failed to fetch active users.');
            }
        };

        fetchActiveUsers();
    }, []);

    return (
        <div>
            <h2>Active Users</h2>
            {error && <p>{error}</p>}
            <ul>
                {activeUsers.length > 0 ? (
                    activeUsers.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))
                ) : (
                    <li>No active users</li>
                )}
            </ul>
        </div>
    );
}

export default ActiveUsers;
