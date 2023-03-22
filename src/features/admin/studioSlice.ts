import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudioState {
  titleIdx?: number,
  titleName?:string
}

const initialState: StudioState = {
  titleIdx: 1,
  titleName: '프로젝트 관리'
};

const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    onSetTitleNum: (state, action: PayloadAction<number>) => {
      state.titleIdx = action.payload;
    },
    onSetTitleName: (state, action: PayloadAction<string>) => {
      state.titleName = action.payload;
    },
  },

  extraReducers: {},
});

export const { onSetTitleNum, onSetTitleName } = studioSlice.actions;

export default studioSlice.reducer;