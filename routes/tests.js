const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json('Got it')
});
router.get('/v', async (req, res) => {
    res.json('The API')
});


module.exports = router;