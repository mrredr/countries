import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AUTH_LOCAL_STORAGE_KEY } from "shared/constants";
import { startAppListening } from "shared/middlewares";

export type AuthState = {
  value: string | null;
};

const initialState: AuthState = {
  value: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "user";
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

const selfSelector = (state: RootState) => state;
export const getAuthStateSelector = createSelector(selfSelector, (state) => state.auth.value);

startAppListening({
  matcher: isAnyOf(login, logout),
  effect: (_, listenerApi) => {
    const authState = getAuthStateSelector(listenerApi.getState());
    if (authState === null) {
      localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, authState);
    }
  },
});
