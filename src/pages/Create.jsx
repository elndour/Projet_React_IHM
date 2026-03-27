import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionContext } from '../components/CollectionProvider';
import DataForm from '../components/DataForm';

const Create = () => {
  const { addItem } = useContext(CollectionContext);
  const navigate = useNavigate();

  const handleAddItem = (formData) => {
    // On génère un ID unique et on structure l'objet
    const finalItem = {
      ...formData,
      id: Date.now().toString(), 
      price: parseFloat(formData.price),
      // On s'assure que nutriscore, origine et bio sont bien transmis
      details: {
        nutriscore: formData.nutriscore,
        origine: formData.origine,
        bio: formData.bio
      }
    };

    addItem(finalItem);
    alert("Produit ajouté avec succès !");
    navigate('/'); 
  };

  return (
    <div className="create-container">
      <h1 className="page-title">Ajouter un produit</h1>
      <DataForm onSubmit={handleAddItem} />
    </div>
  );
};

export default Create;