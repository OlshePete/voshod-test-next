import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  first_view:true,
}
export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    updateStatus: (state) => {
      state.first_view=false;
    }
  },
});

export const {
  updateStatus,
  reset
} = counter.actions;
export default counter.reducer;
