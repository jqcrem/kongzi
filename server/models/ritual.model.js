const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ritualSchema = new Schema({
	content: {type: String, required: true},
	category: {type: [String], required: false},
	label: {type: String, required: true}
}, {
  timestamps: true,
})

const Ritual = mongoose.model('Ritual', ritualSchema);

module.exports = Ritual;
