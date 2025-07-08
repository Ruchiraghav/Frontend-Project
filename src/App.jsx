 import React from "react";
 import { Routes, Route, BrowserRouter } from "react-router-dom";

 import Home from "./components/home";
 import Feature from "./components/feature";
 import MainLayout from "./components/mainlayout";
 import View from "./components/view";
 import Register from "./components/register";
 import Loginpage from "./components/loginpage";
 import PrivateRoute from "./components/PrivateRoute";
 import NotFound from "./components/notfound";
 //import FetchExample from "./api/fetchexample.jsx";
 import Users from "./components/user";
 import UserPosts from "./components/userpost";
//  import UserAlbums from "./components/UserAlbum";
//  import AlbumPhotos from "./components/AlbumPhotos";
 import Comments from "./components/comments";
 import { getUsers } from "./api/userapi";


function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Loginpage />} />

       <Route path="/" element={<MainLayout />} />

       <Route
       path="/home"
       element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
       />
         <Route
       path="/user/:userId/posts"
       element={
          <PrivateRoute>
            <UserPosts />
          </PrivateRoute>
        }
       />
        <Route
       path="/posts/:postId/comments"
       element={
          <PrivateRoute>
            <Comments />
          </PrivateRoute>
        }
       />
       {/*
       <Route
       path="/user/:userId/albums"
       element={
          <PrivateRoute>
            <UserAlbums />
          </PrivateRoute>
        }
       />
         <Route
       path="/album/:albumId/photos"
       element={
          <PrivateRoute>
            <AlbumPhotos />
          </PrivateRoute>
        }
       /> */}
      <Route
        path="/feature"
        element={
          <PrivateRoute>
            <Feature />
           </PrivateRoute>
         }
       />
       <Route
         path="/user"
         element={
           <PrivateRoute>
              <div> <h4>Profiles</h4>
                 <Users />
                </div>
           </PrivateRoute>
         }
       />
     <Route
         path="/students"
         element={
           <PrivateRoute>
             <View />
           </PrivateRoute>
         }
       />
         <Route path="*" element={<NotFound />} />
     </Routes>
      </BrowserRouter>
  );
}

export default App;
