const axios = require("axios");

// End goal, display list of patients
// has to send a request to my server ("/patients") 
// and get response => console.log it.
const getPatients = async () => {
  // Making the request using axios.
  console.log("im making the request!")

  // with await we can "think" that the code stops 
  // and is waiting for the response
  const response = await axios.get("http://localhost:4001/patients")
  console.log("im done!")
  console.log("patients", response.data);
}

const getOnePatient = async () => {
}

// make a request to the server to:
// get all patients based on their exercise patterns
const getPatientsExercise = async (yesNo) => {
  try { 
    console.log("im trying to make the request")
    const response = await axios.get(`http://localhost:4001/patients/exercise/${yesNo}`);
    console.log("the request was successfull!")
    console.log(response.data);
  } catch (error) {
    console.log("the request was blew up :(")
    console.log(error.message);
  }
}

getPatientsExercise("yes");