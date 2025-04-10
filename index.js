const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(express.json());

// Exemple de données simulées
let utilisateurs = [
  { id: 1, nom: 'Helena', email: 'helena@mail.com' },
  { id: 2, nom: 'Maxime', email: 'maxime@mail.com' }
];

// Route pour récupérer la liste des utilisateurs
app.get('/api/utilisateurs', (req, res) => {
  res.json(utilisateurs);
});

// Route pour ajouter un utilisateur
app.post('/api/utilisateurs', (req, res) => {
  const { nom, email } = req.body;
  
  // Validation de base
  if (!nom || !email) {
    return res.status(400).json({ message: 'Nom et email sont requis.' });
  }
  
  const nouveauUtilisateur = {
    id: utilisateurs.length + 1,
    nom,
    email
  };
  
  utilisateurs.push(nouveauUtilisateur);
  res.status(201).json(nouveauUtilisateur);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API lancée sur http://localhost:${port}`);
});
