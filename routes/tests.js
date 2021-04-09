const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json('Got it')
});


module.exports = router;