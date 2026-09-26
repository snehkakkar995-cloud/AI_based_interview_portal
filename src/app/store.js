// app/store.js

import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/userSlice"
export const store = configureStore({
    reducer: {
         auth: authReducer,
         user: userReducer,
        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});