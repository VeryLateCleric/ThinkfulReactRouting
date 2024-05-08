import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import UserPost from "./UserPost";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";
import Users from "./Users";


function RootRoutes({user, posts}) {
  return (
    <Routes>
    <Route path="/*" element={<Users />} />
    <Route path="/users/:userId" element={<User />} >
      <Route path="" element={<UserProfile user={user}/>} />
      <Route path="posts" element={<UserPosts posts={posts}/>}>
        <Route path=":postId" element={<UserPost />} />
      </Route>
    </Route>
    </Routes>
  )
}

// function RootRoutes(user, posts) {
//   return (
//     <Routes>
//       <Route path="/*" element={<Users />} />
//       <Route path="/users/:userId" element={<Users />}>
//         <Route path="" element={<UserProfile user={user} />} />
//         <Route path="posts" element={<UserPosts posts={posts}/>} >
//         <Route path=":postId" element={<UserPost />}/>
//       </Route>
//       </Route>
//     </Routes>
//   );
// }

export default RootRoutes;
