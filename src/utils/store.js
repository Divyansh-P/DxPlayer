import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";
import homeslice from "./homeslice";

const store=configureStore({
reducer:{
    app:appslice,
    search:searchslice,
    home:homeslice
}
})

export default store