const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('contact',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning', heading: 'filler header'
    });
});

module.exports = router;