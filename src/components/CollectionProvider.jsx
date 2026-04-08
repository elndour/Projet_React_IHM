import React, { useState, useEffect } from 'react';
import initialData from '../data/produits.json';
import { CollectionContext } from './CollectionContext';

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
      id: item.id || Date.now().toString(),
      price: parseFloat(item.price) || 0,
      details: item.details || {}
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // CRUD : Modifier un item par son ID
  const updateItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id
          ? { ...updatedItem, id, price: parseFloat(updatedItem.price) || 0, details: updatedItem.details || {} }
          : item
      )
    );
  };

  // CRUD : Supprimer un item par son ID
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(i => i.id !== id));
  };

  return (
    <CollectionContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {children}
    </CollectionContext.Provider>
  );
};