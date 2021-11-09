const express = require('express')


const app = express()

const PORT = process.env.port || 6060;

app.listen(PORT, ()=>{
    console.log(`Running on PORT ${PORT}`)
})