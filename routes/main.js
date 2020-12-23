const {Router} = require("express")
const pizza = require('../models/pizzaModel')
let bodyParser = require("body-parser");

let router = Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, resp) => {
    const pizzas = await pizza.find({}).lean()

    resp.render('index', {
        title: "Выбор пиццы",
        pizzas
    })
})


module.exports = router
