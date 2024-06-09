const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('learning',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning',
    bls: 'Basic Life Support (BLS)',
    wound: 'Wound Care',
    fracture: 'Fracture Care',
    burn: 'Burn Care',
    choking: 'Airway Obstruction',
    poisoning: 'Poisoning and Overdose',
    allergy: 'Allergic Reactions',
    shock: 'Shock Management',

    blsWelcome: 'Welcome to the Basic Life Support (BLS) learning module',
    blsContent: 'This module will teach you how to perform CPR and use an AED',
    blsCPR: 'First: Check for Responsiveness, 
    });
});

module.exports = router;