// const patientModel = require('../models/patientModel');

// const signupPatient = async (req, res) => {
//     try {
//         const { username, password, contactInfo, emergencyContact, details, conditions } = req.body;

//         // Create patient account with the role set as 'patient'
//         const patientAccount = await patientModel.createPatientAccount({ username, password });
//         const patientId = patientAccount.id;

//         // Create patient contact
//         if (contactInfo) {
//             await patientModel.createPatientContact(patientId, contactInfo);
//         }

//         // Create patient emergency contact
//         if (emergencyContact) {
//             await patientModel.createPatientEmergencyContact(patientId, emergencyContact);
//         }

//         // Create patient details
//         if (details) {
//             await patientModel.createPatientDetails(patientId, details);
//         }

//         // Create patient medical conditions
//         if (conditions) {
//             await patientModel.createPatientMedicalConditions(patientId, conditions);
//         }

//         res.status(201).json({ message: 'Patient signed up successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// module.exports = {
//     signupPatient,
// };




//-------------------------------
// const pool = require('../config/db');

// // Create a patient account
// const createPatientAccount = async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const result = await pool.query(
//             'INSERT INTO PatientAccount (username, password, role) VALUES ($1, $2, $3) RETURNING id',
//             [username, hashedPassword, 'patient']
//         );
//         res.json({ patient_id: result.rows[0].id });
//     } catch (error) {
//         res.status(500).json({ error: 'Database error' });
//     }
// };

// // Save contact information
// const createPatientContact = async (req, res) => {
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
// };

// // Save emergency contact information
// const createPatientEmergencyContact = async (req, res) => {
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
// };

// // Save patient details
// const createPatientDetails = async (req, res) => {
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
// };

// // Save medical conditions
// const createPatientMedicalConditions = async (req, res) => {
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
// };

// module.exports = { createPatientAccount, createPatientContact, createPatientEmergencyContact, createPatientDetails, createPatientMedicalConditions };




const { createPatientAccount, createPatientContact, createPatientEmergencyContact, createPatientDetails, createPatientMedicalConditions } = require('../models/patientModel');

const registerPatient = async (req, res) => {
    const { username, password, contactInfo, emergencyContact, details, conditions } = req.body;
    try {
        const account = await createPatientAccount({ username, password });
        const patientId = account.id;

        if (contactInfo) {
            await createPatientContact(patientId, contactInfo);
        }

        if (emergencyContact) {
            await createPatientEmergencyContact(patientId, emergencyContact);
        }

        if (details) {
            await createPatientDetails(patientId, details);
        }

        if (conditions) {
            await createPatientMedicalConditions(patientId, conditions);
        }

        res.status(201).json({ success: true, patientId });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = { registerPatient };
