var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  screenName: { type: String, required: true },
  cartelId: { type: Schema.Types.ObjectId, ref: 'Cartel' },
  inviteCode: { type: String, default: null },
  invitedBy: { type: Schema.Types.ObjectId, ref: 'Player', default: null },
  isBoss: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);