import { createSlice } from "@reduxjs/toolkit";

import { addUser } from "../thunks/addUser";
import { fetchUsers } from "../thunks/fetchUser";
import { User } from "@/types/userTypes";
import { deleteUser } from "../thunks/deleteUser";
import { updateUser } from "../thunks/updateUser";

type InitialState = {
  data: User[];
  isLoading: boolean;
  error: any;
};

const initialState: InitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((e) => e.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.data.findIndex((user) => {
        return user.id === action.payload.id;
      });
      state.data[index] = {
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
      };
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = userSlice.reducer;
export type { InitialState };
