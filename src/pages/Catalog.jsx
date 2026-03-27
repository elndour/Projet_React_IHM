import React, { useContext, useState, useMemo } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import ItemCard from '../components/ItemCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Catalog = () => {
  const { items } = useContext(CollectionContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Liste des catégories pour le filtre (générée dynamiquement)
  const categories = useMemo(() => {
    return [...new Set(items.map(i => i.category))];
  }, [items]);

  // Filtrage et recherche combinés (temps réel)
  const filteredItems = useMemo(() => {
    return items
      .filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(item => 
        selectedCategory ? item.category === selectedCategory : true
      );
  }, [items, searchTerm, selectedCategory]);

  return (
    <div className="catalog-container">
      <h1 className="page-title">Notre Collection Agroalimentaire</h1>
      
      {/* Barre d'outils (Ergonomie) */}
      <div className="toolbar">
        <div className="search-bar">
          <FaSearch />
          <input 
            type="text" 
            placeholder="Rechercher un produit..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-bar">
          <FaFilter />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Toutes les catégories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Grille d'affichage */}
      {filteredItems.length === 0 ? (
        <div className="no-results">Aucun produit ne correspond à votre recherche.</div>
      ) : (
        <div className="items-grid">
          {filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;