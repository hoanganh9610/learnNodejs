const path = require('path')
const express = require('express')
const morgan = require('morgan')
//const bootstrap = require('bootstrap')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname,'public'))

// HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

const port = 3000
// route 
//arow function
app.get('/',(req, res) =>{
    res.render('home')
})

app.get('/news',(req, res) =>{
    res.render('news')
})

// app.get('/', function(req, res){//normal function
//     res.send('Hello word!');
// })
// 127.0.0.1 - localhost
app.listen(port, ()=> console.log(`listening at http://localhost:${port}`))