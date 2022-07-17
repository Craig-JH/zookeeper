const express = require("express");

//instantiate the server, then tell it to listen for requests
const app = express();

//To add the route, type the following code just before app.listen():  This is the step after line 17.
//the get() method requires two arguments. The first is a string that describes the route the client will
//have to fetch from. The second is a callback function that will execute every time that route is accessed with a GET request.
app.get("/api/animals", (req, res) => {
  res.json(animals);
});

//use one method to make our server listen. We're going to chain the listen() method onto our server to do it.
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

//creating a route that the front-end can request data from
const { animals } = require("./data/animals");