import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTweets = localStorage.getItem("tweets");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  const login = (username) => {
    const userData = { username };

    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };

    const updatedTweets = [
      newTweet,
      ...tweets,
    ];

    setTweets(updatedTweets);

    localStorage.setItem(
      "tweets",
      JSON.stringify(updatedTweets)
    );
  };

  const likeTweet = (id) => {
    const updatedTweets = tweets.map(
      (tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likes: tweet.likes + 1,
            }
          : tweet
    );

    setTweets(updatedTweets);

    localStorage.setItem(
      "tweets",
      JSON.stringify(updatedTweets)
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={login} />
            )
          }
        />

        <Route
          path="/"
          element={
            user ? (
              <Home
                user={user}
                logout={logout}
                tweets={tweets}
                onAddTweet={addTweet}
                onLike={likeTweet}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/profile"
          element={
            user ? (
              <Profile
                user={user}
                tweets={tweets}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;