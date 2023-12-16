import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import exp from "constants";

interface IActiveHeader {
  value: string;
  timeOfLastClick?: number;
}

const initialState: IActiveHeader = {
  value: "Home",
  timeOfLastClick: 0,
};

export const activeHeaderSlice = createSlice({
  name: "activeHeader",
  initialState,
  reducers: {
    changeHeaderState: (state, action: PayloadAction<IActiveHeader>) => {
      state.value = action.payload.value;
      state.timeOfLastClick = action.payload.timeOfLastClick;
    },
  },
});

export const { changeHeaderState } = activeHeaderSlice.actions;

export const selectActiveHeader = (state: RootState) =>
  state.activeHeader.value;

export default activeHeaderSlice.reducer;
