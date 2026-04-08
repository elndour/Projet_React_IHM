import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectionContext } from '../components/CollectionContext';
import DataForm from '../components/DataForm';

const Modify = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, updateItem } = useContext(CollectionContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [createdName, setCreatedName] = useState('');

  const item = items.find(i => i.id === id);

  if (!item) return <div className="details-wrapper">Produit non trouvé</div>;

  const handleUpdateItem = (formData) => {
    const updatedItem = {
      ...formData,
      details: {
        nutriscore: formData.nutriscore,
        origine: formData.origine,
        bio: formData.bio,
      }
    };

    updateItem(id, updatedItem);
    setCreatedName(updatedItem.name);
    setSuccessMessage('Produit modifié avec succès.');
    // Scroll to top to show message immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="create-container">
      <h1 className="page-title">Modifier le produit</h1>
      {successMessage ? (
        <div className="success-banner">
          <p>{successMessage}</p>
          {createdName && <p className="success-note">Produit modifié : <strong>{createdName}</strong></p>}
          <button onClick={() => navigate(`/produit/${id}`)} className="btn-details" style={{ marginTop: '16px' }}>
            Voir les détails
          </button>
        </div>
      ) : (
        <DataForm onSubmit={handleUpdateItem} initialValues={item} />
      )}
    </div>
  );
};

export default Modify;