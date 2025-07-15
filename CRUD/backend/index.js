const express = require('express');
const app = express();
const data=require('./data/users.json');

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