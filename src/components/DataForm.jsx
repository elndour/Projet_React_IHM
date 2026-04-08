import React, { useEffect, useState } from 'react';
import { itemSchema } from '../data/schema';

const STORAGE_KEY = 'ihm_collection_form_draft';

const getSavedForm = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const DataForm = ({ onSubmit, initialValues = {} }) => {
  const savedDraft = getSavedForm();
  const [formBuffer, setFormBuffer] = useState({ ...savedDraft, ...initialValues });
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(initialValues.image || savedDraft.image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formBuffer));
  }, [formBuffer]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setPreview(base64Data);
          setFormBuffer(prev => ({ ...prev, [name]: base64Data }));
          setErrors(prev => ({ ...prev, [name]: '' }));
        };
        reader.readAsDataURL(file);
      }
      return;
    }

    setFormBuffer(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
      setIsSubmitting(true);
      onSubmit(formBuffer);
      localStorage.removeItem(STORAGE_KEY);
      setFormBuffer({});
      setPreview(null);
      setErrors({});
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {itemSchema.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name} className="form-label">
            {field.label} {field.required && <span className="required-star">*</span>}
          </label>

          {field.type === 'file' ? (
            <div className="file-input-wrapper">
              <input
                id={field.name}
                type="file"
                name={field.name}
                accept="image/*"
                onChange={handleChange}
                className="form-input file-input"
              />
              {preview && (
                <div className="preview-container">
                  <img src={preview} alt="Aperçu produit" className="preview-image" />
                </div>
              )}
            </div>
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formBuffer[field.name] || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">-- Sélectionner --</option>
              {field.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formBuffer[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
              className="form-textarea"
              rows={5}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formBuffer[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
              className="form-input"
            />
          )}

          {errors[field.name] && (
            <div className="error-message">{errors[field.name]}</div>
          )}
        </div>
      ))}

      <button type="submit" className="btn-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enregistrement...' : 'Enregistrer le produit'}
      </button>
    </form>
  );
};

export default DataForm;