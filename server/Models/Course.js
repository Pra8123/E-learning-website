const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,

    },
    pdf: {
        type: String,

    },
    des: {
        type: String,
    },
    reviews: {
        type: [reviewSchema],
        default: []
    }
});


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
