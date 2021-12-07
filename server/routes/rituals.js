const router = require('express').Router();
let Ritual = require('../models/ritual.model');

router.route('/').get((req, res) => {
	console.log('ritual get');
	Ritual.find()
		.then(rituals => res.json(rituals))
		.catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
	console.log('ritual add');
	const content = req.body.content;
	const category = req.body.category;
	const label = req.body.label;

	const newRitual = new Ritual({
		'content' : content,
		'category' : category,
		'label': label
	});

	newRitual.save()
		.then(() => res.json('ritual added!'))
		.catch(err => res.status(400).json('Error: '+err));
})

router.route('/:id').get((req, res) => {
	console.log('ritual get by id');

	Ritual.findById(req.params.id)
		.then(ritual => res.json(ritual))
		.catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
