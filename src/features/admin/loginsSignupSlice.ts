import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import api, { common } from "../../common/api";
import { PURGE } from "redux-persist";

interface CommonState {
  i: number;
  status: null | string;
  userInfo: null | any;
}
const initialState: CommonState = {
  i: 0,
  status: null,
  userInfo: null,
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
export interface ResetPassTokenState {
  token: string;
  password: string;
}
export interface RandomNumberState {
  email: string;
  random: string;
}
export interface URLSTATE {
  url: string;
}
export interface autoLoginState {
  accessToken: string;
  refreshToken: string;
}

export interface refreshTokenState {
  refreshToken: string;
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
    const res = await api.post("auth/login", params, {
      baseURL: common.baseURL,
      withCredentials: true, // 쿠키 받아오기 위한 옵션
    });

    return res;
  }
);

export const sendEmail = createAsyncThunk(
  //회원가입시 이메일전송하여 랜덤번호 확인
  "sendEmail",
  async (param: EmailState) => {
    const res = await api.post("auth/email/randomnum", param);
    return res.data;
  }
);

export const findEmail = createAsyncThunk(
  "findEmail", //이메일 유무 확인
  async (param: EmailState) => {
    const res = await api.post("auth/email/search", param);
    return res;
  }
);

export const sendPasswordResetLink = createAsyncThunk(
  "sendPasswordResetLink", //비밀번호 리셋
  async (param: EmailState) => {
    const res = await api.post("auth/email/password", param);
    return res;
  }
);

export const getRandomNumInCache = createAsyncThunk(
  "getRandomNumInCache",
  async (param: RandomNumberState) => {
    const res = await api.post("auth/randomnum/incache", param);
    return res;
  }
);

export const changePassBeforeLogin = createAsyncThunk(
  "changePassBeforeLogin",
  async (param: ResetPassTokenState) => {
    const res = await api.post("user/reset/password", param);
    return res;
  }
);

export const autoLogin = createAsyncThunk(
  "autoLogin",
  async (param: autoLoginState) => {
    const response = await axios.post("auth/autologin", {
      baseURL: common.baseURL,
      withCredentials: true, // 쿠키 받아오기 위한 옵션
      headers: {
        Authorization: `Bearer ${param.accessToken}`,
        refresh: param.refreshToken,
      },
    });
    console.log(response, "res?");
    return response;
  }
);

export const autoLoginAccess = createAsyncThunk(
  "autoLogin",
  async ({ accessToken, refreshToken }: autoLoginState) => {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      refresh: refreshToken,
    };

    const res = await api.post("auth/autologin/access", {
      baseURL: common.baseURL,
      withCredentials: true,
      headers, // 헤더에 accessToken과 refreshToken을 포함
    });

    console.log(res, "res?");
    return res;
  }
);
export const autoLoginRefresh = createAsyncThunk(
  "autoLogin",
  async ({ accessToken, refreshToken }: autoLoginState) => {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      refresh: refreshToken,
    };

    const res = await api.post("auth/autologin/refresh", {
      baseURL: common.baseURL,
      withCredentials: true,
      headers, // 헤더에 accessToken과 refreshToken을 포함
    });

    console.log(res, "res?");
    return res;
  }
);

export const setNewAccessToken = createAsyncThunk(
  "autoLogin/newAccessToken",
  async (param: refreshTokenState) => {
    const res = await api.post("auth/autologin/newAccessToken", param, {
      baseURL: common.baseURL,
      withCredentials: true, // 쿠키 받아오기 위한 옵션
    });
    return res;
  }
);

const loginsSignupSlice = createSlice({
  name: "loginsSignupSlice",
  initialState,
  reducers: {
    loginInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    removeLoginInfo: (state) => {
      //사용자정보삭제 로컬스토리지 (미해결)
      state.userInfo = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(emailSignup.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const { loginInfo, removeLoginInfo } = loginsSignupSlice.actions;

export default loginsSignupSlice.reducer;
