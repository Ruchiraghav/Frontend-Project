import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhotosByAlbum } from "../api/userapi";

function AlbumPhotos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const photosData = await getPhotosByAlbum(albumId);
      setPhotos(photosData);
    };
    fetchData();
  }, [albumId]);

  return (
    <div>
      <h2>Photos for Album ID: {albumId}</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
        {photos.map(photo => (
          <li key={photo.id} style={{ margin: "1rem" }}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: "100px", display: "block" }}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumPhotos;
