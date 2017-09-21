var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartelSchema = new Schema({
  name: String,
  rounds: [{ type: Schema.Types.ObjectId, ref: 'Round' }],
  activeRound: { type: Schema.Types.ObjectId, ref: 'Round', default: null },
  defaults: {
    course: { type: Schema.Types.ObjectId, ref: 'Course', default: null }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cartel', cartelSchema);