import mongoose from 'mongoose';

const parkSchema = new mongoose.Schema({
    park: { type: String, required: true },
    attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }]
});

const logSchema = new mongoose.Schema({
    date: { type: String, required: true },
    parks: [parkSchema],
    notes: { type: String },
    weather: { type: String },
    crowdLevel: { type: Number, min: 0, max: 10 },
    rating: { type: Number, min: 0, max: 10 },
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true }
});

module.exports = mongoose.model('Log', logSchema);