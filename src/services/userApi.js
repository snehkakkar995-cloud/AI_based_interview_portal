import { api } from "./api";
import { setUsers } from "../features/userSlice";
import { login } from "../features/auth/authSlice";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({

    // Login API
    loginUser: builder.mutation({
      query: ({ emailId, password }) => ({
        url: `Login?emailId=${encodeURIComponent(emailId)}&password=${encodeURIComponent(password)}`,
        method: "POST",

      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          console.log("Login Response:", data);

          // Save response in Redux
          dispatch(login(data));
        } catch (error) {
          console.error("Login Error:", error);
        }
      },
    }),


    getUser: builder.query({
      query: () => ({
        url: "GetProfile",
        method: "GET",
      }),
    }),
    getStudents: builder.query({        //for call backend data 
      query: () => ({
        url: "GetAllStudent",
        method: "GET",
      }),
    }),
    getInterviewQuestionsByTechnologyId: builder.query({
      query: (technologyId) => ({
        url: `GetInterviewQuestionsByTechnologyId?technologyId=${technologyId}`,
        method: "GET",
      }),
    }),
    getTechnologies: builder.query({
      query: () => ({
        url: "GetAllTechnologies",
        method: "GET",
      }),
    }),

    // getUser: builder.query({
    //   query: (id) => `users/${id}`,
    // }),

    createUser: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
  query: (data) => ({
    url: "ChangePassword",
    method: "POST",
    body: data,
  }),
}),

    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: "PUT",
        body,
      }),
    }),
    updateProfile: builder.mutation({

query:(formData)=>({

url:"UpdateProfile",

method:"POST",

body:formData,

}),


invalidatesTags:["User"]

}),



getProfile: builder.query({

query:()=>({

url:"GetProfile",

method:"GET",

})

}),
analyzeResume: builder.mutation({
  query: (formData) => ({
    url: "ResumeInterview/analyze",
    method: "POST",
    body: formData,
  }),
}),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useChangePasswordMutation,
  useGetInterviewQuestionsByTechnologyIdQuery,
  useGetTechnologiesQuery,
  useGetStudentsQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
useUpdateProfileMutation,
 useAnalyzeResumeMutation,
useGetProfileQuery,
} = userApi;



