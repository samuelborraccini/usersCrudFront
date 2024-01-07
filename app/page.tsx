"use client";
import UserList from "@/components/UserList";
import axiosConfig from "@/config/axios";
import { User } from "@/types/userTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux";
export default function Home() {
  return (
    <>
      <UserList />
    </>
  );
}
