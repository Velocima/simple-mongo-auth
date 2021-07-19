const boardRouter = require('express').Router();

boardRouter.get('/', (req, res) => {
	res.status(200).send({
		message: "Don't be cheeky! Users endpoint >:)",
	});
});

module.exports = boardRouter;
