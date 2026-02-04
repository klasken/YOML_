const express = require('express');
const router = express.Router();


// Route pour envoyer un message : POST http://localhost:3000/api/messages
router.post('/', (req, res) => {
    const { content, userId } = req.body;

    // Logique temporaire pour tester
    console.log(`Message de l'utilisateur ${userId} : ${content}`);

    // Ici fait: db.query("INSERT INTO messages...")
    
    res.status(201).json({
        message: "Message envoyé avec succès !",
        data: { content, userId }
    });
});

// Route pour récupérer tous les messages : GET http://localhost:3000/api/messages
router.get('/', (req, res) => {
    res.json({ msg: "Ici s'afficheront les messages" });
});

module.exports = router;