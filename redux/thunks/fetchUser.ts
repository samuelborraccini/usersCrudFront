import axiosClient from "@/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axiosClient.get("/");

  return response.data;
});

export { fetchUsers };
