const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('learning',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning',
    bls: 'Basic Life Support (BLS)',
    });
});

module.exports = router;