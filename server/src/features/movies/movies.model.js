import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    title: String,
    year: String,
    type: String,
    posterUrl: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);
