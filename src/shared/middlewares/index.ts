import { createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";

const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening = listenerMiddleware.startListening as AppStartListening;
