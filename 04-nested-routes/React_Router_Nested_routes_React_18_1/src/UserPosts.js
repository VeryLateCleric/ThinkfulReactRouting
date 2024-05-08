import React from "react";
import { Link, useParams, Outlet, Routes, Route } from "react-router-dom";
import users from "./data.json";
import UserPost from "./UserPost";

export const UserPosts = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }
  const user = users.find((user) => `${user.id}` === userId);

  const postLinks = user.posts.map((post) => (
    <li key={post.id}>
      <Link
        to={`/users/${userId}/posts/${post.id}`}
        data-testid={`user-post-${post.id}`}
      >
        {post.title}
      </Link>
    </li>
  ));

  return (
    <section>
      <div>
        <h1>This is a test</h1>
        <h2>User {user.name} Posts</h2>
        <ul>{postLinks}</ul>
        {/* TODO: Display Nested Routes" */}
        
        <Outlet />
      </div>
    </section>
  );
};

export default UserPosts;
