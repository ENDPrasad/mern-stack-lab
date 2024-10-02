const express = require('express')
const cors = require('cors')
// const fs = require('fs')

// Need to write the actual data base fetching logic
const data =  require('./data.json')

// Creating the express app
const app = express()


// accepting cors
app.use(cors())

const PORT = 5000


// Creating a GET route
app.get('/greet', (req, res)=>{
    res.json({message: 'Hello dear.!!'})
})


app.get('/users', (req, res)=>{
    res.json({users: data})
})



// Running the server in port 5000
app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})