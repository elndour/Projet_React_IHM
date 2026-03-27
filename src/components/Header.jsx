import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStore, FaPlusCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">Agro<span className="logo-alt">Vitrine</span></div>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaStore /> Catalogue
        </NavLink>
        <NavLink to="/creer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaPlusCircle /> Ajouter un produit
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;