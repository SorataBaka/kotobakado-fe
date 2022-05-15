const fs = require("fs");
const handle = (req, res) => {
	if (!req.query.id)
		return res.status(400).json({
			status: 400,
			message: "Bad Request",
			data: null,
		});
	const filepath = `assets/${req.query.id}ka.json`;
	if (!fs.existsSync(filepath))
		return res.status(404).json({
			status: 404,
			message: "Not Found",
			data: null,
		});

	const file = fs.readFileSync(filepath);
	const data = JSON.parse(file);
	return res.status(200).json({
		status: 200,
		message: "success",
		data: data,
	});
};

export default handle;
