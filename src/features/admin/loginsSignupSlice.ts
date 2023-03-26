import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import api, { common } from "../../common/api";

interface CommonState {
  i: number;
  status: null | string;
}
const initialState: CommonState = {
  i: 0,
  status: null,
};

interface LoginState {
  email: string;
  password: string;
}
export const emailLogin = createAsyncThunk("emailLogin", 
async(params:LoginState)=>{
  const res = await api.post("auth/login",params, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

  const cookies = res.headers['set-cookie'] ?? '';
  const data = res.data;
  console.log(cookies, 'cookie');
  console.log(data, 'data');
  return data;
})

const commonSlice = createSlice({
  name: "섹션",
  initialState,
  reducers: {
    // onSetSection: (state, action: PayloadAction<string>) => {
    //   state.section = action.payload;
    // },
  },

  extraReducers:(builder) =>{
    builder.addCase(emailLogin.fulfilled, (state,action)=>{
        state.status = 'success'
    })
  }
});

export const {  } = commonSlice.actions;

export default commonSlice.reducer;