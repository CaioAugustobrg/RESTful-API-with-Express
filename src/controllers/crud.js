module.exports = async (req,res) =>  {
	let chillies = [];
	let count = 0;
	const newChilli = { id: count, ...req.body };
	count = count + 1;
	chillies.push(newChilli);
	res.send(newChilli);
};
