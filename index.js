let express = require('express')
let exphbs = require('express-handlebars')
let mongoose = require('mongoose')


let mainRoutes = require('./routes/main')
let pizzaRoutes = require('./routes/pizza')
let reviewRoutes = require('./routes/review')


let PORT = 3000;
let dbUrl = 'mongodb+srv://app:mongo_app@cluster0.8rsxq.mongodb.net/pizzaDelivery'

let app = express();

let hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'templates');

app.use(mainRoutes)
app.use(pizzaRoutes)
app.use(reviewRoutes)
app.use(express.static(__dirname + '/public'));


mongoose.connect(dbUrl,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => app.listen(PORT, async() => {
        console.log(`Server started on port ${PORT}`)
    }))
    .catch(err => console.log(err))



