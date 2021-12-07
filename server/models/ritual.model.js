const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ritualSchema = new Schema({
	content: {type: String, required: true},
	category: {type: [String], required: false},
	N: {type: String, required: false},
	S: {type: String, required: false},
	E: {type: String, required: false},
	W: {type: String, required: false}
}, {
  timestamps: true,
})

const Ritual = mongoose.model('Ritual', ritualSchema);

module.exports = Ritual;
