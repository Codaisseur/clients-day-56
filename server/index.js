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

// an endpoint that returns just one patient
app.get("/patients/:patientId", (req, res) => {
  // get patientId params
  const patientId = req.params.patientId
  // find the specific patient
  const onePatient = patients.find(patient => patient.id === parseInt(patientId))

  // return it.
  if (onePatient) {
    res.send(onePatient)
  } else {
    res.status(404).send("didn't find that guy")
  }
})


// endpoint that returns only patients that exercise daily
app.get("/patients/exercise/:daily", (req, res) => {
  // get the value of do => "yes" | "no"
  const daily = req.params.daily; // "yes" | "no"
  console.log(`getting all patients that exercise ${daily}`)

  if (daily !== "yes" && daily !== "no") {
    res.send("you must say yes or no")
  } else {
    // filter out the ones the opposite ones
    const somePatients = patients.filter(patient => patient.dailyExercise === daily)
    // return
    res.send(somePatients);
  }
})


app.get("/copy/:text", (req, res) => {
  console.log("I'll send the same text I got");
  const text = req.params.text;
  console.log("the text I got is", text);
  res.send(text);
})




// Start the server
app.listen(PORT, () => console.log("server is running!"))