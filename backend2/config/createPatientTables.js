// const pool = require('./db');

// const createPatientsTable = async () => {
//     const client = await pool.connect();
//     try {
//         // Table for Account Information
//         const createPatientAccountTable = `
//             CREATE TABLE IF NOT EXISTS PatientAccount (
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(255) UNIQUE NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 role VARCHAR(50) DEFAULT 'patient' PRIMARY KEY
//             );
//         `;
//         await client.query(createPatientAccountTable);
//         console.log('PatientAccount table created successfully');

//         // Table for Contact Information
//         const createPatientContactTable = `
//             CREATE TABLE IF NOT EXISTS PatientContact (
//                 id SERIAL PRIMARY KEY,
//                 patient_id INT REFERENCES PatientAccount(id),
//                 address1 VARCHAR(255),
//                 address2 VARCHAR(255),
//                 address3 VARCHAR(255),
//                 city VARCHAR(255),
//                 country VARCHAR(255),
//                 postal_code VARCHAR(20),
//                 email VARCHAR(255),
//                 tel_home VARCHAR(20),
//                 tel_mobile VARCHAR(20)
//             );
//         `;
//         await client.query(createPatientContactTable);
//         console.log('PatientContact table created successfully');

//         // Table for Emergency Contact
//         const createPatientEmergencyContactTable = `
//             CREATE TABLE IF NOT EXISTS PatientEmergencyContact (
//                 id SERIAL PRIMARY KEY,
//                 patient_id INT REFERENCES PatientAccount(id),
//                 first_name VARCHAR(255),
//                 last_name VARCHAR(255),
//                 tel_home VARCHAR(20),
//                 tel_mobile VARCHAR(20)
//             );
//         `;
//         await client.query(createPatientEmergencyContactTable);
//         console.log('PatientEmergencyContact table created successfully');

//         // Table for Patient Details
//         const createPatientDetailsTable = `
//             CREATE TABLE IF NOT EXISTS PatientDetails (
//                 id SERIAL PRIMARY KEY,
//                 patient_id INT REFERENCES PatientAccount(id),
//                 first_name VARCHAR(255),
//                 last_name VARCHAR(255),
//                 middle_name VARCHAR(255),
//                 gender VARCHAR(10),
//                 age INT,
//                 date_of_birth DATE,
//                 height INT,
//                 weight INT,
//                 nationality VARCHAR(255),
//                 passport_no VARCHAR(255)
//             );
//         `;
//         await client.query(createPatientDetailsTable);
//         console.log('PatientDetails table created successfully');

//         // Table for Medical Conditions
//         const createPatientMedicalConditionsTable = `
//             CREATE TABLE IF NOT EXISTS PatientMedicalConditions (
//                 id SERIAL PRIMARY KEY,
//                 patient_id INT REFERENCES PatientAccount(id),
//                 heart_disease BOOLEAN,
//                 diabetes BOOLEAN,
//                 hypertension BOOLEAN,
//                 deep_vein_thrombosis BOOLEAN,
//                 cardiovascular_accidents BOOLEAN,
//                 asthma BOOLEAN,
//                 bleeding_tendency BOOLEAN,
//                 hyperthyroidism BOOLEAN,
//                 adrenal_insufficiency BOOLEAN,
//                 hepatitis BOOLEAN,
//                 hiv BOOLEAN,
//                 keloid_scarring BOOLEAN,
//                 cancer BOOLEAN,
//                 history_of_surgery BOOLEAN,
//                 other_conditions TEXT,
//                 drug_allergies TEXT,
//                 food_allergies TEXT,
//                 current_medications TEXT,
//                 current_vitamins TEXT
//             );
//         `;
//         await client.query(createPatientMedicalConditionsTable);
//         console.log('PatientMedicalConditions table created successfully');

//     } catch (err) {
//         console.error('Error creating tables:', err);
//     } finally {
//         client.release();
//     }
// };

