const express = require('express');
const path = require('path');
const { getDb } = require('../../utils/db');
const router = express.Router();

router.use('/Inventory',async (req,res,next) =>{
    try {
        const db = getDb();
        const products = await db.collection('products').find().toArray();
        res.render('inventory', { products });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving products");
    }
    // console.log("Ruta Inventory iniciando sesion")
    // res.sendFile(path.join(__dirname,'../../views/loged','shop_loged.html'));
})

module.exports = router;