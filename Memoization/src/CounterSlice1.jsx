import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
let initialState = {
  count: 0,
  user: [],
  github: [],
};
export let fetchdata = createAsyncThunk("counterSlice1/fetchdata", async () => {
  let response = await fetch("https://api.github.com/users");
  return await response.json();
});

export let fetchdata2 = createAsyncThunk(
  "counterSlice1/fetchdata2",
  async () => {
    let response = await fetch("https://api.github.com/users");
    return await response.json();
  }
);

let counterSlice1 = createSlice({
  name: "counterSlice1",
  initialState,
  reducers: {
    increment1: (state) => {
      return { count: state.count + 1 };
    },
    decrement1: (state) => {
      return { count: state.count - 1 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.user = action.payload;
      // console.log(action.payload); //payload will store the data which we being fetchdata
    });
    builder.addCase(fetchdata2.fulfilled, (state, action) => {
      state.github = action.payload;
    });
  },
});

export let { increment1, decrement1 } = counterSlice1.actions;
export default counterSlice1.reducer;
