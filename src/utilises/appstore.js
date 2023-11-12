import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appstore = configureStore({
reducer :{
    //will mention all slices in Reducer
    cart:cartReducer /**slicenmae:reducerinside names*/
    
}
});
export default appstore;