const router = require('express').Router();
let Edge = require('../models/edge.model');

router.route('/').get((req, res) => {
	console.log('edge get');
	Edge.find()
		.then(edges => res.json(edges))
		.catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
	console.log('edge add');
	const ritualA = req.body.ritualA;
	const ritualB = req.body.ritualB;
	const direction = req.body.direction;

	const newEdge = new Edge({
		'ritualA': ritualA,
		'ritualB': ritualB,
		'direction': direction
	});

	newEdge.save()
		.then(() => res.json('edge added!'))
		.catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;
