var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roundSchema = new Schema({
  cartel: { type: Schema.Types.ObjectId, ref: 'Cartel' },
  active: { type: Boolean, default: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course'}

  // 


}, {
  timestamps: true
});

module.exports = mongoose.model('Round', roundSchema);