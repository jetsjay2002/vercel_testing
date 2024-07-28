// // createTables.js
// const pool = require('./db');

// const createSessionTable = async () => {
//     const client = await pool.connect();

// const createSessionsTable = `
//             CREATE TABLE IF NOT EXISTS sessions (
//                 id SERIAL PRIMARY KEY,
//                 token TEXT UNIQUE NOT NULL,
//                 username VARCHAR(255) NOT NULL,
//                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//             );
//         `;
//         await client.query(createSessionsTable);
//         console.log('Sessions table created successfully');
        
//     } catch (err) {
//         console.error('Error creating tables:', err)
//     };

//     module.exports = { createSessionTable };