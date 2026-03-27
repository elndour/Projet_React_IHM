import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="main-footer">
        <p>IHM GPHY 2025-2026 - Projet Vitrine - © NOM1 & NOM2</p>
      </footer>
    </div>
  );
};

export default Layout;