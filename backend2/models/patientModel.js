// const pool = require('../config/db');
// const bcrypt = require('bcrypt');

// // Create a patient account
// const createPatientAccount = async (patientData) => {
//     const { username, password } = patientData;
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     const query = `
//         INSERT INTO PatientAccount (username, password, role)
//         VALUES ($1, $2, 'patient')
//         RETURNING id, username, role
//     `;
//     const values = [username, hashedPassword];
    
//     const result = await pool.query(query, values);
//     return result.rows[0];
// };

// // Create patient contact
// const createPatientContact = async (patientId, contactInfo) => {
//     const result = await pool.query(
//         'INSERT INTO PatientContact(patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
//         [patientId, ...contactInfo]
//     );
//     return result.rows[0];
// };

// // Create patient emergency contact
// const createPatientEmergencyContact = async (patientId, emergencyContact) => {
//     const result = await pool.query(
//         'INSERT INTO PatientEmergencyContact(patient_id, first_name, last_name, tel_home, tel_mobile) VALUES($1, $2, $3, $4, $5) RETURNING *',
//         [patientId, ...emergencyContact]
//     );
//     return result.rows[0];
// };

// // Create patient details
// const createPatientDetails = async (patientId, details) => {
//     const result = await pool.query(
//         'INSERT INTO PatientDetails(patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
//         [patientId, ...details]
//     );
//     return result.rows[0];
// };

// // Create patient medical conditions
// const createPatientMedicalConditions = async (patientId, conditions) => {
//     const result = await pool.query(
//         'INSERT INTO PatientMedicalConditions(patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *',
//         [patientId, ...conditions]
//     );
//     return result.rows[0];
// };

// module.exports = {
//     createPatientAccount,
//     createPatientContact,
//     createPatientEmergencyContact,
//     createPatientDetails,
//     createPatientMedicalConditions,
// };



const pool = require('../config/db');
const bcrypt = require('bcrypt');

const createPatientAccount = async (patientData) => {
    const { username, password } = patientData;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
        'INSERT INTO PatientAccount (username, password, role) VALUES ($1, $2, $3) RETURNING id',
        [username, hashedPassword, 'patient']
    );
    return result.rows[0];
};

const createPatientContact = async (patientId, contactInfo) => {
    const result = await pool.query(
        'INSERT INTO PatientContact(patient_id, address1, address2, address3, city, country, postal_code, email, tel_home, tel_mobile) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [patientId, ...contactInfo]
    );
    return result.rows[0];
};

const createPatientEmergencyContact = async (patientId, emergencyContact) => {
    const result = await pool.query(
        'INSERT INTO PatientEmergencyContact(patient_id, first_name, last_name, tel_home, tel_mobile) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [patientId, ...emergencyContact]
    );
    return result.rows[0];
};

const createPatientDetails = async (patientId, details) => {
    const result = await pool.query(
        'INSERT INTO PatientDetails(patient_id, first_name, last_name, middle_name, gender, age, date_of_birth, height, weight, nationality, passport_no) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [patientId, ...details]
    );
    return result.rows[0];
};

const createPatientMedicalConditions = async (patientId, conditions) => {
    const result = await pool.query(
        'INSERT INTO PatientMedicalConditions(patient_id, heart_disease, diabetes, hypertension, deep_vein_thrombosis, cardiovascular_accidents, asthma, bleeding_tendency, hyperthyroidism, adrenal_insufficiency, hepatitis, hiv, keloid_scarring, cancer, history_of_surgery, other_conditions, drug_allergies, food_allergies, current_medications, current_vitamins) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *',
        [patientId, ...conditions]
    );
    return result.rows[0];
};

module.exports = {
    createPatientAccount,
    createPatientContact,
    createPatientEmergencyContact,
    createPatientDetails,
    createPatientMedicalConditions,
};
