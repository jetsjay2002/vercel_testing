// // // const express = require('express');
// // // const cors = require('cors');
// // // const pool = require('./config/db');
// // // const createAgentsTable = require('./config/createAgentTable');
// // // const jwt = require('jsonwebtoken');
// // // const bcrypt = require('bcrypt');
// // // require('dotenv').config();

// // // const app = express();
// // // const jwtSecret = process.env.JWT_SECRET;
// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors()); // Add this line to enable CORS

// // // // Table Creation
// // // const createTables = async () => {
// // //     try {
// // //         await createAgentsTable();
// // //     } catch (error) {
// // //         console.error('Error creating tables:', error);
// // //     }
// // // };

// // // // Routes
// // // app.post('/api/auth/register', async (req, res) => {
// // //   const { username, password, firstName, lastName, middleName } = req.body;
// // //   try {
// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const query = 'INSERT INTO agents (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
// // //     const values = [username, hashedPassword, firstName, lastName, middleName, 'agent'];
// // //     const { rows } = await pool.query(query, values);

// // //     const agent = rows[0];
// // //     const token = jwt.sign({ id: agent.id, role: agent.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

// // //     res.status(201).json({ token });
// // //   } catch (err) {
// // //     console.error('Error during registration:', err); // Detailed error logging
// // //     res.status(500).json({ message: 'Error registering agent', error: err.message });
// // // }
// // // });

// // // // Start server and create tables
// // // const port = 5000;
// // // app.listen(port, async () => {
// // //     console.log(`Server running on port ${port}`);
// // //     console.log('JWT Secret:', jwtSecret);
// // //     await createTables();
// // // });


// // // const express = require('express');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');
// // // const pool = require('./config/db');
// // // const { createAgentsTable, createPatientsTable } = require('./config/createTables');
// // // const userRoutes = require('./routes/authRoutes');

// // // const app = express();
// // // const port = 5000;

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Create tables
// // // const createAllTables = async () => {
// // //     try {
// // //         await createPatientsTable();
// // //         await createAgentsTable();
// // //         console.log('All tables created successfully');
// // //     } catch (err) {
// // //         console.error('Error creating tables:', err);
// // //     }
// // // };

// // // createAllTables();
// // // // Route to check the database connection
// // // app.get('/api/check-db', async (req, res) => {
// // //     try {
// // //         const result = await pool.query('SELECT NOW()');
// // //         res.status(200).json({ message: 'Database connection successful', time: result.rows[0].now });
// // //     } catch (error) {
// // //         console.error('Error connecting to the database:', error);
// // //         res.status(500).json({ error: 'Database connection error' });
// // //     }
// // // });

// // // // Route for user registration
// // // app.post('/api/auth/register', async (req, res) => {
// // //     const { username, password, firstName, lastName, middleName, role } = req.body;

// // //     if (!username || !password || !role) {
// // //         return res.status(400).json({ message: 'Username, password, and role are required' });
// // //     }

// // //     try {
// // //         const result = await pool.query(
// // //             'INSERT INTO users (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
// // //             [username, password, firstName, lastName, middleName, role]
// // //         );
// // //         res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
// // //     } catch (error) {
// // //         console.error('Error registering user:', error);
// // //         res.status(500).json({ error: 'Internal server error' });
// // //     }
// // // });

// // // app.listen(port, () => {
// // //     console.log(`Server running at http://localhost:${port}`);
// // // });


// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const pool = require('./config/db');
// // const { createAgentsTable } = require('./config/createAgentTables');
// // const { createPatientsTable } = require('./config/createPatientTables');

// // const userRoutes = require('./routes/authRoutes');
// // const patientRoutes = require('./routes/patientRoutes')
// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Create tables
// // const createAllTables = async () => {
// //     try {
// //         await createPatientsTable();
// //         await createAgentsTable();
// //         console.log('All tables created successfully');
// //     } catch (err) {
// //         console.error('Error creating tables:', err);
// //     }
// // };

