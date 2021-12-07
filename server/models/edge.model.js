const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const edgeSchema = new Schema({
	ritualA: {type: String, required: true},
	ritualB: {type: String, required: true},
	direction: {type: String, required: true},
	label: {type: String, required: true},
	category: {type: String, required: true}
}, {
  timestamps: true,
})

const Edge = mongoose.model('Edge', edgeSchema);

module.exports = Edge;
