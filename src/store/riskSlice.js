import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  riskData: null,
};

const riskSlice = createSlice({
  name: "risk",
  initialState,
  reducers: {
    setRiskData: (state, action) => {
      state.riskData = action.payload;
    },
  },
});

export const { setRiskData } = riskSlice.actions;
export default riskSlice.reducer;
