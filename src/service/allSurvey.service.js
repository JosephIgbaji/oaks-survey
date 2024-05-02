import { GETALLSURVEY } from "./constants";
import apiSlice from "./api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Case route
    getAllSurvey: builder.query({
      query: () => ({
        url: GETALLSURVEY,
        method: "GET",
      }),
      providesTags: ["AllSurvey"],
    }),
  }),
});

export const { useGetAllSurveyQuery } = userApiSlice;
