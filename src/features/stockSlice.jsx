import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    // 5 redux states
    purchases: [],
    sales: [],
    brands: [],
    firms: [],
    products: [],
    categories: [],
    loading: false,
    error: false,
  },
  reducers: {
    //start and fail operations are common for login, logout and register operations, so they are done only once. // also only the ones to be updated are changed.
    //The fetchStart, getSuccess, and fetchFail reducers are used to update properties in the slice. These reducers are called when an action is submitted to the Redux store and update the slice's state.
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      // used only one reducer for initialStates with dynamic payload ( payload == data + url)
      state.loading = false;
      state[url] = data;
    },

    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getProCatBrandSuccess } =
  stockSlice.actions;
export default stockSlice.reducer;
