const express = require("express");

// Create the server
const app = express();
const patients = require("./patients");
// define a port
const PORT = 4001;


// register some routes.
//          (the incoming request), (object to respond)
app.get("/hello", (req, res) => {
  console.log("I just got a request!", new Date(), req.method)
  res.send("I am alive!");
})

app.get("/patients", (req, res) => {
  console.log("I got a request for the patients");
  res.send(patients);
})

app.get("/patients/:id", (req, res) => {
  // Get the id from the params
  const patientId = parseInt(req.params.id);
  console.log(patientId);
  // find this specific patient in my array;
  const onePatient = patients.find(patient => patient.id === patientId)
  // send him back
  res.send(onePatient);
})


app.get("/copy/:text", (req, res) => {
  console.log("I'll send the same text I got");
  const text = req.params.text;
  console.log("the text I got is", text);
  res.send(text);
})


// Start the server
app.listen(PORT, () => console.log("server is running!"))