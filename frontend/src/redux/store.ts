import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postsReducer } from "./posts";
import { authReducer } from "./auth";
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["_id"],
};
const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  posts: postsReducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      //   .prepend(refreshTokenMiddleware)
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
