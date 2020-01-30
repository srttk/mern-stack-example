import React from "react";

const ListItem = ({ user }) => {
  return (
    <div>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <p>{user.email}</p>
    </div>
  );
};

export default ListItem;
