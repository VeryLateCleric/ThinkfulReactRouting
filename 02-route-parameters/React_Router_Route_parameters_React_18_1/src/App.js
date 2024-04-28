import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
       <nav>
       <Link to="/user/new">New User</Link>       
        {Array(10)
          .fill()
          .map((_, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                User{id}
              </Link>
            </div>
          ))}
        </nav>
        <Routes>
          <Route path="/user/new"> <div> Unable to create a new user </div> </Route>
          <Route path="/user/:userId"><UserProfile /></Route>
          <Route path="/"> <div>404 Not Found</div> </Route>
        </Routes>
       {/* Setup routes with route paramaters as needed */}
    </div>
    //

  );
}

export default App;
