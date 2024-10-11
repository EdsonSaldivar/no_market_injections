db = db.getSiblingDB('test');  // Seleccionar la base de datos 'test'

// Insertar documentos en la colección 'users'
db.users.insertMany([
    {
        _id: ObjectId("66c14efb7d84cc04bb220ad4"),
        username: "Nolan",
        email: "Nolan@prueba.com",
        password: "1234"
    },
    {
        _id: ObjectId("66975972360c017701cc4293"),
        username: "4dm1n",
        email: "admin@aragon.unam.mx",
        password: "IamTheBestAdmin"
    }
]);

// Insertar documentos en la colección 'products'
db.products.insertMany([
    {
        _id: ObjectId("669711c356cbe16b65d45af7"),
        producto: "sandia",
        description: "Es una sandia grande",
        price: "$59.99"
    },
    {
        _id: ObjectId("669758fb360c017701cc4292"),
        producto: "PEPINO",
        description: "Pesa 200g",
        price: "$23.99"
    },
    {
        _id: ObjectId("669c1f5bad8047be3337ad15"),
        producto: "Melon",
        description: "Es blanco",
        price: "$34.99"
    }
]);
