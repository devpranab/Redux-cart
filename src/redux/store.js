import { createStore } from "redux";
import cartReducers from "./reducers";

export const store = createStore(cartReducers);