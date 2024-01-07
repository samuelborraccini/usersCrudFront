import axiosClient from "@/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteUser = createAsyncThunk("user/remove", async (arg: number) => {
  await axiosClient.delete(`/${arg}`);

  return arg;
});

export { deleteUser };
