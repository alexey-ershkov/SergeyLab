const {Schema, model} = require('mongoose')

const pizzaScheme = new Schema({
    name: String,
    imgId: Number,
    cost: Number,
    addComponents: [Object]
},{collection: 'pizza'})

module.exports = model('pizza', pizzaScheme)
