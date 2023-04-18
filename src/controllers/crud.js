let chillies = [];
let count = 0;
const addChilli = (req,res) =>  {
	
	const newChilli = { id: count, ...req.body };
	count = count + 1;
	chillies.push(newChilli);
	res.send(newChilli);
	console.log('add a chilli');
};
const replaceChilli = (req,res) => {
	let chilliIndex = chillies.findIndex((c) => c.id == req.params.id);
	// if no id was found send chilliMatch will be undefined which is falsy
	if (chilliIndex != -1) {
		chillies[chilliIndex] = req.body;
		console.log(req.body);
		res.send(chillies[chilliIndex]);
	} else {
		res.sendStatus(400);
	}
};



module.exports = replaceChilli, addChilli;