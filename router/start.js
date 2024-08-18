const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/',(req,res,next) =>{
    // console.log("Ruta raiz sin iniciar sesión")
    res.sendFile(path.join(__dirname,'../views','start.html'));
})

module.exports = router;