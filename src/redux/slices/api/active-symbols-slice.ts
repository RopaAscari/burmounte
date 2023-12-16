import { baseQuery } from "./base-slice";
import { TagDescription, createApi } from "@reduxjs/toolkit/query/react";
import { ActiveSymbolLandingResponse, ServiceResult } from "@/core/types";

const baseUrl = "/active-symbols";
const descriptionTags = ["ActiveSymbols"] as readonly TagDescription<"ActiveSymbols">[] & string[];

export const activeSymbolsSlice = createApi({
  reducerPath: "activeSymbols",
  tagTypes: descriptionTags,
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getActiveSymbol: builder.query<ServiceResult<ActiveSymbolLandingResponse[], any>, any>({
      query: () => ({
        url: `${baseUrl}/landing/web`,
      }),
      providesTags: descriptionTags,
    }),
  }),
});
export const { useGetActiveSymbolQuery } = activeSymbolsSlice;
