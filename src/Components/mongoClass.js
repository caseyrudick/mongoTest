const { MongoClient } = require("mongodb")

// class MongoConnections {
//   constructor(){
//     this.uri = "mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority"
//     this.client = MongoClient(this.uri)
//     this.mongoDb = this.client[this.mongoDBName]
//   }
//   connectToMongoDB(dbName="sample_mflix") {
//     this.uri = "mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority"
//     this.client = MongoClient(this.uri)
//     this.mongoDBName = "sample_mflix"
//     this.db = this.client.db(`${this.mongoDBName}`)
//     return this
//   }
//   readMongoDb (collectionName) {
//     let readCollection = this.mongoDb[collectionName]
//     cursor = readCollection.find({})
//     console.log(cursor)
//     return cursor
//   }
// }



// const async () => {
//   monConnect = new MongoConnections()
//   await monConnect.connectToMongoDB()
// }


module.exports = {
  myFunction: async (query) => {
    let db, client;
    try {
      client = await MongoClient.connect("mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority", { useNewUrlParser: true });
      db = client.db("sample_mflix");
      return await db.collection(collectionName).find(query).toArray();
    } finally {
      client.close();
    }
  }
}

// let mon
// let curs
// setTimeout(() => {
//   mon = monConnect.connectToMongoDB()
// }, 1000)
// setTimeout(() => {
//   curs = monConnect.readMongoDb()
// }, 1500)


// let connectedInstance =  monConnect.connectToMongoDB("CAPEX")
// connectedInstance.readMongoDb()
