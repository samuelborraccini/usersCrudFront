"use client";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserItem from "./UserItem";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { addUser } from "@/redux/thunks/addUser";
import { fetchUsers } from "@/redux/thunks/fetchUser";
import { InitialState } from "@/redux/slices/userSlice";
import { useAppDispatch } from "@/hooks/storeHooks";

const tableHeaders = ["id", "username", "password", "actions"];

const UserList = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: any) => {
    return state.users as InitialState;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleCreate = () => {
    dispatch(addUser());
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      <TableContainer
        component={Paper}
        style={{ width: "fit-content", margin: "auto" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((i, index) => (
                <TableCell sx={{ textAlign: "center" }} key={index}>
                  {i}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => handleCreate()}
        className="bg-blue-600 hover:bg-green-500 max-w-3"
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
};

export default UserList;
