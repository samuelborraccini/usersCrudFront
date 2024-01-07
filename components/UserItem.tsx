import { User } from "@/types/userTypes";
import { Button, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser } from "@/redux/thunks/deleteUser";
import CheckIcon from "@mui/icons-material/Check";
import { useAppDispatch } from "@/hooks/storeHooks";
import { updateUser } from "@/redux/thunks/updateUser";

type userItemProps = {
  user: User;
};

const UserItem: React.FC<userItemProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [editUser, setEditUser] = useState(false);
  const [userForm, setUserFomr] = useState({
    username: user.username,
    password: user.password,
  });

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };
  const handleEdit = () => {
    setEditUser(!editUser);
  };

  const handleSubmit = () => {
    dispatch(updateUser({ id: user.id, ...userForm }));
    setEditUser(false);
  };
  return (
    <TableRow
      key={user.id}
      sx={{
        textAlign: "center",
      }}
    >
      <TableCell component="th" scope="row">
        {user.id}
      </TableCell>
      {!editUser ? (
        <>
          <TableCell component="th" scope="row">
            {user.username}
          </TableCell>
          <TableCell component="th" scope="row">
            {user.password}
          </TableCell>
        </>
      ) : (
        <>
          <TableCell component="th" scope="row">
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setUserFomr({ ...userForm, [e.target.name]: e.target.value })
              }
              value={userForm.username}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            <input
              className="w-full"
              onChange={(e) =>
                setUserFomr({ ...userForm, [e.target.name]: e.target.value })
              }
              type="text"
              name="password"
              value={userForm.password}
            />
          </TableCell>
        </>
      )}

      <TableCell component="th" scope="row">
        {!editUser ? (
          <Button onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        ) : (
          <Button onClick={() => handleSubmit()}>
            <CheckIcon />
          </Button>
        )}

        <Button onClick={handleEdit}>
          <EditIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
