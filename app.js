const express = require('express')
const app = express()
const port = 3000;
// const mongoose = require('mongoose')
// const User = require('./models/user')
const Datastore = require('nedb')

let dataPenuh = {}

// const dbURI = 'mongodb+srv://galihsuks:amehmlebu@cluster0.fuypmdz.mongodb.net/user-data?retryWrites=true&w=majority'
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => console.log('berhasil konek mongodb..'))
//     .catch((err) => console.log(err))

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/awal/masukan',(req,res)=>{
    dataPenuh = {
        umur: req.body.umur,
        sekolah: req.body.sekolah,
        main: req.body.cekmain,
        feeling: req.body.cekfeeling,
    }
    console.log(dataPenuh)
    res.redirect('/main')
})

app.get('/main',(req,res)=>{
    res.render('indexmain.ejs')
})

app.post('/main/masukan',(req,res)=>{
    dataPenuh.nilai = parseInt(req.body.nilai)
    console.log(dataPenuh)
    res.redirect('/praend')
})

app.get('/praend',(req,res)=>{
    let pertanyaan = ''
    if(dataPenuh.nilai<3)
        pertanyaan = 'Apa yang menurutmu susah dalam berlatih feeling?'
    else if(dataPenuh.nilai == 3)
        pertanyaan = 'Menurutmu melatih feeling itu susah atau nggk?'
    if(dataPenuh.nilai>3)
        pertanyaan = 'Cara latihan feeling menurutmu gimana?'
    res.render('indexpraend.ejs', { text: pertanyaan })
})

app.post('/praend/masukan',(req,res)=>{
    dataPenuh.opini = req.body.opini
    console.log(dataPenuh)
    res.redirect('/end')
})

const database = new Datastore('database.db')
database.loadDatabase()

app.get('/end',(req,res)=>{
    // const user = new User({
    //     umur: dataPenuh.umur,
    //     sekolah: dataPenuh.sekolah,
    //     main: dataPenuh.main,
    //     feeling: dataPenuh.feeling,
    //     nilai: dataPenuh.nilai,
    //     opini: dataPenuh.opini
    // })
    // user.save()
    //     .then((result)=>{
    //         console.log(result)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    if(!("checking" in dataPenuh) && ("opini" in dataPenuh))
        database.insert(dataPenuh)
    dataPenuh.checking = true;
    console.log(dataPenuh)
    res.render('indexend.ejs')
})

app.listen(process.env.PORT || port, () => console.log(`Listening at localhost:${port}`))