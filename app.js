const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')
const User = require('./models/user')
//const Datastore = require('nedb')

const dbURI = 'mongodb+srv://galihsuks:amehmlebu@cluster0.fuypmdz.mongodb.net/user-data?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('berhasil konek mongodb'))
    .catch((err) => console.log(err))

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

// const database = new Datastore('database.db')
// database.loadDatabase()

app.post('/end',(req,res)=>{
    console.log(req.body)
    const user = new User({
        umur: req.body.umur,
        sekolah: req.body.sekolah,
        main: req.body.main,
        feeling: req.body.feeling,
        nilai: req.body.nilai,
        opini: req.body.opini
    })

    user.save()
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    //database.insert(req.body)
})

app.get('/end',(req,res)=>{
    res.render('indexend.ejs')
})


app.listen(process.env.PORT || port, () => console.log(`Listening at localhost:${port}`));