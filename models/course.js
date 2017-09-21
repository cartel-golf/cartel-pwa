var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var holeSchema = new Schema({
  num: { type: Number, required: true, min: 1, max: 18 },
  par: { type: Number, required: true, min: 3, max: 6 },
  handicap: { type: Number, required: true, min: 1, max: 18 }
});

var courseSchema = new Schema({
  longName: String,
  shortName: String,
  holes: [{ type: Schema.Types.ObjectId, ref: 'Round' }],
  activeRound: { type: Schema.Types.ObjectId, ref: 'Round', default: null }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);