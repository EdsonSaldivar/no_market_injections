const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'product.html'));
});

router.post('/product', async (req, res, next) => {
    const db = getDb();
    try {
        await db.collection('products').insertOne({ title: req.body.title });
        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error inserting product');
    }
});

module.exports = router;



// const express = require('express');
// const path = require('path');
// const router = express.Router();

// router.use('/add-product',(req,res,next) =>{
//     console.log("First Middleware")
//     res.sendFile(path.join(__dirname,'../views','product.html'));
// })

// router.use('/product',(req,res,next) =>{
//     console.log(req.body);
//     res.redirect('/');
// })

// module.exports = router;




// const express = require('express');
// const path = require('path');
// const connectDB = require('../utils/db');
// const router = express.Router();

// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../views', 'product.html'));
// });

// router.post('/product', async (req, res, next) => {
//   const { title } = req.body;

//   try {
//     const db = await connectDB();
//     const result = await db.collection('products').insertOne({ title });
//     console.log('Product inserted:', result);
//     res.redirect('/');
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Error inserting product');
//   }
// });

// module.exports = router;
