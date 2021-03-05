import {
  CONNECT_TO_MONGO_TEST_REQUESTED,
  CONNECT_TO_MONGO_TEST_RECEIVED,
  CONNECT_TO_MONGO_TEST_FAILED
} from "./types"

const { MongoClient } = require("mongodb")
const MONGODB_URI = process.env.MONGODB_URI
const MFLIX_DB_URI="mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/test?retryWrites=true&w=majority"
const MFLIX_NS="sample_mflix"
const PORT=5000

export default () => {
  //console.log(MFLIX_DB_URI)
  return async dispatch => {
    dispatch({
        type: CONNECT_TO_MONGO_TEST_REQUESTED
    })
    try {
      console.log("trying")
      const response = await MongoClient.connect(MFLIX_DB_URI, {
      // const response = await MongoClient.connect("mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        //connectTimeoutMS: 2000, 
        retryWrites: true,
        // LOOK THIS UP
        useNewUrlParser: true
      }) 
      console.log(response)
      // use in another actionCreator:
      // const mflixDB = testClient.db("mflix")
      
      // looks like listCollections returns objects of the collections
      const mflixCollections = await response.db('sample_mflix').listCollections().toArray();
      console.log(mflixCollections)
      const collectionNames = mflixCollections.map(obj => obj.name)
      dispatch({
        type: CONNECT_TO_MONGO_TEST_RECEIVED,
        payload: collectionNames
      })
    } catch (error) {
      console.log("test failed")
        dispatch({
          type: CONNECT_TO_MONGO_TEST_FAILED, 
          payload: error
      })
    }
  }
}

