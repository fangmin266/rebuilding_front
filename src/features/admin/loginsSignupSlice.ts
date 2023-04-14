import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import api, { common } from "../../common/api";

interface CommonState {
  i: number;
  status: null | string;
}
const initialState: CommonState = {
  i: 0,
  status: null
};

interface SignupState {
  email: string;
  password: string;
  username: string;
  agree: boolean;
}
interface LoginState {
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

    console.log(res.data, "res.data");
    return res.data;
  }
);

export const emailLogin = createAsyncThunk(
  "emailLogin",
  async (params: LoginState) => {
    // axios.defaults.withCredentials = true;
    const res = await api.post("auth/login", params);
    console.log(res.headers, "res");
    console.log(document.cookie, "cookie");
    const cookies = res.headers["set-cookie"] ?? "";
    console.log(cookies, "cookie");
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
  }
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;
