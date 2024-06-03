const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('fourth',{title: 'Health Website'
    });
});

module.exports = router;