// // Run the function to create tables
// module.exports = { createPatientsTable};
// // createPatientsTable();



const pool = require('./db');

const createPatientsTable = async () => {
    const client = await pool.connect();
    try {
        // Table for Account Information
        const createPatientAccountTable = `
            CREATE TABLE IF NOT EXISTS PatientAccount (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'patient'
            );
        `;
        await client.query(createPatientAccountTable);
        console.log('PatientAccount table created successfully');

        // Table for Contact Information
        const createPatientContactTable = `
            CREATE TABLE IF NOT EXISTS PatientContact (
                id SERIAL PRIMARY KEY,
                patient_id INT NOT NULL REFERENCES PatientAccount(id) ON DELETE CASCADE,
                address1 VARCHAR(255),
                address2 VARCHAR(255),
                address3 VARCHAR(255),
                city VARCHAR(255),
                country VARCHAR(255),
                postal_code VARCHAR(20),
                email VARCHAR(255),
                tel_home VARCHAR(20),
                tel_mobile VARCHAR(20)
            );
        `;
        await client.query(createPatientContactTable);
        console.log('PatientContact table created successfully');

        // Table for Emergency Contact
        const createPatientEmergencyContactTable = `
            CREATE TABLE IF NOT EXISTS PatientEmergencyContact (
                id SERIAL PRIMARY KEY,
                patient_id INT NOT NULL REFERENCES PatientAccount(id) ON DELETE CASCADE,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                tel_home VARCHAR(20),
                tel_mobile VARCHAR(20)
            );
        `;
        await client.query(createPatientEmergencyContactTable);
        console.log('PatientEmergencyContact table created successfully');

        // Table for Patient Details
        const createPatientDetailsTable = `
            CREATE TABLE IF NOT EXISTS PatientDetails (
                id SERIAL PRIMARY KEY,
                patient_id INT NOT NULL REFERENCES PatientAccount(id) ON DELETE CASCADE,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                middle_name VARCHAR(255),
                gender VARCHAR(10),
                age INT,
                date_of_birth DATE,
                height INT,
                weight INT,
                nationality VARCHAR(255),
                passport_no VARCHAR(255)
            );
        `;
        await client.query(createPatientDetailsTable);
        console.log('PatientDetails table created successfully');

        // Table for Medical Conditions
        const createPatientMedicalConditionsTable = `
        CREATE TABLE IF NOT EXISTS PatientMedicalConditions (
            id SERIAL PRIMARY KEY,
            patient_id INT NOT NULL REFERENCES PatientAccount(id) ON DELETE CASCADE,
            heart_disease TEXT DEFAULT 'No',
            diabetes TEXT DEFAULT 'No',
            hypertension TEXT DEFAULT 'No',
            deep_vein_thrombosis TEXT DEFAULT 'No',
            cardiovascular_accidents TEXT DEFAULT 'No',
            asthma TEXT DEFAULT 'No',
            bleeding_tendency TEXT DEFAULT 'No',
            hyperthyroidism TEXT DEFAULT 'No',
            adrenal_insufficiency TEXT DEFAULT 'No',
            hepatitis TEXT DEFAULT 'No',
            hiv TEXT DEFAULT 'No',
            keloid_scarring TEXT DEFAULT 'No',
            cancer TEXT DEFAULT 'No',
            history_of_surgery TEXT DEFAULT 'No',
            other_conditions TEXT DEFAULT 'No',
            drug_allergies TEXT DEFAULT 'No',
            food_allergies TEXT DEFAULT 'No',
            current_medications TEXT DEFAULT 'No',
            current_vitamins TEXT DEFAULT 'No'
        );
    `;
    await client.query(createPatientMedicalConditionsTable);
    console.log('PatientMedicalConditions table created successfully');
    
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        client.release();
    }
};

// Run the function to create tables
module.exports = { createPatientsTable };
// createPatientsTable();

