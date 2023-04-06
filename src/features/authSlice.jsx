import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {    // 5 redux states
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {  //start ve fail işlemleri login, logout ve register işlemleri için ortak olduğundan tek bir defa yaılır. // ayrıca sadece güncelleme yapılacaklar değiştirilir.
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;  // bu şekilde yaım tamamen apinin içindekilerle ilgili
      state.isAdmin = payload?.user?.is_superuser;
      state.token = payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;  //logout başarılıysa currentUser'ı sil demektir.
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
