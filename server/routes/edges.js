const router = require('express').Router();
let Edge = require('../models/edge.model');
let Ritual = require('../models/ritual.model');

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
	const label = req.body.label;
	const category = req.body.category;

	const newEdge = new Edge({
		'ritualA': ritualA,
		'ritualB': ritualB,
		'direction': direction,
		'label': label,
		'category': category
	});

	newEdge.save()
		.then(() => res.json('edge added!'))
		.catch(err => res.status(400).json('Error: '+err));
})

router.route('/addByLabel').post((req, res) => {
	console.log('edge add by label');
	const labelA = req.body.labelA;
	const labelB = req.body.labelB;
	const direction = req.body.direction;
	const label = req.body.label;
	const category = req.body.category;
	var ritualA;
	var ritualB;

	Ritual.findOne({'label': labelA})
	.then(res => {
		//console.log(res);
		//console.log(String(res._id))
		ritualA = String(res._id)
		//console.log(ritualA);
		return Ritual.findOne({'label': labelB});
	})
	.then(res => {
		ritualB = String(res._id)
		console.log(ritualB);
		console.log(ritualA);
		const newEdge = new Edge({
			'ritualA': ritualA,
			'ritualB': ritualB,
			'direction': direction,
			'label': label,
			'category': category
		});
		console.log("LABEL");
		console.log(label);
		return newEdge.save();
	})
	.then(() => res.json('edge added by label!'))
	.catch(err => res.status(400).json('Error: '+err));
})

router.route('/delByLabel').post((req, res) => {
	console.log('edge del by label');
	const labelA = req.body.labelA;
	const labelB = req.body.labelB;
	var ritualA;
	var ritualB;

	Ritual.findOne({'label': labelA})
	.then(res => {
		ritualA = String(res._id)
		return Ritual.findOne({'label': labelB});
	})
	.then(res => {
		ritualB = String(res._id)
		return Edge.findOneAndDelete({ritualA: ritualA, ritualB: ritualB})
	})
	.then(edge => res.json(edge))
	.catch(err => res.status(400).json('Error: '+err));
})

router.route('/:id').post((req, res) => {
	console.log('edge get by id');
	console.log(req.body);

	Edge.find({ritualA: req.params.id, category: {$in: req.body.category}})
		.then(ritual => res.json(ritual))
		.catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;
