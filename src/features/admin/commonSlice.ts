import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  section: string;
  subSection: string;
  i: number;
  status: null | string;
}

const initialState: CommonState = {
  section: "홈",
  subSection: "커뮤니티",
  i: 0,
  status: null,
};

const commonSlice = createSlice({
  name: "섹션",
  initialState,
  reducers: {
    onSetSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },

  extraReducers: {},
});

export const { onSetSection } = commonSlice.actions;

export default commonSlice.reducer;