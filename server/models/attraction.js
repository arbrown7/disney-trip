import mongoose from 'mongoose';

const attractionSchema = mongoose.Schema({
   name: { type: String, required: true },
   park: { type: String, required: true }
});

module.exports = mongoose.model('Attraction', attractionSchema);