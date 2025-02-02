// src/components/Layout.jsx

import React from 'react';
import Navbar from './Navbar';  // Navbar-i burada import edirik
import { Outlet } from 'react-router-dom';  // Outlet istifadə olunur, çünki burada Home və digər səhifələr render olunacaq

const Layout = () => {
  return (
    <div>
      <Navbar />  {/* Navbar burada yerləşir */}
      <main>
        <Outlet />  {/* Bütün səhifələr Layout daxilində render olunacaq */}
      </main>
    </div>
  );
};

export default Layout;
