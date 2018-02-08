var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  screenName: { type: String, required: true },
  cartel: { type: Schema.Types.ObjectId, ref: 'Cartel' },
  inviteCode: { type: String, default: null },
  invitedBy: { type: Schema.Types.ObjectId, ref: 'Player', default: null },
  isBoss: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.inviteCode;
      delete ret.invitedBy;
    }
  }
});

playerSchema.statics.findByCartel = function(cartel) {
  return this.find({cartel: cartel});
}

module.exports = mongoose.model('Player', playerSchema);