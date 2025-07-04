import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAlbumsByUser, getUsers } from "../api/userapi";

function UserAlbums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const albumsData = await getAlbumsByUser(userId);
      setAlbums(albumsData);

      const usersData = await getUsers();
      const user = usersData.find(u => u.id === parseInt(userId));
      setUserName(user ? user.name : "Unknown");
    };
    fetchData();
  }, [userId]);

  const handleViewPhotos = (albumId) => {
    navigate(`/album/${albumId}/photos`);
  };

  return (
    <div>
      <h1>Albums for {userName}</h1>
      <ul>
        {albums.map(album => (
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
