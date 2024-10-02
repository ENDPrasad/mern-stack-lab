const express = require('express')
const cors = require('cors')
const path = require('path')

// Creating the express app
const app = express()


// accepting cors
app.use(cors())

const PORT = 5001

// Middleware to parse form data (urlencoded format)
app.use(express.urlencoded({ extended: true }));


// Creating a GET route
app.get('/greet', (req, res)=>{
    res.json({message: 'Hello dear.!!'})
})

// It will serve in the root route which is '/'
app.use(express.static(path.join(__dirname, '/public')))

// If we want to serve the file in different route
app.get('/user', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'user.html'))
})

app.post('/change-user', (req, res)=>{
    const userType = req.body.userType

    if(userType == 'admin'){
        res.redirect('./admin.html')
    }

    if(userType == 'user'){
        res.redirect(path.join('./user.html'))
    }
})


// Running the server in port 5000
app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})