// // createAllTables();

// // // Routes
// // app.use('/api/auth', userRoutes);
// // app.use('/patients', patientRoutes);

// // app.get('/test', (req, res) => {
// //     res.send('Server is up and running');
// // });


// // //------------------------agent signup ------------------------------------------------
// // // Handle user registration
// // app.post('/api/auth/register', async (req, res) => {
// //     const { username, password, firstName, lastName, middleName, role } = req.body;

// //     // Log incoming request data
// //     console.log('Register request data:', req.body);

// //     // Validate required fields
// //     if (!username || !password || !role) {
// //         return res.status(400).json({ message: 'Username, password, and role are required' });
// //     }

// //     try {
// //         const result = await pool.query(
// //             'INSERT INTO users (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
// //             [username, password, firstName, lastName, middleName, role]
// //         );
// //         res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
// //     } catch (error) {
// //         console.error('Error registering user:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });



// // //------------------------patient signup ------------------------------------------------
// // // Endpoint for saving account information
// // app.post('/api/signup/account', async (req, res) => {
// //     const { username, password } = req.body;
// //     try {
// //         const result = await pool.query(
// //             'INSERT INTO PatientAccount (username, password) VALUES ($1, $2) RETURNING id',
// //             [username, password]
// //         );
// //         res.json({ patient_id: result.rows[0].id });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// // // Endpoint for saving contact information
// // app.post('/api/signup/contact', async (req, res) => {
// //     const {
// //         patient_id,
// //         address1,
// //         address2,
// //         address3,
// //         city,
// //         country,
// //         postal_code,
// //         email,
// //         tel_home,
// //         tel_mobile
// //     } = req.body;
// //     try {
// //         await pool.query(
// //             'INSERT INTO PatientContact (patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
// //             [patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile]
// //         );
// //         res.sendStatus(200);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// // // Endpoint for saving emergency contact information
// // app.post('/api/signup/emergency', async (req, res) => {
// //     const {
// //         patient_id,
// //         first_name,
// //         last_name,
// //         tel_home,
// //         tel_mobile
// //     } = req.body;
// //     try {
// //         await pool.query(
// //             'INSERT INTO PatientEmergencyContact (patient_id, first_name, last_name, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5)',
// //             [patient_id, first_name, last_name, tel_home, tel_mobile]
// //         );
// //         res.sendStatus(200);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// // // Endpoint for saving patient details
// // app.post('/api/signup/details', async (req, res) => {
// //     const {
// //         patient_id,
// //         first_name,
// //         last_name,
// //         middle_name,
// //         gender,
// //         age,
// //         date_of_birth,
// //         height,
// //         weight,
// //         nationality,
// //         passport_no
// //     } = req.body;
// //     try {
// //         await pool.query(
// //             'INSERT INTO PatientDetails (patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
// //             [patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no]
// //         );
// //         res.sendStatus(200);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// // // Endpoint for saving medical conditions
// // app.post('/api/signup/medical', async (req, res) => {
// //     const {
// //         patient_id,
// //         heart_disease,
// //         diabetes,
// //         hypertension,
// //         deep_vein_thrombosis,
// //         cardiovascular_accidents,
// //         asthma,
// //         bleeding_tendency,
// //         hyperthyroidism,
// //         adrenal_insufficiency,
// //         hepatitis,
// //         hiv,
// //         keloid_scarring,
// //         cancer,
// //         history_of_surgery,
// //         other_conditions,
// //         drug_allergies,
// //         food_allergies,
// //         current_medications,
// //         current_vitamins
// //     } = req.body;
// //     try {
// //         await pool.query(
// //             'INSERT INTO PatientMedicalConditions (patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
// //             [patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins]
// //         );
// //         res.sendStatus(200);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server running at http://localhost:${port}`);
// // });



// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const pool = require('./config/db');
// const { createAgentsTable } = require('./config/createAgentTables');
// const { createPatientsTable } = require('./config/createPatientTables');

// const userRoutes = require('./routes/authRoutes');
// const patientRoutes = require('./routes/patientRoutes');
// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create tables
// const createAllTables = async () => {
//     try {
//         await createPatientsTable();
//         await createAgentsTable();
//         console.log('All tables created successfully');
//     } catch (err) {
//         console.error('Error creating tables:', err);
//     }
// };

// createAllTables();

// // Routes
// app.use('/api/auth', userRoutes);
// app.use('/api/patients', patientRoutes);

// app.get('/test', (req, res) => {
//     res.send('Server is up and running');
// });

// // Agent signup
// app.post('/api/auth/register', async (req, res) => {
//     const { username, password, firstName, lastName, middleName, role } = req.body;

//     console.log('Register request data:', req.body);

//     if (!username || !password || !role) {
//         return res.status(400).json({ message: 'Username, password, and role are required' });
//     }

//     try {
//         const result = await pool.query(
//             'INSERT INTO users (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//             [username, password, firstName, lastName, middleName, role]
//         );
//         res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Patient signup endpoints

// // Account information
// app.post('/api/signup/account', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO PatientAccount (username, password) VALUES ($1, $2) RETURNING id',
//             [username, password]
//         );
//         res.json({ patient_id: result.rows[0].id });
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Contact information
// app.post('/api/signup/contact', async (req, res) => {
//     const {
//         patient_id,
//         address1,
//         address2,
//         address3,
//         city,
//         country,
//         postal_code,
//         email,
//         tel_home,
//         tel_mobile
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientContact (patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
//             [patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Emergency contact information
// app.post('/api/signup/emergency', async (req, res) => {
//     const {
//         patient_id,
//         first_name,
//         last_name,
//         tel_home,
//         tel_mobile
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientEmergencyContact (patient_id, first_name, last_name, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5)',
//             [patient_id, first_name, last_name, tel_home, tel_mobile]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Patient details
// app.post('/api/signup/details', async (req, res) => {
//     const {
//         patient_id,
//         first_name,
//         last_name,
//         middle_name,
//         gender,
//         age,
//         date_of_birth,
//         height,
//         weight,
//         nationality,
//         passport_no
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientDetails (patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
//             [patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Medical conditions
// app.post('/api/signup/medical', async (req, res) => {
//     const {
//         patient_id,
//         heart_disease,
//         diabetes,
//         hypertension,
//         deep_vein_thrombosis,
//         cardiovascular_accidents,
//         asthma,
//         bleeding_tendency,
//         hyperthyroidism,
//         adrenal_insufficiency,
//         hepatitis,
//         hiv,
//         keloid_scarring,
//         cancer,
//         history_of_surgery,
//         other_conditions,
//         drug_allergies,
//         food_allergies,
//         current_medications,
//         current_vitamins
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientMedicalConditions (patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
//             [patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// Import necessary modules
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const pool = require('./config/db');
// const { createAgentsTable } = require('./config/createAgentTables');
// const { createPatientsTable } = require('./config/createPatientTables');

// const userRoutes = require('./routes/authRoutes');
// const patientRoutes = require('./routes/patientRoutes');
// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create tables
// const createAllTables = async () => {
//     try {
//         await createPatientsTable();
//         await createAgentsTable();
//         console.log('All tables created successfully');
//     } catch (err) {
//         console.error('Error creating tables:', err);
//     }
// };

// createAllTables();

// // Routes
// app.use('/api/auth', userRoutes);
// app.use('/api/patients', patientRoutes);

// app.get('/test', (req, res) => {
//     res.send('Server is up and running');
// });

// //login

// // Login endpoint
// app.post('/api/auth/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user exists
//         const result = await pool.query(
//             'SELECT * FROM users WHERE username = $1',
//             [username]
//         );

//         if (result.rows.length === 0) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         const user = result.rows[0];

//         // Check password
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         // Return user role
//         res.status(200).json({ role: user.role });

//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// // Agent signup
// app.post('/api/auth/register', async (req, res) => {
//     const { username, password, firstName, lastName, middleName, role } = req.body;

//     console.log('Register request data:', req.body);

//     if (!username || !password || !role) {
//         return res.status(400).json({ message: 'Username, password, and role are required' });
//     }

//     try {
//         const result = await pool.query(
//             'INSERT INTO users (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//             [username, password, firstName, lastName, middleName, role]
//         );
//         res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Patient signup endpoints

// // Account information
// app.post('/api/signup/account', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO PatientAccount (username, password) VALUES ($1, $2) RETURNING id',
//             [username, password]
//         );
//         res.json({ patient_id: result.rows[0].id });
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Contact information
// app.post('/api/signup/contact', async (req, res) => {
//     const {
//         patient_id,
//         address1,
//         address2,
//         address3,
//         city,
//         country,
//         postal_code,
//         email,
//         tel_home,
//         tel_mobile
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientContact (patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
//             [patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Emergency contact information
// app.post('/api/signup/emergency', async (req, res) => {
//     const {
//         patient_id,
//         first_name,
//         last_name,
//         tel_home,
//         tel_mobile
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientEmergencyContact (patient_id, first_name, last_name, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5)',
//             [patient_id, first_name, last_name, tel_home, tel_mobile]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Patient details
// app.post('/api/signup/details', async (req, res) => {
//     const {
//         patient_id,
//         first_name,
//         last_name,
//         middle_name,
//         gender,
//         age,
//         date_of_birth,
//         height,
//         weight,
//         nationality,
//         passport_no
//     } = req.body;
//     try {
//         await pool.query(
//             'INSERT INTO PatientDetails (patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
//             [patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no]
//         );
//         res.sendStatus(200);
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });

// // Medical conditions
// // app.post('/api/signup/medical', async (req, res) => {
// //     const {
// //         patient_id,
// //         heart_disease,
// //         diabetes,
// //         hypertension,
// //         deep_vein_thrombosis,
// //         cardiovascular_accidents,
// //         asthma,
// //         bleeding_tendency,
// //         hyperthyroidism,
// //         adrenal_insufficiency,
// //         hepatitis,
// //         hiv,
// //         keloid_scarring,
// //         cancer,
// //         history_of_surgery,
// //         other_conditions,
// //         drug_allergies,
// //         food_allergies,
// //         current_medications,
// //         current_vitamins
// //     } = req.body;
// //     try {
// //         await pool.query(
// //             'INSERT INTO PatientMedicalConditions (patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
// //             [patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins]
// //         );
// //         res.sendStatus(200);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Database error' });
// //     }
// // });

// app.post('/api/signup/medical', async (req, res) => {
//     const {
//         patient_id,
//         heart_disease,
//         diabetes,
//         hypertension,
//         deep_vein_thrombosis,
//         cardiovascular_accidents,
//         asthma,
//         bleeding_tendency,
//         hyperthyroidism,
//         adrenal_insufficiency,
//         hepatitis,
//         hiv,
//         keloid_scarring,
//         cancer,
//         history_of_surgery,
//         other_conditions,
//         drug_allergies,
//         food_allergies,
//         current_medications,
//         current_vitamins
//     } = req.body;

//     console.log('Received data:', req.body);

//     try {
//         await pool.query(
//             `INSERT INTO PatientMedicalConditions (
//                 patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, 
//                 asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, 
//                 cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, 
//                 current_vitamins
//             ) VALUES (
//                 $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
//             )`,
//             [
//                 patient_id,
//                 heart_disease,
//                 diabetes,
//                 hypertension,
//                 deep_vein_thrombosis,
//                 cardiovascular_accidents,
//                 asthma,
//                 bleeding_tendency,
//                 hyperthyroidism,
//                 adrenal_insufficiency,
//                 hepatitis,
//                 hiv,
//                 keloid_scarring,
//                 cancer,
//                 history_of_surgery,
//                 other_conditions,
//                 drug_allergies,
//                 food_allergies,
//                 current_medications,
//                 current_vitamins
//             ]
//         );
//         console.log('Data inserted successfully');
//         res.sendStatus(200);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).json({ error: 'Database error', details: error.message });
//     }
// });

const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createAgentsTable } = require('./config/createAgentTables');
const { createPatientsTable } = require('./config/createPatientTables');
require('dotenv').config();
const userRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
// const authenticateToken = require('./middleware/authenticateToken');
// const { generateAccessToken, authenticateToken } = require('./utils/auth');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create tables
const createAllTables = async () => {
    try {
        await createPatientsTable();
        await createAgentsTable();
        console.log('All tables created successfully');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

createAllTables();

// app.get('/api/user/status', authenticateToken, async (req, res) => {
//     const { username } = req.user;

//     try {
//         let result = await pool.query('SELECT username, active FROM agents WHERE username = $1', [username]);
//         let user = result.rows[0];

//         if (!user) {
//             result = await pool.query('SELECT username, active FROM patientaccount WHERE username = $1', [username]);
//             user = result.rows[0];
//         }

//         if (!user) return res.status(404).json({ error: 'User not found' });

//         res.json({ username: user.username, active: user.active });
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// });

const activeUsers = new Set();

// app.post('/api/auth/logout', (req, res) => {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) {
//         return res.status(400).json({ message: 'Token is required' });
//     }
//     activeUsers.add(token);
//     console.log('Logged out successfully')
//     res.status(200).json({ message: 'Logged out successfully' });
// });

// Check active users route
// Define in your server.js or app.js
app.get('/api/auth/active', (req, res) => {
    console.log('Active users request received');
    console.log('Active users:', Array.from(activeUsers));
    res.json({ activeUsers: Array.from(activeUsers) });
});


app.post('/api/auth/logout', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }
    console.log('Logout attempt:', req.header);


    // const { username } = req.body;

    // console.log('Logout request for:', username);

    // if (username) {
    //     console.log(`Logout successful for: ${username}`);
    //     activeUsers.delete(username); // Remove user from active users
    //     console.log('Logout successful for:', username);
    // }
    // else {
    //     console.log('No username provided for logout');
    // }

    activeUsers.add(token);
    console.log('Logged out successfully')
    res.status(200).json({ message: 'Logged out successfully' });
});

const checkBlacklist = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (blacklist.has(token)) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    next();
};

