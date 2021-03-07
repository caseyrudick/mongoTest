const { MongoClient } = require("mongodb")

class MongoConnections {
  constructor(){
    this.uri = "mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority"
    this.client = MongoClient(this.uri)
    this.mongoDb = this.client[this.mongoDBName]
  }
  connectToMongoDB(dbName="sample_mflix") {
    this.uri = "mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority"
    this.client = MongoClient(this.uri)
    this.mongoDBName = "sample_mflix"
    this.db = this.client.db(`${this.mongoDBName}`)
    return this
  }
  readMongoDb (collectionName) {
    let readCollection = this.mongoDb[collectionName]
    cursor = readCollection.find({})
    console.log(cursor)
    return cursor
  }
}

const monConnect = new MongoConnections()
let mon
let curs
setTimeout(() => {
  mon = monConnect.connectToMongoDB()
}, 1000)
setTimeout(() => {
  curs = monConnect.readMongoDb()
}, 1500)


// let connectedInstance =  monConnect.connectToMongoDB("CAPEX")
// connectedInstance.readMongoDb()
