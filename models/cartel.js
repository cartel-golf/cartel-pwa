var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartelSchema = new Schema({
  name: { type: String, required: true, maxlength: 25 },
  defaultCourse: { type: Schema.Types.ObjectId, ref: 'Course', default: null }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cartel', cartelSchema);