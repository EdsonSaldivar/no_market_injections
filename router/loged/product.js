const express = require('express');
const path = require('path');
const { getDb } = require('../../utils/db');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log("Ruta añadir producto iniciando sesión")
    res.sendFile(path.join(__dirname, '../../views/loged', 'product.html'));
});

router.post('/product', async (req, res, next) => {
    const db = getDb();
    try {
        await db.collection('products').insertOne({ title: req.body.title });
        res.redirect('/Inicio');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error inserting product');
    }
});

module.exports = router;