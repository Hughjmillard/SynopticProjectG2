const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index',{title: 'Health Website',
        route: 'body text through route', 
        testing: 'tekhjs'
    });
});

module.exports = router;