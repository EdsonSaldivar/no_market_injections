const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/Inicio',(req,res,next) =>{
    console.log("Ruta raiz iniciando sesion")
    res.sendFile(path.join(__dirname,'../../views/loged','start_loged.html'));
})

module.exports = router;