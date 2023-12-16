import { getDomain } from "@/core/utils";
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
  validateStatus(response, body) {
    return [200, 201].includes(response.status);
  },
  baseUrl: getDomain(),
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  return result;
};
