import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    startDate: { type: String },
    endDate: { type: String },
    accomodations: { type: String },
    logs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Log'}]
});

module.exports = mongoose.model('Trip', tripSchema);