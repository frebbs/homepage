const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Sanity check'
    })
})

module.exports = router;

