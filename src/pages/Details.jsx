import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectionContext } from '../components/CollectionContext';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, removeItem } = useContext(CollectionContext);

  const item = items.find(i => i.id === id);

  if (!item) return <div className="details-wrapper">Produit non trouvé</div>;

  const nutriColor = {
    A: '#16a34a',
    B: '#0ea5e9',
    C: '#f59e0b',
    D: '#f97316',
    E: '#dc2626'
  };

  return (
    <div className="details-wrapper">
      <button onClick={() => navigate('/')} className="btn-back-main">
        <FaArrowLeft /> Retour au catalogue
      </button>

      <div className="details-main-card">
        <div className="details-visual">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="details-content">
          <div>
            <span className="product-category-tag">{item.category}</span>
            <h1 className="product-title-detailed">{item.name}</h1>
            <p className="product-price-detailed">{item.price.toFixed(2)} €</p>
          </div>

          <div className="info-block">
            <h3>Description</h3>
            <p>{item.description || 'Pas de description.'}</p>
          </div>

          <div className="tech-sheet-block">
            <h3>Fiche technique</h3>
            <ul className="tech-sheet-list">
              <li>
                <strong>Nutriscore</strong>
                <span className="detail-badge" style={{ background: nutriColor[item.details?.nutriscore] ? `${nutriColor[item.details?.nutriscore]}20` : '#e2e8f0', color: nutriColor[item.details?.nutriscore] || '#334155' }}>
                  {item.details?.nutriscore || 'N/A'}
                </span>
              </li>
              <li>
                <strong>Origine</strong>
                <span>{item.details?.origine || 'Non précisée'}</span>
              </li>
              <li>
                <strong>Bio</strong>
                <span>{item.details?.bio || 'Non'}</span>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="btn-submit"
              onClick={() => navigate(`/modifier/${item.id}`)}
              style={{ flex: 1, minWidth: '150px' }}
            >
              Modifier le produit
            </button>
            <button
              className="btn-danger-outline"
              onClick={() => { if (window.confirm('Supprimer ce produit ?')) { removeItem(item.id); navigate('/'); } }}
            >
              <FaTrashAlt /> Supprimer le produit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;