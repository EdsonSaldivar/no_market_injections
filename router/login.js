const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/log-in', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

router.post('/login', async (req, res, next) => {
    const db = getDb();
    try {
        const user = await db.collection('users').findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (user) {
            res.send('<script>alert("Usuario correcto"); window.location.href = "/";</script>');
        } else {
            res.send('<script>alert("Usuario incorrecto"); window.location.href = "/log-in";</script>');
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;



// const express = require('express');
// const path = require('path');
// const router = express.Router();

// router.use('/log-in',(req,res,next) =>{
//     console.log("Second Middleware")
//     res.sendFile(path.join(__dirname,'../views','login.html'));
// })

// module.exports = router;

// const express = require('express');
// const path = require('path');
// const connectDB = require('../utils/db');
// const router = express.Router();

// router.get('/log-in', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../views', 'login.html'));
// });

// router.post('/login', async (req, res, next) => {
//   const { username, password } = req.body;
//   console.log(username, password);
//   console.log(typeof username, typeof password);
//   try {
//     const db = await connectDB();
//     const user = await db.collection('users').findOne({ username, password });

//     if (user) {
//       res.send(`
//         <script>
//           alert('Usuario correcto');
//           window.location.href = '/';
//         </script>
//       `);
//     } else {
//       res.send(`
//         <script>
//           alert('Usuario incorrecto');
//           window.location.href = '/log-in';
//         </script>
//       `);
//     }
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Error al iniciar sesión');
//   }
// });

// module.exports = router;




// const express = require('express');
// const path = require('path');
// const connectDB = require('../utils/db');
// const router = express.Router();

// router.get('/log-in', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../views', 'login.html'));
// });

// router.post('/login', async (req, res, next) => {
//   const username = { value: req.body.username };
//   const password = { value: req.body.password };

//   console.log(username, password);
//   console.log(typeof username, typeof password);

//   try {
//     const db = await connectDB();
//     const user = await db.collection('users').findOne({ 
//       'username.value': username.value, 
//       'password.value': password.value 
//     });

//     if (user) {
//       res.send(`
//         <script>
//           alert('Usuario correcto');
//           window.location.href = '/';
//         </script>
//       `);
//     } else {
//       res.send(`
//         <script>
//           alert('Usuario incorrecto');
//           window.location.href = '/log-in';
//         </script>
//       `);
//     }
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Error al iniciar sesión');
//   }
// });

// module.exports = router;

