import axiosClient from "@/config/axios";
import { User } from "@/types/userTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateUser = createAsyncThunk("user/update", async (user: User) => {
  const resp = await axiosClient.put(`/${user.id}`, {
    username: user.username,
    password: user.password,
  });

  return resp.data;
});

export { updateUser };
