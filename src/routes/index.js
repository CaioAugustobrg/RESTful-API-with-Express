const express = require('express');
const router = express.Router();

let chillies = [];
var count = 0;
router.get('/chillies', (req, res) => {
	console.log('get all chillies');
});
router.get('/chillies/:id', (req, res) => {
	console.log(`get a chilli with id ${req.params.id}`);
});
router.post('/chillies', (req, res) => {
	console.log('add a chilli');
});
router.put('/chillies/:id', (req, res) => {
	console.log(`update a chilli with id ${req.params.id}`);
});
router.delete('/chillies/:id', (req, res) => {  
	console.log(`delete a chilli with id ${req.params.id}`);
});

module.exports = router;