const {MongoClient, ServerApiVersion} = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const URL = process.env.MONGO_URL

const client = new MongoClient(URL)

async function connectDB(){
    try {
        await client.connect()
        console.log('DB connected successfully...')
    } catch (err) {
        console.log(err.message)
        throw err;
    }
}

module.exports = connectDB