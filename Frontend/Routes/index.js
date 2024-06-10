const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index',{title: 'Health Website',
        homeNav: 'Home', symptomsNav: 'Diagnosis Tool', contactNav: 'Contact Doctors',
        learningNav: 'Learning', heading: 'Heath Diagnosis Tool',
        mainPara: 'Use this site to diagnose basic medical conditions' +
        'as well as learn various types of first aid in the learning hub.',
        diagnosisHeader: 'Self Diagnosis Tool',
        diagnosisPara: 'Use this tool to input symptoms and get a diagnosis with a remedy',
        contactHeader: 'Find a doctor',
        contactPara: 'Use this page to get contact information for first aiders and local doctors',
        firstAidHeader: 'Learning Hub',
        firstAidPara: 'Use this tool to learn a range of first aid skills such as CPR and how to apply bandages',
        learningButton: 'Go',

        footerText: "Developed By Computer Science Students at UEA"
    });
});

module.exports = router;
