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
  if (phoneNumber.startsWith("01")) {
    return "+82" + phoneNumber.slice(2);
  }
  return phoneNumber;
}
export const mobileVerify = createAsyncThunk(
  //휴대전화 인증
  "mobileVerify",
  async (phoneverify: string) => {
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
  reducers: {
    // onSetTitleNum: (state, action: PayloadAction<number>) => {
    //   state.titleIdx = action.payload;
    // },
    // onSetTitleName: (state, action: PayloadAction<string>) => {
    //   state.titleName = action.payload;
    // },
  },

  extraReducers: {},
});

export const {} = fundingSlice.actions;

export default fundingSlice.reducer;
