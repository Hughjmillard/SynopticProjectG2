const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('symptoms',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning', header: 'Diagnosis Tool', Symptom1: 'Headache', Symptom2: 'Fever',
    Symptom3: 'Open Wound', Symptom4: 'Nausea', Symptom5: 'Loss of Appetite',
    Symptom6: 'Night Sweats', Symptom7: 'Vomiting', Symptom8: 'Blurred Vision', button:'Submit'
    });
});

module.exports = router;