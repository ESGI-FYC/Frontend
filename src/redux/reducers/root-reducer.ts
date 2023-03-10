import {combineReducers} from "redux";

import productReducer from "./product-reducer";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import adminReducer from "./admin-reducer";
import orderReducer from "./order-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    admin: adminReducer,
    order: orderReducer,
    user: userReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
