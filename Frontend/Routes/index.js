const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index',{title: 'Health Website',
        homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
        learningNav: 'learning', heading: 'Heath Diagnosis Tool',
        diagnosisHeader: 'Self Diagnosis Tool',
        // diag
        contactHeader: 'Find a doctor'
    });
});

module.exports = router;


