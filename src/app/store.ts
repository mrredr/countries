import { configureStore } from "@reduxjs/toolkit";
import authReducer from "enteties/auth/model";
import { AUTH_LOCAL_STORAGE_KEY } from "shared/constants";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: loadAuthState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function loadAuthState() {
  const authentication = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  return authentication !== null ? { auth: { value: authentication } } : undefined;
}
