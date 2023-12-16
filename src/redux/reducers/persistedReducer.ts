import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { PersistConfig } from "redux-persist/es/types";
import { activeSymbolsSlice } from "../slices/api/active-symbols-slice";
const persistanceConfiguartion: PersistConfig<any, any, any> = {
  key: "persist",

  storage: localStorage,
};

const rootReducer = combineReducers({
  [activeSymbolsSlice.reducerPath]: activeSymbolsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer<any, any>(persistanceConfiguartion, rootReducer);
