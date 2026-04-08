import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionContext } from '../components/CollectionContext';
import DataForm from '../components/DataForm';

const Create = () => {
  const { addItem } = useContext(CollectionContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [createdName, setCreatedName] = useState('');

  const handleAddItem = (formData) => {
    const finalItem = {
      ...formData,
      id: Date.now().toString(),
      price: parseFloat(formData.price),
      details: {
        nutriscore: formData.nutriscore,
        origine: formData.origine,
        bio: formData.bio,
      }
    };

    addItem(finalItem);
    localStorage.removeItem('ihm_collection_form_draft');
    setCreatedName(finalItem.name);
    setSuccessMessage('Produit ajouté avec succès. Il est désormais visible dans le catalogue.');
  };

  return (
    <div className="create-container">
      <h1 className="page-title">Ajouter un produit</h1>
      {successMessage ? (
        <div className="success-banner">
          <p>{successMessage}</p>
          {createdName && <p className="success-note">Produit créé : <strong>{createdName}</strong></p>}
          <Link to="/" className="btn-details" style={{ marginTop: '16px' }}>
            Voir le catalogue
          </Link>
        </div>
      ) : (
        <DataForm onSubmit={handleAddItem} />
      )}
    </div>
  );
};

export default Create;