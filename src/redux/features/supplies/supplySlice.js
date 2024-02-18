import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supplyItems: [],
};

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    setSupplies: (state, action) => {

    },
  },
});

export const { setSupplies } = supplySlice.actions;

export default supplySlice.reducer;
