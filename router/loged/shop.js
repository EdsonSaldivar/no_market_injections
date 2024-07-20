const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/Inventory',(req,res,next) =>{
    console.log("Ruta Inventory iniciando sesion")
    res.sendFile(path.join(__dirname,'../../views/loged','shop_loged.html'));
})

module.exports = router;