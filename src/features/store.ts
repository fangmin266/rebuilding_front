import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import commonSlice from "./admin/commonSlice";
const reducers = combineReducers({
  //admin
  admincommon: commonSlice
})
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["commonApp"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;