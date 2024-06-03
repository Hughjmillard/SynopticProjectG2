const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('second',{title: 'Health Website'
    });
});

module.exports = router;