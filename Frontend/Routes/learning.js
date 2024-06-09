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
    blsContent: 'This course equips you with essential skills to respond to cardiac and respiratory emergencies. You\'ll learn high-quality chest compressions, effective ventilation, and how to use an automated external defibrillator (AED). Our hands-on training ensures you are prepared to perform life-saving interventions confidently in any emergency situation.',
    blsCPRtitle: 'Cardiopulmonary Resuscitation (CPR)',
    blsCPR: '1: Check Responsiveness and Call for Help. If there is no response, call emergency services immediately or ask someone nearby to call.',
    blsCPR2: '2: Open the Airway. Tilt the head back and lift the chin to open the airway.',
    blsCPR3: '3: Check for Breathing. Look, listen, and feel for breathing. If the person is not breathing, start CPR.',
    blsCPR4: '4: Start Chest Compressions. Place the heel of one hand on the center of the chest and interlock the fingers. Push hard and fast at a rate of 100-120 compressions per minute.',
    blsCPR5: '5: Give Rescue Breaths. Pinch the nose and give two breaths into the mouth. Each breath should make the chest rise.',
    blsCPR6: '6: Continue CPR. Perform cycles of 30 chest compressions and two rescue breaths until help arrives.',
    });
});

module.exports = router;