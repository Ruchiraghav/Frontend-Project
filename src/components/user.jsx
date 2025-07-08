import React, { useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api/userapi";

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleGetUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <div>
      <button onClick={handleGetUsers}>Get User Profiles</button>
      <div className="user-list">
        {users.map((user) => (
          <div
            key={user._id}
            className="user-card"
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              margin: "1rem 0",
            }}
          >
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            {user.company && <p><strong>Company:</strong> {user.company.name}</p>}
            {user.address && (
              <p>
                <strong>Address:</strong> {user.address.street}, {user.address.city}
              </p>
            )}
            
            <button onClick={() => navigate(`/user/${user.id}/posts`)}>
              View Posts
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;




