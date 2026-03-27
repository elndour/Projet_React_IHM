import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CollectionContext } from '../components/CollectionProvider';
import { FaTrashAlt, FaArrowLeft, FaLeaf, FaInfoCircle } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, removeItem } = useContext(CollectionContext);

  const item = items.find(i => i.id === id);

  if (!item) return <div className="error-msg">Produit introuvable.</div>;

  return (
    <div className="details-page">
      <button onClick={() => navigate('/')} className="btn-back">
        <FaArrowLeft /> Retour au catalogue
      </button>

      <div className="details-card-main">
        <div className="details-image-wrapper">
          <img src={item.image} alt={item.name} />
          <span className="details-badge">{item.category}</span>
        </div>

        <div className="details-content">
          <h1>{item.name}</h1>
          <p className="details-price-tag">{item.price.toFixed(2)} €</p>
          
          <div className="details-section">
            <h3><FaInfoCircle /> Description</h3>
            <p>{item.description || "Aucune description fournie pour ce produit."}</p>
          </div>

          <div className="tech-sheet-box">
            <h3>Fiche technique</h3>
            <ul className="tech-list">
              <li>
                <span className="label">Nutriscore :</span> 
                <span className={`score score-${item.details?.nutriscore || 'none'}`}>
                   {item.details?.nutriscore || 'Non renseigné'}
                </span>
              </li>
              <li>
                <span className="label">Origine :</span> 
                <span>{item.details?.origine || 'France'}</span>
              </li>
              <li>
                <span className="label">Agriculture Bio :</span> 
                <span>
                  {item.details?.bio === 'Oui' ? 
                    <><FaLeaf style={{color: '#27ae60'}} /> Oui</> : 'Non'}
                </span>
              </li>
            </ul>
          </div>

          <button 
            onClick={() => { if(window.confirm("Supprimer ?")) { removeItem(item.id); navigate('/'); } }} 
            className="btn-delete-full"
          >
            <FaTrashAlt /> Supprimer du catalogue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;