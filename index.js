const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')


const pizzaRoutes = require('./routes/pizza/routes')


const PORT = 3000;
const dbUrl = 'mongodb+srv://app:mongo_app@sergeylabcluster.0bkqp.mongodb.net/pizzaDelivery'

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'templates');

app.use(pizzaRoutes)

mongoose.connect(dbUrl,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    }))
    .catch(err => console.log(err))
