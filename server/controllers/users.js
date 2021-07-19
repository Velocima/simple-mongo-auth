const usersRouter = require('express').Router();

usersRouter.get('/', (req, res) => {
	res.status(200).send({
		message: "Don't be cheeky! Users endpoint ヾ(≧▽≦*)o",
	});
});

module.exports = usersRouter;
