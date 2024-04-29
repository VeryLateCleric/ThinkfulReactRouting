import React from 'react'
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import UserPosts from "./UserPosts"
import UserPost from "./UserPost";

function RootRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/users/:userId/*" element={<User />} />
      <Route path="posts" element={<UserPosts />} />
      <Route path="posts/:postId" element={<UserPost />} />
    </Routes>
  )
}

export default RootRoutes
