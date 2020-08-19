import { combineReducers } from "redux";
import authReducer from './authrReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    auth :authReducer,
    marvelData :dataReducer
});

export default rootReducer