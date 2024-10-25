import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAuthState, JWT } from "../types/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, { payload }: PayloadAction<JWT>) => {
      state.isAuthenticated = !!payload.access;
      state.token = payload.access;
      state.refresh = payload.refresh;
      state.user = payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.refresh = null;
      state.user = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
