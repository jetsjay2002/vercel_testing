const express = require('express');
const { registerPatient } = require('../controllers/patientController');
const router = express.Router();

router.post('/register', registerPatient);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const patientController = require('../controllers/patientController');

// // Define routes
// router.post('/account', patientController.createPatientAccount);
// router.post('/contact', patientController.createPatientContact);
// router.post('/emergency', patientController.createPatientEmergencyContact);
// router.post('/details', patientController.createPatientDetails);
// router.post('/medical', patientController.createPatientMedicalConditions);

// module.exports = router;
