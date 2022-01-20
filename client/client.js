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

const getOnePatient = async (id) => {
  // Make a request = GET => /patients/:id
  // console.log()
  const response = await axios.get(`http://localhost:4001/patients/${id}`);
  console.log("the patient!", response);
}

getOnePatient(2410);