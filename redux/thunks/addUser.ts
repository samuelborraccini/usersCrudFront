import axiosClient from "@/config/axios";
import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";

const addUser = createAsyncThunk("user/add", async () => {
  const response = await axiosClient.post("/", {
    username: faker.person.firstName(),
    password: faker.string.alphanumeric(10),
  });

  return response.data.user;
});

export { addUser };
