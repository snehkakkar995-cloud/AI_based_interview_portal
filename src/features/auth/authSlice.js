import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  emailId: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.emailId = action.payload.emailId;
      state.role = action.payload.role;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.emailId = null;
      state.role = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;