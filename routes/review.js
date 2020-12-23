const {Router} = require("express")
const review = require('../models/reviewModel')
let bodyParser = require("body-parser");

let router = Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/review', (req, resp) => {
    resp.render('review', {
        title: "Отзыв",
        showReview: false
    })
})

router.post('/review', async (req,resp) => {
    const reviewObj = new review(
        {
            review: req.body.review
        })
    await reviewObj.save()

    resp.redirect('/')
})

module.exports = router
