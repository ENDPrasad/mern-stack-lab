const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/random', async(req, res)=>{
    fetch("https://zenquotes.io/api/random").then(res=>res.json()).then(data=>res.json(data)).catch(err=>res.json(err))
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000')
})