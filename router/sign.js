const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/sign-in', (req, res, next) => {
    console.log("Ruta de registrar un usuario sin iniciar sesión");
    res.sendFile(path.join(__dirname, '../views', 'sign.html'));
});

router.post('/register', async (req, res, next) => {
    const db = getDb();
    const { username, email, password } = req.body;

    try {
        // Verificar si el nombre de usuario ya existe
        const existingUser = await db.collection('users').findOne({ username: username });

        if (existingUser) {
            // Si el usuario existe, enviar un mensaje de error o redirigir con un mensaje
            //return res.status(400).send('El nombre de usuario ya está en uso.');
            return res.sendFile(path.join(__dirname,'../error','usuario_existente.html'));
        }

        // Si el usuario no existe, insertar el nuevo usuario
        await db.collection('users').insertOne({
            username: username,
            email: email,
            password: password
        });

        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error registrando al usuario');
    }
});

module.exports = router;
