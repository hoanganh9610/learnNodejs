const path = require('path')
const express = require('express')
const morgan = require('morgan')
//const bootstrap = require('bootstrap')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

const port = 3000

const route = require('./routes')

// route init
route(app)

// app.get('/', function(req, res){//normal function
//     res.send('Hello word!');
// })
// 127.0.0.1 - localhost
app.listen(port, ()=> console.log(`listening at http://localhost:${port}`))