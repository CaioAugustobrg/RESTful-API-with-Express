let chillies = [];
let count = 0;
const addChilli = (req,res) =>  {
	
	const newChilli = { id: count, ...req.body };
	count = count + 1;
	chillies.push(newChilli);
	res.send(newChilli);
};
const replaceChilli = (req,res) => {
	let chilliIndex = chillies.findIndex((c) => c.id == req.params.id);
	if (chilliIndex != -1) {
		chillies[chilliIndex] = req.body;
		console.log(req.body);
		res.send(chillies[chilliIndex]);
	} else {
		res.sendStatus(400);
	}
};

const deleteChilli = (req,res) => {
	let deletedChilli = chillies.find((c) => c.id == req.params.id);
	if (!deletedChilli) {
		res.sendStatus(400);
	} else {
		chillies = chillies.filter((c) => c.id != req.params.id);
		res.send(deletedChilli);
	}
};



module.exports = replaceChilli, addChilli, deleteChilli;