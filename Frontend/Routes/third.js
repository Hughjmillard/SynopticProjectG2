const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('third',{title: 'Health Website',
        route: 'body text through route'
    });
});

module.exports = router;