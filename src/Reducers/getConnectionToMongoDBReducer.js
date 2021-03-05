import {
  CONNECT_TO_MONGO_TEST_REQUESTED,
  CONNECT_TO_MONGO_TEST_RECEIVED,
  CONNECT_TO_MONGO_TEST_FAILED
} from "../ActionCreators/types"

const INITIAL_STATE = {
  response: {},
  status: ""
}

/* eslint-disable */
export default (state = INITIAL_STATE, {type, payload}) => {
/* eslint-enable */
  switch (type) {
    case CONNECT_TO_MONGO_TEST_REQUESTED:
      return {...state, status: "waiting"}
    case CONNECT_TO_MONGO_TEST_RECEIVED:
      return {...state, response: payload, status: "received"}
    case CONNECT_TO_MONGO_TEST_FAILED:
      return {...state, response: payload, status: "failed"}
    default:
      return state;
  }
}