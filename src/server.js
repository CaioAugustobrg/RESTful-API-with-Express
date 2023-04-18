const express = require('express');
const app = express();
app.use(express.json());
const port = 3030;
const router = require('./routes/index');
app.use(router);
app.listen(port, () => {
	console.log(`Express running on http://localhost:${port}; press CRTL + C to terminate...` );
});