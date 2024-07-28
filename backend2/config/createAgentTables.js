const pool = require('./db');

const createAgentsTable = async () => {
    const client = await pool.connect();
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS agents (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                firstName VARCHAR(50),
                lastName VARCHAR(50),
                middleName VARCHAR(50),
                role VARCHAR(50) DEFAULT 'agent'
            );
        `;
        await client.query(query);
        console.log('Agents table created successfully');
    } catch (err) {
        console.error('Error creating agents table:', err);
    } finally {
        client.release();
    }
};

// const createPatientsTable = async () => {
//     const client = await pool.connect();
//     try {
//         const query = `
//             CREATE TABLE IF NOT EXISTS patients (
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(50) UNIQUE NOT NULL,
//                 password VARCHAR(100) NOT NULL,
//                 firstName VARCHAR(50),
//                 lastName VARCHAR(50),
//                 middleName VARCHAR(50),
//                 role VARCHAR(50) DEFAULT 'patient'
//             );
//         `;
//         await client.query(query);
//         console.log('Patients table created successfully');
//     } catch (err) {
//         console.error('Error creating patients table:', err);
//     } finally {
//         client.release();
//     }
// };

module.exports = { createAgentsTable };
