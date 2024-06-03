const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('symptoms',{title: 'Health Website'
    });
});

module.exports = router;