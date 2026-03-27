import React, { createContext, useState, useEffect } from 'react';
import initialData from '../data/produits.json';

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  // Charger les données depuis localStorage ou JSON par défaut
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('my_agro_collection');
      return saved ? JSON.parse(saved) : initialData;
    } catch (e) {
      console.error("Erreur de chargement", e);
      return initialData;
    }
  });

  // Sauvegarder dans localStorage dès que 'items' change
  useEffect(() => {
    localStorage.setItem('my_agro_collection', JSON.stringify(items));
  }, [items]);

  // CRUD : Ajouter un item avec un ID unique
  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(), // Génération d'un ID unique simple
      price: parseFloat(item.price) || 0, // S'assurer que le prix est un nombre
      details: {} // Structure par défaut pour les détails étendus
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // CRUD : Supprimer un item par son ID
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(i => i.id !== id));
  };

  return (
    <CollectionContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CollectionContext.Provider>
  );
};