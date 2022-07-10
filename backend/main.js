const express = require('express')
const https = require("https");
const fs = require("fs");
const app = express()
const port = 3000

const harmonics = require('harmonics')

app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})

function checkInput(input){
    let isInputValid = false
    let letter = input[0]
    let space = input[1]
    let chordType= input.substring(2)
    if(letter === 'C' || letter === 'D' || letter === 'E' || letter === 'F' || letter === 'G' || letter === 'A' || letter === 'B'){
        isInputValid = true
    }else if(letter === 'C#' || letter === 'D#' || letter === 'F#' || letter === 'G#' || letter === 'A#' ){
        isInputValid = true
    }else{
        return false
    }

    if(space === ' '){
        isInputValid = true
    }else return false

    //Missing check for chordType
    return isInputValid
}

app.get('/:chord',(req,res)=>{
    try{
        const chord = req.params.chord
        if(checkInput()){
            res.send(harmonics.chord(chord))
        }else{
            res.send("Incorrent Input")
        }
    }catch{
        res.send("Couldn't Find Chord")
    }
})

https.createServer({key:fs.readFileSync('key.pem'), cert: fs.readFileSync("cert.pem")}, app).listen(port, ()=>{
    console.log('server is runing at port 3000')
});


