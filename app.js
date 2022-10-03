const express = require('express')
const app = express()
const port = 3000;
const Datastore = require('nedb')

app.use(express.json())
app.use(express.static('public'))

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/main',(req,res)=>{
    res.render('indexmain.ejs')
})
app.get('/praend',(req,res)=>{
    res.render('indexpraend.ejs')
})

const database = new Datastore('database.db')
database.loadDatabase()

app.post('/end',(req,res)=>{
    console.log(req.body)
    database.insert(req.body)
})

app.get('/end',(req,res)=>{
    res.render('indexend.ejs')
})


app.listen(process.env.PORT || port, () => console.log(`Listening at localhost:${port}`));