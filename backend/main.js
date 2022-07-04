const express = require('express')
const https = require("https");
const fs = require("fs");
const app = express()
const port = 3000

const harmonics = require('harmonics')

app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})

app.get('/:chord',(req,res)=>{
    try{
        const chord = req.params.chord
        res.send(harmonics.chord(chord))
    }catch{
        res.send("Error Finding Chord")
    }
})

https.createServer({key:fs.readFileSync('key.pem'), cert: fs.readFileSync("cert.pem")}, app).listen(port, ()=>{
    console.log('server is runing at port 3000')
});


