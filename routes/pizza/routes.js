const {Router} = require("express")
const pizza = require('../../models/pizzaModel')

const router = Router()

router.get('/', async (req, resp) => {
    const pizzas = await pizza.find({})

    pizzas.forEach(elem => {
        console.log(elem.imgId);
    })

    resp.render('index', {
        title: "test title"
    })
})

module.exports = router
