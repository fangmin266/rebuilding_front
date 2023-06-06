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

interface UserIdState {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export const getUserInfo = createAsyncThunk(
  //일반 회원가입
  "emailSignup",
  async (params: UserIdState) => {
    if (params.accessToken && params.userId) {
      const headers = {
        Authorization: `Bearer ${params.accessToken}`,
        refresh: params.refreshToken,
      };
      const res = await api.get("user/" + params.userId, {
        baseURL: common.baseURL,
        withCredentials: true,
        headers, // 헤더에 accessToken과 refreshToken을 포함
      });

      return res.data;
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // loginInfo: (state, action: PayloadAction<any>) => {
    //   state.userInfo = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
