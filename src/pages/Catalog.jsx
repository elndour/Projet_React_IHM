import React, { useContext } from 'react';
import { CollectionContext } from '../components/CollectionContext';
import ItemCard from '../components/ItemCard';

const Catalog = () => {
  const { items } = useContext(CollectionContext);

  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <h1>Notre Collection</h1>
        <p>Découvrez nos produits agroalimentaires d'exception</p>
      </header>
      
      <div className="items-grid">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {items.length === 0 && (
        <p style={{textAlign: 'center', marginTop: '50px', color: '#64748b'}}>
          Aucun produit dans le catalogue.
        </p>
      )}
    </div>
  );
};

export default Catalog;