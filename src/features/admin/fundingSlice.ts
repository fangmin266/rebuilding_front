import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../common/api";

interface StudioState {
  titleIdx?: number;
  titleName?: string;
}

const initialState: StudioState = {
  titleIdx: 1,
  titleName: "프로젝트 관리",
};

function replacePrefix(phoneNumber: string) {
  if (phoneNumber.startsWith("0")) {
    return "+82" + phoneNumber.slice(1);
  }
  return phoneNumber;
}

export const mobileVerify = createAsyncThunk(
  //휴대전화 인증
  "mobileVerify",
  async (phoneverify: string) => {
    console.log(replacePrefix("010296931006"), ">?");
    const res = await api.post("auth/sms/verify", {
      phone: replacePrefix(phoneverify),
    });
    console.log(res, "res");
    return res.data;
  }
);

const fundingSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {},

  extraReducers: {},
});

export const {} = fundingSlice.actions;

export default fundingSlice.reducer;
