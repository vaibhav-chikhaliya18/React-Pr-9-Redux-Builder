import { combineReducers } from "redux";
import reducer from "./reducer";

const rootreducer = combineReducers({
    crud : reducer
})

export default rootreducer;