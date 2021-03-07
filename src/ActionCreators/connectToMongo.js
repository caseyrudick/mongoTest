import {
  CONNECT_TO_MONGO_TEST_REQUESTED,
  CONNECT_TO_MONGO_TEST_RECEIVED,
  CONNECT_TO_MONGO_TEST_FAILED
} from "./types"

const { MongoClient } = require("mongodb")
const uri ="mongodb+srv://m220student:m220password.caq38.mongodb.net/sample_mflix?retryWrites=true&w=majority"
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir)


// const main = async () => {
//   const movie = ""
//   try {
//     await client.connect();
//     console.log(client)
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     movie = await movies.findOne(query);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
//   return movie
// } 

// export default () => {
//   return async dispatch => {
//     dispatch({
//         type: CONNECT_TO_MONGO_TEST_REQUESTED
//     })
//     try {
//       const val = run()
//       dispatch({
//         type: CONNECT_TO_MONGO_TEST_RECEIVED, 
//         payload: val
//       })

//     } catch (error) {
//       console.log("test failed")
//         dispatch({
//           type: CONNECT_TO_MONGO_TEST_FAILED, 
//           payload: error
//       })
//     } 
//   }
// }

