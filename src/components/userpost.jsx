import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostsByUser } from "../api/userapi";

function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostsByUser(userId);
      setPosts(data);
    };
    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2>Posts for User ID: {userId}</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ddd",
              margin: "1rem 0",
              padding: "1rem",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>

      
            <button onClick={() => navigate(`/posts/${post.id}/comments`)}>
              View Comments
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserPosts;





