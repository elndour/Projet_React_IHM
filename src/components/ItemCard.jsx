import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="card-image-container">
        <img src={item.image} alt={item.name} />
        <span className="card-badge">{item.category}</span>
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.description || "Aucune description disponible."}</p>
        <div className="card-footer">
          <span className="price-tag">{item.price.toFixed(2)} €</span>
          <Link to={`/produit/${item.id}`} className="btn-details">
            <FaEye /> Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;