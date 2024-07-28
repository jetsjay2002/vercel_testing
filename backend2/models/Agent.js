const pool = require('../config/db');
const bcrypt = require('bcrypt');

const createAgent = async (agentData) => {
    const { username, password, firstName, lastName, middleName } = agentData;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const query = `
        INSERT INTO agents (username, password, firstName, lastName, middleName, role)
        VALUES ($1, $2, $3, $4, $5, 'agent')
        RETURNING id, username, firstName, lastName, middleName, role
    `;
    const values = [username, hashedPassword, firstName, lastName, middleName];
    
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { createAgent };
