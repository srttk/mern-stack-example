import React from "react";
import "./ListItem.css";
const ListItem = ({ user }) => {
  return (
    <div className="list-item">
      <div>
        {user.firstName} {user.lastName}
      </div>
      <p>{user.email}</p>
    </div>
  );
};

export default ListItem;
