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
            { name: 'Headache', explanation: 'Headache is a common symptom characterized by aching or pain in the head or neck area.' },
            { name: 'Fever', explanation: 'Fever is an elevated body temperature, often a sign of an underlying infection or illness.' },
            { name: 'Cough', explanation: 'Cough is a reflex action that helps clear the airways of mucus, irritants, or foreign particles.' },
            { name: 'Sore Throat', explanation: 'Sore throat is a painful or scratchy sensation in the throat, often caused by inflammation or infection.' },
            { name: 'Fatigue', explanation: 'Fatigue is a feeling of extreme tiredness or lack of energy, often resulting from physical or mental exertion.' },
            { name: 'Runny Nose', explanation: 'Runny nose is a condition where there is an excessive discharge of mucus from the nose.' },
            { name: 'Muscle Pain', explanation: 'Muscle pain, also known as myalgia, refers to discomfort or pain in the muscles.' },
            { name: 'Chills', explanation: 'Chills are a sensation of coldness accompanied by shivering, often associated with fever or illness.' },
            { name: 'Shortness of Breath', explanation: 'Shortness of breath, also known as dyspnea, is a feeling of breathlessness or difficulty in breathing.' },
            { name: 'Nausea', explanation: 'Nausea is a sensation of unease and discomfort in the stomach, often leading to the urge to vomit.' },
            { name: 'Vomiting', explanation: 'Vomiting is the forceful expulsion of stomach contents through the mouth, often as a result of illness or irritation.' },
            { name: 'Diarrhea', explanation: 'Diarrhea is the condition of having frequent, loose, or watery bowel movements.' },
            { name: 'Loss of Taste', explanation: 'Loss of taste, also known as ageusia, refers to a reduced ability to detect or recognize flavors.' },
            { name: 'Loss of Smell', explanation: 'Loss of smell, also known as anosmia, is the partial or complete loss of the sense of smell.' },
            { name: 'Chest Pain', explanation: 'Chest pain is a discomfort or pain that occurs in the chest area, often associated with heart or lung problems.' },
        ],
        button: 'Submit',
        description: 'Use this page by clicking all of the symptoms you are experiencing.' +
            '</br>Hover over an image to see a description.',
        footerText: "Developed By Computer Science Students at UEA"
    });
});

module.exports = router;