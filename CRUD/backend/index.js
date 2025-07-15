const express = require('express');
const app = express();
const data=require('./data/users.json');

const { MongoClient, ServerApiVersion, ObjectId  } = require('mongodb');
const uri = "mongodb+srv://applicationUser:KidsInTech16-07-25@cluster0.tp0a6zj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const databaseName = "kit";
const collectionName = "users";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function findUserById(id) {
  try {
    await client.connect();
    const database = client.db(databaseName); // Replace with your database name
    const users = database.collection(collectionName);

    // Convert string id to ObjectId
    const objectId = new ObjectId(id);

    // Query the user by _id
    const user = await users.findOne({ _id: objectId });

    console.log(user);
    return user;
  } catch (error) {
    console.error('Error finding user:', error);
  } finally {
    await client.close();
  }
}

findUserById("68768142bb3eafea61a3fff5").catch(console.dir);

app.use(express.json());

app.get('/', (request, response) => {
  response.redirect('/users');
});

// HTTP POST --> CREATE
app.post('/user', (request, response) => {
  console.log("POST - "+request.body);
  const body = request.body;

  return response.json(body);
});

// HTTP GET (Single user) --> RETRIEVE
app.get('/user/:id', (request, response) => {
  const userId = request.params.id;
  console.log("GET - user with id "+userId);  

  return response.json('{value:"OK"}');
});

// HTTP GET --> RETRIEVE
app.get('/users', (request, response) => {
  console.log("GET - all users");

  return response.json(data.users);
});

//HTTP DELETE --> DELETE
app.delete('/users/:id', (request, response) => {
  console.log("DELETE - user with id "+request.params.id);  

  return response.json('{value:"OK"}');
});

//HTTP PATCH --> UPDATE
app.patch('/users/:id', (request, response) => {
  console.log("PATCH - user with id "+request.params.id);  

  return response.json('{value:"OK"}');
});
app.listen(5000);