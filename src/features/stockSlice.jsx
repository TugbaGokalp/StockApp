import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {    // 5 redux states
    purchases: null,
    sales: null,
    brands: null,
    firms: null,
    products: null,
    categories: null,
    loading: false,
    error: false,
  },
  reducers: {  //start ve fail işlemleri login, logout ve register işlemleri için ortak olduğundan tek bir defa yaılır. // ayrıca sadece güncelleme yapılacaklar değiştirilir.
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: {data, url} }) => {
      state.loading = false;
      state[url] = data
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
