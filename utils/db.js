const { MongoClient, ServerApiVersion } = require('mongodb');
// MongoDB in Docker-Compose.yml
const uri = "mongodb://mongo:27017/test";

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

        // Replace this line with your database name
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

