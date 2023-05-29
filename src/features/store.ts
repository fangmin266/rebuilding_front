import { Action, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import commonSlice from "./admin/commonSlice";
import studioSlice from "./admin/studioSlice";
import loginsSignupSlice from "./admin/loginsSignupSlice";
const reducers = combineReducers({
  //admin
  admincommon: commonSlice,
  studio: studioSlice,
  adminloginAndsignup: loginsSignupSlice,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admincommon"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof persistedReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
