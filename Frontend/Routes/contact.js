const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('contact',{title: 'Health Website',
    homeNav: 'Home', symptomsNav: 'diagnosis tool', contactNav: 'contact doctors',
    learningNav: 'learning', heading: 'Contact Page',
    contactPara: 'Shows contact information for local administrator' +
    ', local first aider and the closest doctors office.',
    sysAdminName:'System Administrator',
    sysAdminAddress:'St NumberStName <br>Town <br>County <br>Postcode',
    sysAdminPhone:'+855 73 748 8359',
    aidName:'Local First Aider',
    aidAddress:'St NumberStName <br>Town <br>County <br>Postcode',
    aidPhone:'+855 73 367 9827',
    doctorName:'Mondolkiri polyclinic',
    doctorAddress:'St NumberStName <br>Town <br>County <br>Postcode',
    doctorPhone:'+855 73 555 5117',
    });
});

module.exports = router;