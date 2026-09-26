import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:7023/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log("token", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  }, 
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log(result.error)
    api.dispatch(logout());

    // Remove localStorage data
    localStorage.removeItem("token");

    // Redirect to Login page
    window.location.href = "/login";
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User"],
  endpoints: () => ({}),
});