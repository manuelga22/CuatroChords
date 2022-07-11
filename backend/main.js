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

function getChordName(input){
    let letter = input[0]
    let chordType = input.substring(2)
    let chordName = ''
    chordName += letter + ' '

    if(chordType[0] === 'M'){
        chordName += 'Major ' + chordType.substring(1)
    }else if(chordType[0] === 'm'){
        chordName += 'Minor' + chordType.substring(1)
    }else{
        chordName += chordType
    }

    return chordName
}

app.get('/:chord',(req,res)=>{
    try{
        const chord = req.params.chord
        const isInputFormatted = checkInput(chord)
        console.log(chord, isInputFormatted)
        if(isInputFormatted){
            const name = getChordName(chord)
            console.log("hereee",name)
            res.json({chordName:name, notes:harmonics.chord(chord)})
        }else{
            res.send("Incorrent Input")
        }
    }catch{
        res.send("Couldn't Find Chord")
    }
})

// https.createServer({key:fs.readFileSync('key.pem'), cert: fs.readFileSync("cert.pem")}, app).listen(port, ()=>{
//     console.log('server is runing at port 3000')
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

