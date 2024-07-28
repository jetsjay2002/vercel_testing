const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRESQL_ADDON_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});


module.exports = pool;


// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: 'uo7xs5twhhyanncnv3zd',
//   host: 'b9zvih66lsxk1knuazla-postgresql.services.clever-cloud.com',
//   database: 'b9zvih66lsxk1knuazla',
//   password: 'uo7xs5twhhyanncnv3zd',
//   port: '50013',
// });

// module.exports = pool;
