import mongoose from 'mongoose';

const sequenceSchema = mongoose.Schema({
  maxTripId: { type: Number, required: true },
  maxLogId: { type: Number, required: true }
});

module.exports = mongoose.model('Sequence', sequenceSchema);