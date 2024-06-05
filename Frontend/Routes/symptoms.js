const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('symptoms',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning', header: 'Diagnosis Tool', Symptom1: 'Headache', Symptom2: 'Fever',
    Symptom3: 'Open Wound', Symptom4: 'Nausea', Symptom5: 'Loss of Appetite',
    Symptom6: 'Night Sweats', Symptom7: 'Vomiting', Symptom8: 'Blurred Vision', button:'Submit',
    description:'Use this page by clicking all of the symptoms you are experiencing.' + 
    '</br>Hover over an image to see a description.',
    headacheDesc: 'Pain or discomfort in the head or face area, varying in intensity and duration',
    feverDesc: 'Elevated body temperature',
    woundDesc: 'A break in the skin or tissue, exposing the underlying layers and potentially leading to bleeding',
    nauseaDesc: 'A sensation of unease and discomfort in the stomach, often accompanied by an urge to vomit',
    appetiteDesc: 'Reduced desire to eat',
    nightSweatsDesc: 'Excessive sweating during the night',
    vomitingDesc: 'Forceful expulsion of stomach contents through the mouth, usually preceded by nausea.',
    blurredVisionDesc: 'Lack of sharpness in eyesight, making objects appear out of focus'
    });
});

module.exports = router;