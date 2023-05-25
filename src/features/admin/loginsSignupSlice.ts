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
  isPersonalInfo: boolean;
}
export interface LoginState {
  email: string;
  password: string;
}
export interface EmailState {
  email: string;
}

export const emailSignup = createAsyncThunk(
  //일반 회원가입
  "emailSignup",
  async (params: SignupState) => {
    const res = await api.post("auth/signup", params);
    return res.data;
  }
);

export const emailLogin = createAsyncThunk(
  // 일반 로그인
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

export const sendEmail = createAsyncThunk(
  //회원가입시 이메일전송하여 랜덤번호 확인
  "sendEmail",
  async (param: EmailState) => {
    const res = await api.post("auth/sendEmail", param);
    return res.data;
  }
);

export const findEmail = createAsyncThunk(
  "findEmail", //이메일 유무 확인
  async (param: EmailState) => {
    const res = await api.post("auth/findEmail", param);
    return res;
  }
);

export const sendPasswordResetLink = createAsyncThunk(
  "sendPasswordResetLink", //비밀번호 리셋
  async (param: EmailState) => {
    const res = await api.post("auth/link/passwordreset", param);
    return res;
  }
);

export const getRandomNumInCache = createAsyncThunk(
  "getRandomNumInCache",
  async () => {
    const res = await api.get("auth/randomnum/incache");
    return res;
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
