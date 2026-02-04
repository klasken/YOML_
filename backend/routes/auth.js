// routes/auth.js
const express = require('express');
const router = express.Router(); // "mini-serveur" (Router)
const db = require('../db'); // On récupère la connexion qu'on a créée
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ROUTE REGISTER
router.post('/register', async (req, res) => {
    const { nom, email, password } = req.body;
    
    // Hachage du mot de passe
    const hash = await bcrypt.hash(password, 10);

    // Insertion en base
    const sql = "INSERT INTO utilisateurs (nom, email, password) VALUES (?, ?, ?)";
    db.query(sql, [nom, email, hash], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "Utilisateur créé !" });
    });
});

// ROUTE LOGIN 
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM utilisateurs WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length === 0) {
            return res.status(401).json({ message: "Email incorrect" });
        }

        const utilisateur = results[0];

        // Comparaison du mot de passe
        const validPassword = await bcrypt.compare(password, utilisateur.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // Création du Token
        const token = jwt.sign(
            { id: utilisateur.id, role: utilisateur.role },
            process.env.JWT_SECRET || 'secret_temporaire', 
            { expiresIn: '2h' }
        );

        res.status(200).json({ token: token, message: "Connecté !" });
    });
});

module.exports = router;