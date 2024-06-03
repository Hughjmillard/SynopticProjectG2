const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('symptoms',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning',
    });
});

module.exports = router;