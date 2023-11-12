import { useState, useMemo, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Page404 from "./pages/Page404";
import Navbar from "./components/UI/Navbar/Navbar";
import PostPage from "./pages/PostPage";
import { privateRoutes, publicRoutes } from "./router";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        {isAuth ? (
          <Routes>
            {privateRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<route.component />}
                  key={route.path}
                />
              );
            })}
          </Routes>
        ) : (
          <Routes>
            {publicRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<route.component />}
                  key={route.path}
                />
              );
            })}

            {/* <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<Page404 />} /> */}
          </Routes>
          
        )}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
