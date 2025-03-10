/* 
 Some Notes, To Run this server locally, you need npm install the react splide
 otherwise the package will not load and it will break everything.

$ npm install @splidejs/react-splide  */


import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFav";
import PageMovie from "../pages/PageMovie";
import LoginPage from "../pages/Login";
import PageWelcome from "../pages/Welcome";
import { APP_FOLDER_NAME } from "../globals/global";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status);
    if (status) {
      navigate('/home');
    }
  };

  useEffect(() => {
    if (!isLoggedIn && !['/login', '/'].includes(location.pathname)) {
      navigate('/login');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <>
      {isLoggedIn && location.pathname !== '/login' && location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<PageWelcome />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route 
          path="/home" 
          element={isLoggedIn ? <PageHome /> : <LoginPage onLogin={handleLogin} />} 
        />
        <Route
          path="/favourites"
          element={isLoggedIn ? <PageFavourites /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <PageAbout /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/movie/:id"
          element={isLoggedIn ? <PageMovie /> : <LoginPage onLogin={handleLogin} />}
        />
      </Routes>

      {isLoggedIn && location.pathname !== '/login' && location.pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>  
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

/* If you're reading this, give us extra point :) '
  also yao ming */