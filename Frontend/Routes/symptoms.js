const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('symptoms', {
        title: 'Health Website',
        homeNav: 'Home',
        symptomsNav: 'diagnosis tool',
        contactNav: 'contact doctors',
        learningNav: 'learning',
        header: 'Diagnosis Tool',
        symptoms: [
            { name: 'Headache' },
            { name: 'Fever' },
            { name: 'Cough' },
            { name: 'Sore Throat' },
            { name: 'Fatigue' },
            { name: 'Runny Nose' },
            { name: 'Muscle Pain' },
            { name: 'Chills' },
            { name: 'Shortness of Breath' },
            { name: 'Nausea' },
            { name: 'Vomiting' },
            { name: 'Diarrhea' },
            { name: 'Loss of Taste' },
            { name: 'Loss of Smell' },
            { name: 'Chest Pain' }
        ],
        button: 'Submit',
        description: 'Use this page by clicking all of the symptoms you are experiencing.' +
            '</br>Hover over an image to see a description.'
    });
});

module.exports = router;