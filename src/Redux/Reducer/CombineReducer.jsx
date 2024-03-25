import { combineReducers } from "redux";
import CartReducer from './CartReducer';

const MainReducer = combineReducers({
    CartReducer,
});

export default MainReducer;