import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPost } from "../api/userapi";

function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getCommentsByPost(postId);
      setComments(data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div>
      <h2>Comments for Post ID: {postId}</h2>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{c.name}</h3>
            <p>{c.body}</p>
            <p><strong>Email:</strong> {c.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Comments;

