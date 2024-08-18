const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/shop', async (req, res, next) => {
    try {
        const db = getDb();
        const products = await db.collection('products').find().toArray();
        res.render('shop', { products });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving products");
    }
});

module.exports = router;