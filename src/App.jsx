import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CollectionProvider } from './components/CollectionProvider';
import Layout from './components/Layout';
import Catalog from './pages/Catalog';
import Create from './pages/Create';
import Details from './pages/Details';

// Import des styles (Créer ce fichier après)
import './App.css';

const App = () => {
  return (
    <CollectionProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/creer" element={<Create />} />
            <Route path="/produit/:id" element={<Details />} />
            <Route path="*" element={<Catalog />} /> {/* Redirection par défaut */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </CollectionProvider>
  );
};

export default App;