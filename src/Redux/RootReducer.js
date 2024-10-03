import { combineReducers } from "redux";
import wishlistReducer from "./WishlistReducer"
const rootReducer = combineReducers({
    wishlist : wishlistReducer,
})


export default rootReducer;