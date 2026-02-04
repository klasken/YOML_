const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const db = require('./db');

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send("Le serveur fonctionne !");
});

app.get('/api/users', (req, res) => {
    const sql = "SELECT id, nom, email FROM utilisateurs";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur port 3000");
});
