import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CollectionProvider } from './components/CollectionProvider';
import Layout from './components/Layout';
import Catalog from './pages/Catalog';
import Create from './pages/Create';
import Details from './pages/Details';
import Modify from './pages/Modify';

// Import des styles (Créer ce fichier après)
import './App.css';

const App = () => {
  return (
    <CollectionProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/creer" element={<Create />} />
            <Route path="/produit/:id" element={<Details />} />
            <Route path="/modifier/:id" element={<Modify />} />
            <Route path="*" element={<Catalog />} />
          </Routes>
        </Layout>
      </Router>
    </CollectionProvider>
  );
};

export default App;