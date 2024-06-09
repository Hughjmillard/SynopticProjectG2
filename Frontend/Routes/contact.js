const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('contact',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning', heading: 'Contact Page',
    contactPara: 'Shows contact information for local administrator' +
    ', local first aider and the closest doctors office.',
    sysAdminName:'System Administrator',
    sysAdminAddress:'HWHM+3X7 <br>Krong Saen Monourom<br>Cambodia',
    sysAdminPhone:'+855 73 748 8359',
    aidName:'Local First Aider',
    aidAddress:'HWHM+3X8 <br>Krong Saen Monourom<br>Cambodia',
    aidPhone:'+855 73 367 9827',
    doctorName:'Mondolkiri polyclinic',
    doctorAddress:'F55P+R94<br>76<br>Krong Saen Monourom<br>',
    doctorPhone:'+855 73 555 5117',
    footerText: "Developed By Computer Science Students at UEA"
    });
});

module.exports = router;