import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gratitudeItems: [],
};

const gratitudeSlice = createSlice({
  name: "gratitude",
  initialState,
  reducers: {
    setGratitudes: (state, action) => {

    },
  },
});

export const { setGratitudes } = gratitudeSlice.actions;

export default gratitudeSlice.reducer;
