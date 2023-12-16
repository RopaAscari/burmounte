import { Store } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { activeSymbolsSlice } from "../slices/api/active-symbols-slice";
import { RootState, persistedReducer } from "../reducers/persistedReducer";
import { FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE } from "redux-persist";

const store: Store<RootState, any> & {
  dispatch: any;
} = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([thunk, activeSymbolsSlice.middleware]),

  enhancers: [],
});

const persistor = persistStore(store);

const wrapper = createWrapper(() => store);

export { store, persistor, wrapper };
