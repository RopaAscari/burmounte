"use client";

import { Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Suspense />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
