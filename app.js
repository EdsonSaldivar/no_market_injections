const express = require('express');
const { connectToDatabase } = require('./utils/db');
const productRouter = require('./router/product');
const shopRouter = require('./router/shop');
const signRouter = require('./router/sign');
const loginRouter = require('./router/login');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(signRouter);
app.use(loginRouter);
app.use(productRouter);
app.use(shopRouter);

connectToDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Failed to connect to database', err);
});



// const express = require('express');
// require('./utils/db');
// const productRouter = require('./router/product');
// const shopRouter = require('./router/shop');
// const signRouter = require('./router/sign');
// const loginRouter = require('./router/login');
// const app = express();

// app.use(express.urlencoded({extended:true}))
// app.use(express.json()); // Para procesar datos JSON

// app.use(loginRouter)
// app.use(signRouter)
// app.use(productRouter)
// app.use(shopRouter)

// app.listen(3000);