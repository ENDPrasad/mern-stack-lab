const express = require('express')
const cors = require('cors')
const connectDB = require('./db/db.js')

// Creating the express app
const app = express()
const PORT = 5000

// connect DB
connectDB()


// accepting cors
app.use(cors())


app.use('/users', require('./routes/user'))


// Creating a GET route
app.get('/', (req, res)=>{
    res.json({message: 'Hello dear.!!'})
})



// Running the server in port 5000
app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})