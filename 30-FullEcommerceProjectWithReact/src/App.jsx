// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // React Router-i import edirik
import Layout from './components/Layout';  // Layout komponentini import edirik
import Basket from './pages/user/Basket';  // Basket səhifəsini import edirik
import Home from './pages/user/Home';
import Wishlist from './pages/user/Wishlist';  // Wishlist səhifəsini import edirik

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>  {/* Layout ilə routing qururuq */}
    //       <Route index element={<Home />} />  {/* Default Home səhifəsi */}
    //       <Route path="basket" element={<Basket />} />
    //       <Route path="wishlist" element={<Wishlist />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <>
    <Home/>
    </>
  );
};

export default App;
