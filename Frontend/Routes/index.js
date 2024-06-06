const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index',{title: 'Health Website',
        homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
        learningNav: 'learning', heading: 'Heath Diagnosis Tool',
        diagnosisHeader: 'Self Diagnosis Tool',
        diagnosisPara: 'Use this tool to input symptoms and get a diagnosis with a remedy',
        contactHeader: 'Find a doctor',
        contactPara: 'Use this page to get contact information for first aiders and local doctors'
    });
});

module.exports = router;


