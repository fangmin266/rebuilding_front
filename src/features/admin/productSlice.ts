import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import api, { common } from "../../common/api";
import { PURGE } from "redux-persist";

interface CommonState {
  i: number;
  status: null | string;
  userInfo: null | any;
  loginReady: boolean;
}
const initialState: CommonState = {
  i: 0,
  status: null,
  userInfo: null,
  loginReady: false,
};

export interface ProductState {
  id?: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  price: number;
  endFunding: string;
  startFunding: string;
  startDelivery: string;
  productImage: string[];
  thumbnail: string;
}

export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
  const res = await api.get("product/all");
  return res;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // loginInfo: (state, action: PayloadAction<any>) => {
    //   state.userInfo = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
