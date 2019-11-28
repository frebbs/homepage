const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./root/index', {
        pageName: "Homepage"
    });
})

module.exports = router;

