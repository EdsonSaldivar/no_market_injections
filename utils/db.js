const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://edsonmujica81:ygpgmf84im9n8Rjr@cluster0.xw1ph7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function connectToDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get the database
        db = client.db('test');
    } catch (e) {
        console.log(e);
    }
}

function getDb() {
    if (!db) {
        throw new Error("Database not connected!");
    }
    return db;
}

module.exports = { connectToDatabase, getDb };



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://edsonmujica81:ygpgmf84im9n8Rjr@cluster0.xw1ph7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     //console.log(client); IMPRIMIENDO RESULTADO DEL CLIENTE PARA CONFIRMAR LA CONEXION CON MONGODB

//     const db = client.db('test');
//     //ARREGLO PARA INSERTAR SOLO 1 DOCUMENTO EN LA COLECCION
//     // const result = await db.collection('users').insertOne({
//     //     name:'Edson',
//     //     age:21
//     // })
//     // console.log(`New document inserted with ID: ${result.insertedId}`);
    
//     //ARREGLO PARA INSERTAR VARIOS DOCUMENTOS EN LA COLECCION
//     // const result = await db.collection('users').insertMany([
//     //     {
//     //         name:'John',
//     //         age:39
//     //     },
//     //     {
//     //         name:'Ayari',
//     //         age:40
//     //     }
//     // ])
//     // console.log(`New document inserted with ID: ${result.insertedId}`);

//     //ARREGLO PARA ENCONTRAR UN DOCUMENTO EN LA COLECCION
//     // const result = await db.collection('users').findOne({age:28})
//     // console.log('Search result:', result);

//     //ARREGLO PARA ENCONTRAR TODOS LOS DOCUMENTOS EN LA COLECCION
//     // const result = await db.collection('users').find({name:'Edson'}).toArray()
//     // console.log('Search result:', result);

//     //ARREGLO PARA ACTUALIZAR UN DOCUMENTO EN UNA COLECCION
//     // const result = await db.collection('users').updateOne({name:'Diego'},
//     //     {
//     //         $set:{
//     //             name:'Jesus'
//     //         }
//     //     }
//     // )
//     // console.log('Search result:', result);

//     //ARREGLO PARA ACTUALIZAR (SUMANDO 1 A LA EDAD) MUCHOS DOCUMENTOS
//     // const result = await db.collection('users').updateMany({},
//     //     {
//     //         $inc:{
//     //             age:1
//     //         }
//     //     }
//     // )
//     // console.log('Search result:', result);

//     //ARREGLO PARA ELIMINAR UN DOCUMENTO
//     // const result = await db.collection('users').deleteOne({name:'Ayari'})
//     // console.log('Search result:', result);
    
//     //ARREGLO PARA ELIMINAR TODOS LOS DOCUMENTOS O MUCHOS
//     // const result = await db.collection('users').deleteMany({})
//     // console.log('Search result:', result);

//   } catch(e){
//     console.log(e);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://edsonmujica81:ygpgmf84im9n8Rjr@cluster0.xw1ph7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// let db;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectDB() {
//   try {
//     if (!db) {
//       await client.connect();
//       db = client.db('test');
//       console.log("Connected to MongoDB!");
//     }
//     return db;
//   } catch (e) {
//     console.error(e);
//   }
// }

// module.exports = connectDB;

