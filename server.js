const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.arguments('/', (req, res )=>{

    res.send("hello")
})
app.listen(5000)