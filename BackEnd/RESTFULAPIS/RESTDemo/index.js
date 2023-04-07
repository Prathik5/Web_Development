const express = require('express')
const app = express();

app.get('/tacos', (req, res) =>{
    res.send(`Get /tacos response`)
})


app.listen('6000', () => {
    console.log("Listening on port 6000")
})