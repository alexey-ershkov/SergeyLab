const {Schema, model} = require('mongoose')

const orderScheme = new Schema (
    {
        pizzaId: String,
        cost: Number,
        additional: String,
        address: String,
        phone: String,
        username:String
    }, {collection: "order"})

module.exports = model('orderModel', orderScheme)
