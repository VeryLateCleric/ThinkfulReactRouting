import React from 'react'
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import UserPosts from "./UserPosts"

function RootRoutes() {
  return (
    <Routes>
    <Route path="/*" element={<Users />} />
    <Route path="/users/:userId/*" element={<User />} />
      <Route path="Posts" element={<UserPosts />} />
      <Route path="" element={<UserPosts />} />
    </Routes>
  )
}

export default RootRoutes
