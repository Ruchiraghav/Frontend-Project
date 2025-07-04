import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByUser, getUsers } from "../api/userapi";

function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {

      const postsData = await getPostsByUser(userId);
      setPosts(postsData);

      const usersData = await getUsers();
      const user = usersData.find((u) => u.id === parseInt(userId));
      setUserName(user ? user.name : "Unknown");
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Posts for {userName}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;

