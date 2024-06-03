const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('learning',{title: 'Health Website'
    });
});

module.exports = router;