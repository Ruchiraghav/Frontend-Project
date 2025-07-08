import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserAlbums() {
  const { userId } = useParams();  // You can keep this if you want to show ID in the heading
  const [albums, setAlbums] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Use static albums instead of API
    const staticAlbums = [
      { id: 1, title: "My First Album" },
      { id: 2, title: "Vacation Pics" },
      { id: 3, title: "Family" },
    ];
    setAlbums(staticAlbums);
    setUserName("Ruchi Raghav");
  }, []);

  const handleViewPhotos = (albumId) => {
    navigate(`/album/${albumId}/photos`);
  };

  return (
    <div>
      <h1>Albums for {userName}</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id} style={{ marginBottom: "1rem" }}>
            <strong>{album.title}</strong>{" "}
            <button onClick={() => handleViewPhotos(album.id)}>
              View Photos
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAlbums;

