const {Schema, model} = require('mongoose')

const reviewSchema = new Schema({
    review: String
}, {collection: "reviews"})

module.exports = model('reviewModel', reviewSchema)
