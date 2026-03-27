import React, { useState } from 'react';
import { itemSchema } from '../data/schema';

const DataForm = ({ onSubmit }) => {
  const [formBuffer, setFormBuffer] = useState({});
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setPreview(base64Data);
          
          // ON FORCE LA MISE À JOUR ICI
          setFormBuffer(prev => ({ ...prev, [name]: base64Data }));
          // ON EFFACE L'ERREUR IMMÉDIATEMENT
          setErrors(prev => ({ ...prev, [name]: "" }));
          console.log("Image chargée avec succès dans le champ :", name);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormBuffer(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    // On boucle sur le schéma pour vérifier les champs obligatoires
    itemSchema.forEach(field => {
      if (field.required && !formBuffer[field.name]) {
        newErrors[field.name] = field.error || "Champ requis";
        isValid = false;
      }
    });

    console.log("Contenu actuel du formulaire avant envoi :", formBuffer);

    if (isValid) {
      onSubmit(formBuffer);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container" style={{maxWidth: '500px', margin: 'auto'}}>
      {itemSchema.map((field) => (
        <div key={field.name} className="form-group" style={{marginBottom: '20px', textAlign: 'center'}}>
          <label style={{display: 'block', fontWeight: 'bold', marginBottom: '10px'}}>
            {field.label} {field.required && "*"}
          </label>
          
          {field.type === 'file' ? (
            <div style={{border: '1px solid #ddd', padding: '10px', borderRadius: '8px'}}>
              <input 
                type="file" 
                name={field.name} // IMPORTANT: Doit correspondre à "image" dans schema.js
                accept="image/*" 
                onChange={handleChange} 
              />
              {preview && (
                <div style={{marginTop: '10px'}}>
                  <img src={preview} alt="Aperçu" style={{width: '120px', borderRadius: '5px'}} />
                </div>
              )}
            </div>
          ) : field.type === 'select' ? (
            <select name={field.name} value={formBuffer[field.name] || ''} onChange={handleChange} style={{width: '100%', padding: '8px'}}>
              <option value="">-- Sélectionner --</option>
              {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          ) : (
            <input 
              type={field.type} 
              name={field.name} 
              value={formBuffer[field.name] || ''} 
              onChange={handleChange} 
              style={{width: '100%', padding: '8px'}}
            />
          )}

          {errors[field.name] && (
            <div style={{color: 'red', fontSize: '0.8rem', marginTop: '5px'}}>{errors[field.name]}</div>
          )}
        </div>
      ))}
      
      <button type="submit" className="btn-submit" style={{width: '100%', padding: '12px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
        Enregistrer le produit
      </button>
    </form>
  );
};

export default DataForm;