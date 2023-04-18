const express = require('express');
const router = express.Router();
const {getAll, addChilli, replaceChilli,deleteChilli } = require('../controllers/crud');


router.get('/chillies', getAll);
router.get('/chillies/:id');
router.post('/chillies', addChilli);

router.put('/chillies/:id',replaceChilli);
router.delete('/chillies/:id',deleteChilli );

module.exports = router;