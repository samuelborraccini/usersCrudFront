import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
