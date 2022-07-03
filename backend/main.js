const express = require('express')
const app = express()
const port = 3000

const harmonics = require('harmonics')

app.get('/:chord',(req,res)=>{
    try{
        const chord = req.params.chord
        res.send(harmonics.chord(chord))
    }catch{
        res.send("Error Finding Chord")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
