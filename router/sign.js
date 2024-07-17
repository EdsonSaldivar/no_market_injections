const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/sign-in', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'sign.html'));
});

router.post('/register', async (req, res, next) => {
    const db = getDb();
    try {
        await db.collection('users').insertOne({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error registering user');
    }
});

module.exports = router;



// const express = require('express');
// const path = require('path');
// const router = express.Router();

// router.use('/sign-in',(req,res,next) =>{
//     console.log("Second Middleware")
//     res.sendFile(path.join(__dirname,'../views','sign.html'));
// })

// module.exports = router;





// const express = require('express');
// const path = require('path');
// const connectDB = require('../utils/db');
// const router = express.Router();

// router.get('/sign-in', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../views', 'sign.html'));
// });

// router.post('/register', async (req, res, next) => {
//   const { username, email, password } = req.body;

//   try {
//     const db = await connectDB();
//     const result = await db.collection('users').insertOne({ username, email, password });
//     console.log('User registered:', result);
//     res.redirect('/');
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Error registering user');
//   }
// });

// module.exports = router;
