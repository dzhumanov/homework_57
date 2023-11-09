import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <p className="card-text mb-0">role: {user.role}</p>
        <p className="card-text">active: {user.active ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default UserItem;
