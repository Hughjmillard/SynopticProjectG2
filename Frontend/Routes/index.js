const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index',{title: 'Health Website',
        homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
        learningNav: 'learning', heading: 'Heath Diagnosis Tool'
    });
});

module.exports = router;