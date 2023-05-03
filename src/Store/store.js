import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer} from "../Redux/ReducerProduct/reducer";
import thunk from "redux-thunk";

const allReducer = combineReducers({
    productReducer,
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))