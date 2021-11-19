const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoutes = require('./app/routes/authRoute')


dotenv.config()
const app = express()

// Middleware Configuration
app.use(express.static('public'))
app.use(express.json())

const PORT = process.env.PORT || 6060;


const uri = process.env.URI;
console.log("Connecting to DB...")
mongoose.connect(uri.toString(), { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error ..."));

db.once("open", ()=>{
    app.listen(PORT, ()=> {
        console.log(`connected to PORT ${PORT}`)
    })
})


app.get('/', (req, res) => {
    res.send("something")
})
app.use(authRoutes)