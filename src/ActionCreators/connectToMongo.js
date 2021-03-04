const { MongoClient } = require("mongodb")
import {
    CONNECT_TO_MONGO_TEST_REQUESTED,
    CONNECT_TO_MONGO_TEST_RECEIVED,
    CONNECT_TO_MONGO_TEST_FAILED
} from "./types"


export default () => {
    return async dispatch => {
        dispatch({
            type: CONNECT_TO_MONGO_TEST_REQUESTED
        })
        try {
            const response = await MongoClient.connect(process.env.MFLIX_DB_URI, {
                connectTimeoutMS: 200, 
                retryWrites: true,
                // LOOK THIS UP
                useNewUrlParser: true
            }) 
            const mflixDB = testClient.db("mflix")
            dispatch({
                type: CONNECT_TO_MONGO_TEST_RECEIVED,
                payload: mflixDB
            })
        } catch (error) {
            dispatch({
                type: CONNECT_TO_MONGO_TEST_FAILED, 
                payload: error
            })
        }
    }
}