app.use('/api/protected', checkBlacklist, (req, res) => {
    res.send('This is a protected route');
});



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});



// Agent signup
app.post('/api/auth/register', async (req, res) => {
    const { username, password, firstName, lastName, middleName, role } = req.body;

    console.log('Register request data:', req.body);

    if (!username || !password || !role) {
        return res.status(400).json({ message: 'Username, password, and role are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO agents (username, password, firstName, lastName, middleName, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [username, hashedPassword, firstName, lastName, middleName, role]
        );
        const agent = result.rows[0];
        const token = jwt.sign({ id: agent.id, role: agent.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error registering agent:', error);
        res.status(500).json({ message: 'Error registering agent', error: error.message });
    }
});

// Patient signup endpoints
app.post('/api/signup/account', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO PatientAccount (username, password) VALUES ($1, $2) RETURNING id',
            [username, hashedPassword]
        );
        res.json({ patient_id: result.rows[0].id });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/signup/contact', async (req, res) => {
    const {
        patient_id,
        address1,
        address2,
        address3,
        city,
        country,
        postal_code,
        email,
        tel_home,
        tel_mobile
    } = req.body;
    try {
        await pool.query(
            'INSERT INTO PatientContact (patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
            [patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile]
        );
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/signup/emergency', async (req, res) => {
    const {
        patient_id,
        first_name,
        last_name,
        tel_home,
        tel_mobile
    } = req.body;
    try {
        await pool.query(
            'INSERT INTO PatientEmergencyContact (patient_id, first_name, last_name, tel_home, tel_mobile) VALUES ($1, $2, $3, $4, $5)',
            [patient_id, first_name, last_name, tel_home, tel_mobile]
        );
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/signup/details', async (req, res) => {
    const {
        patient_id,
        first_name,
        last_name,
        middle_name,
        gender,
        age,
        date_of_birth,
        height,
        weight,
        nationality,
        passport_no
    } = req.body;
    try {
        await pool.query(
            'INSERT INTO PatientDetails (patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no]
        );
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/signup/medical', async (req, res) => {
    const {
        patient_id,
        heart_disease,
        diabetes,
        hypertension,
        deep_vein_thrombosis,
        cardiovascular_accidents,
        asthma,
        bleeding_tendency,
        hyperthyroidism,
        adrenal_insufficiency,
        hepatitis,
        hiv,
        keloid_scarring,
        cancer,
        history_of_surgery,
        other_conditions,
        drug_allergies,
        food_allergies,
        current_medications,
        current_vitamins
    } = req.body;
    try {
        await pool.query(
            'INSERT INTO PatientMedicalConditions (patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
            [patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins]
        );
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// // Agent login
// app.post('/api/auth/login', async (req, res) => {
//     const { username, password } = req.body;

//     console.log('Login request data:', req.body);

//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//         const result = await pool.query(
//             'SELECT * FROM agents WHERE username = $1',
//             [username]
//         );
//         const agent = result.rows[0];

//         if (!agent || !(await bcrypt.compare(password, agent.password))) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: agent.id, role: agent.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.json({ token, role: 'agent' }); // Include role in response
//     } catch (error) {
//         console.error('Error logging in agent:', error);
//         res.status(500).json({ message: 'Error logging in agent', error: error.message });
//     }
// });

// // Patient login
// app.post('/api/patients/login', async (req, res) => {
//     const { username, password } = req.body;

//     console.log('Login request data:', req.body);

//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//         const result = await pool.query(
//             'SELECT * FROM PatientAccount WHERE username = $1',
//             [username]
//         );
//         const patient = result.rows[0];

//         if (!patient || !(await bcrypt.compare(password, patient.password))) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: patient.id, role: 'patient' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.json({
//             token,
//             username: user.username,
//             role: user.role
//         });// Include role in response
//     } catch (error) {
//         console.error('Error logging in patient:', error);
//         res.status(500).json({ message: 'Error logging in patient', error: error.message });
//     }
// });

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt:', req.body);
    try {
        // First check if the user is an agent
        let result = await pool.query('SELECT * FROM agents WHERE username = $1', [username]);
        let user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            // Generate token
            const token = jwt.sign({ username: user.username, role: 'agent' }, process.env.JWT_SECRET, { expiresIn: '1h' });
            activeUsers.add(username); // Add user to active users
            console.log(`Login successful for agent: ${username}`);
            console.log('Login successful for agent:', username);
            return res.json({
                token,
                username: user.username,
                role: 'agent'
            });
        }

        // If not an agent, check if the user is a patient
        result = await pool.query('SELECT * FROM patientaccount WHERE username = $1', [username]);
        user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            // Generate token
            const token = jwt.sign({ username: user.username, role: 'patient' }, process.env.JWT_SECRET, { expiresIn: '1h' });
            activeUsers.add(username); // Add user to active users
            console.log(`Login successful for patient: ${username}`);
            console.log('Login successful for patient:', username);
            return res.json({
                token,
                username: user.username,
                role: 'patient'
            });
        }

        // If user not found or password incorrect
        res.status(401).json({ message: 'Invalid username or password' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




app.listen(port, () => {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    console.log(`Server running at http://localhost:${port}`);
});






