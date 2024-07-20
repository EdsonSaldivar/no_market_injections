const express = require('express');
const jwt = require('jsonwebtoken')
const path = require('path');
const { getDb } = require('../utils/db');
const { type } = require('os');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/log-in', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/login', async (req, res, next) => {
    const db = getDb();
    console.log('Credenciales recibidas:', req.body); // Verificar las credenciales recibidas

    try {
        const user = await db.collection('users').findOne({
            username: req.body.username,
            password: req.body.password
        });
        console.log('Usuario encontrado:', user); // Verificar el resultado de la consulta
        console.log('La constante user es un: ', typeof user);

        if (user) {
            const token = jwt.sign({ user }, 'my_secret_key');
            res.redirect(`/loged?token=${token}`);
        } else {
            res.send('<script>alert("Usuario incorrecto"); window.location.href = "/log-in";</script>');
        }
    } catch (e) {
        console.log('Error:', e);
        res.status(500).json({ message: 'Error logging in' });
    }
});

router.get('/loged', ensureToken ,(req, res) => {
    jwt.verify(req.token, 'my_secret_key', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.sendFile(path.join(__dirname, '../views/loged', 'start_loged.html'));
        }
    })
});

function ensureToken(req, res, next) {
    // Primero, buscar el token en la cabecera 'Authorization'
    const bearerHeader = req.headers['authorization'];

    // Si no se encuentra en la cabecera, buscar en la URL
    const queryToken = req.query.token;

    if (bearerHeader) {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else if (queryToken) {
        req.token = queryToken;
    } else {
        return res.sendStatus(403);
    }

    next();
}


module.exports = router;