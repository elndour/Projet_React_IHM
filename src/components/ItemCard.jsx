import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaTag } from 'react-icons/fa';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="card-image">
        <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=Pas d\'image'} />
        <div className="card-category">{item.category}</div>
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-footer">
          <span className="card-price"><FaTag /> {item.price.toFixed(2)} €</span>
          <Link to={`/produit/${item.id}`} className="btn-details">
            <FaEye /> Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;