import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import api, { common } from "../../common/api";

interface CommonState {
  i: number;
  status: null | string;
}
const initialState: CommonState = {
  i: 0,
  status: null,
};

interface SignupState {
  email: string;
  password: string;
  username: string;
  agree: boolean;
}
export interface LoginState {
  email: string;
  password: string;
}
interface EmailState {
  email: string;
}

export const emailSignup = createAsyncThunk(
  "emailSignup",
  async (params: SignupState) => {
    const res = await api.post("auth/signup", params);
    return res.data;
  }
);

export const emailLogin = createAsyncThunk(
  "emailLogin",
  async (params: LoginState) => {
    const res = await api.post("auth/login", params);
    console.log(res);
    console.log(res.data, "res");
    const cookies = res.headers["Set-Cookie"];

    console.log(cookies);
    return res;
  }
);

export const kakaoLogin = createAsyncThunk("kakaoLogin", async () => {
  // const config: AxiosRequestConfig={
  //   method:"GET",
  //   url:"auth/kakaoLogin",
  //   withCredentials:true
  // }
  // const res = await api.request(config)
  const res = await api.get("auth/kakao");
  console.log(res);
  return res;
});
export const sendEmail = createAsyncThunk(
  "sendEmail",
  async (param: EmailState) => {
    const res = await api.post("auth/sendEmail", param);
    return res.data;
  }
);
const commonSlice = createSlice({
  name: "섹션",
  initialState,
  reducers: {
    // onSetSection: (state, action: PayloadAction<string>) => {
    //   state.section = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(emailSignup.fulfilled, (state, action) => {
      state.status = "success";
    });
  },
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;
