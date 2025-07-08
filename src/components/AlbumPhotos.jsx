// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getPhotosByAlbum } from "../api/userapi";

// function AlbumPhotos() {
//   // const { albumId } = useParams();
//   // const [photos, setPhotos] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const photosData = await getPhotosByAlbum(albumId);
//   //     setPhotos(photosData);
//   //   };
//   //   fetchData();
//   // }, [albumId]);
//     const photos = [
//     {
//       id: 1,
//       title: "My First Photo",
//       thumbnailUrl: "/image/photo1.jpg",
//     },
//     {
//       id: 2,
//       title: "My Second Photo",
//       thumbnailUrl: "/image/photo2.jpg",
//     },
//     {
//       id: 3,
//       title: "Another One",
//       thumbnailUrl: "/image/photo3.jpeg",
//     },
//   ];

//   return (
//     <div>
//       <h1>Photos</h1>
//       <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
//         {photos.map((photo) => (
//           <li key={photo.id} style={{ margin: "1rem" }}>
//             <img
//               src={photo.thumbnailUrl}
//               alt={photo.title}
//               style={{ width: "500px", display: "block" }}
//             />
//             <p>{photo.title}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AlbumPhotos;
