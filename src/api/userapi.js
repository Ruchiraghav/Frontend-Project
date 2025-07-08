import api from "./api";

export const getUsers = async () => {
  const res = await api.get("/profiles"); // matches your backend route!
  return res.data;
};

export const getPostsByUser = async (userId) => {
  const res = await api.get(`/posts/${userId}`);
  return res.data;
};

export const getCommentsByPost = async (postId) => {
  const response = await api.get(`/comments/${postId}`);
  return response.data;
};














// export const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   if (!response.ok) {
//     throw new Error('Failed to fetch users');
//   }
//   return response.json();
// };

// export const getPostsByUser = async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch posts');
//   }
//   return response.json();
// };

// export const getCommentsByPost = async (postId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch comments');
//   }
//   return response.json();
// };

// export const getAlbumsByUser = async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch albums');
//   }
//   return response.json();
// };

// export const getPhotosByAlbum = async (albumId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch photos');
//   }
//   return response.json();
// };

