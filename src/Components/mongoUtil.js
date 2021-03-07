const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://crudick:BVIUS1nuQqnoUrio@stage.sur03.gcp.mongodb.net/CAPEX?retryWrites=true&w=majority"
let _db

const connectDB = async (callback) => {
    try {
        MongoClient.connect(uri, (err, db) => {
            _db = db
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

module.exports = { connectDB, getDB, disconnectDB }