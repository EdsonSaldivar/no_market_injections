const express = require('express');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('./utils/db');
//Rutas sin iniciar sesión:
const startRouter = require('./router/start');
const shopRouter = require('./router/shop');
const signRouter = require('./router/sign');
const loginRouter = require('./router/login');

//Rutas con sesión iniciada:
const startlogedRouter = require('./router/loged/start');
const shoplogedRouter = require('./router/loged/shop');
const productRouter = require('./router/loged/product');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(signRouter);
app.use(loginRouter);
app.use(shopRouter);

app.use(productRouter);
app.use(startlogedRouter);
app.use(shoplogedRouter);

app.use(startRouter);

connectToDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Failed to connect to database', err);
});
