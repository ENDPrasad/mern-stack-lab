// const {MongoClient, ServerApiVersion} = require('mongodb')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const URL = process.env.MONGO_URL

// const client = new MongoClient(URL)

async function connectDB(){
    try {
        await mongoose.connect(URL)
        console.log('DB connected successfully...')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB