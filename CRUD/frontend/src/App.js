import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import data from "./data/users.json";

function App() {
  const [users, setUsers] = useState(data.users);
  const [currentUser, setCurrentUser] = useState(null);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDelete = (id) => {
    setUserToDelete(id);
    setShowDeleteUser(true);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setShowDeleteUser(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteUser(false);
  };

  const handleEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setCurrentUser(user);
    setShowEditUser(true);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setCurrentUser(null);
    setShowEditUser(false);
  };

  const handleCancelEdit = () => {
    setCurrentUser(null);
    setShowEditUser(false);
  };

  const handleAddUser = () => {
    setShowAddUser(true);
  };

  const addUser = (user) => {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      ...user,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setShowAddUser(false);
  };

  const handleCancelAdd = () => {
    setShowAddUser(false);
  };

  return (
    <div className="App">
      <h1>Users</h1>
      {showDeleteUser ? (
        <DeleteUser
          user={users.find((user) => user.id === userToDelete)}
          deleteUser={deleteUser}
          onCancel={handleCancelDelete}
        />
      ) : showEditUser ? (
        <EditUser
          user={currentUser}
          editUser={editUser}
          onCancel={handleCancelEdit}
        />
      ) : showAddUser ? (
        <AddUser addUser={addUser} onCancel={handleCancelAdd} />
      ) : (
        <UserList
          users={users}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddUser}
        />
      )}
    </div>
  );
}

export default App;