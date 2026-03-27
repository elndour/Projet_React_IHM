// src/data/schema.js
export const itemSchema = [
  {
    name: "name",
    label: "Nom du produit",
    type: "text",
    required: true,
    placeholder: "ex: Huile d'Olive Vierge",
    error: "Le nom est obligatoire."
  },
  {
    name: "category",
    label: "Catégorie",
    type: "select",
    required: true,
    options: ["Épicerie fine", "Crèmerie", "Boissons", "Frais", "Légumes"],
    error: "Veuillez choisir une catégorie."
  },
  {
    name: "image",
    label: "Photo du produit",
    type: "file", // Type 'file' pour le bouton "Parcourir"
    required: true,
    error: "La photo est obligatoire."
  },
  {
    name: "price",
    label: "Prix (€)",
    type: "number",
    required: true,
    placeholder: "ex: 14.50",
    error: "Le prix est obligatoire."
  },
  // --- NOUVEAUX CHAMPS POUR LA FICHE TECHNIQUE ---
  {
    name: "nutriscore",
    label: "Nutriscore",
    type: "select",
    options: ["A", "B", "C", "D", "E"],
    required: true,
    error: "Le Nutriscore est obligatoire."
  },
  {
    name: "origine",
    label: "Origine",
    type: "text",
    placeholder: "ex: France",
    required: true,
    error: "L'origine est obligatoire."
  },
  {
    name: "bio",
    label: "Produit Issu de l'Agriculture Bio ?",
    type: "select",
    options: ["Oui", "Non"],
    required: true,
    error: "Veuillez préciser si le produit est Bio."
  },
  // -----------------------------------------------
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: false,
    placeholder: "Détails complémentaires..."
  }
];