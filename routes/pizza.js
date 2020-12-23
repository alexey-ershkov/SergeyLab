const {Router} = require("express")
const pizza = require('../models/pizzaModel')
const order = require('../models/orderModel')
let bodyParser = require("body-parser");

let router = Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/pizza/:id', async (req, resp) => {
    const pizzaObj = await pizza.findById(req.params.id).lean()

    resp.render('pizzaOrder', {
        title: pizzaObj.name,
        pizza: pizzaObj,
        showReview: true
    })
})

router.post('/pizza',  async (req, resp) => {
    const orderObj = new order({
        pizzaId: req.body.id,
        cost: req.body.cost,
        additional: req.body.additional,
        address: req.body.address,
        phone: req.body.phone,
        username: req.body.name
    })

    await orderObj.save()
    resp.redirect('/review')
})

module.exports = router
