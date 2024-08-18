const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('./utils/db');

const startRouter = require('./router/start');
const shopRouter = require('./router/shop');
const signRouter = require('./router/sign');
const loginRouter = require('./router/login');

const startlogedRouter = require('./router/loged/start');
const shoplogedRouter = require('./router/loged/shop');
const productRouter = require('./router/loged/product');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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