import React from "react";

const DeleteUser = ({ user, deleteUser, onCancel }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete {user.name}?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteUser;