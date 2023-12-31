// Part 1:
// Create a data structure that describes a "hospital". It has a name and contains 3 "patient" records. 
//Each "patient" has an id, fullName, dateOfBirth, and multiple "symptoms". Each symptom in a String. 

//creat a data structure for "Hospital" and defined it as Hospital.

const Hospital = {
	hospitalName: "Oakville Hospital",
	patients: [
	  {
		id: "P001",
		fullName: "Emily Johnson",
		dateOfBirth: "1971-06-28",
		symptoms: [
		  {description: "Fever"},
		  {description: "Cough"},
		  {description: "Shortness of Breath"}
		]
	  },
	  {
		id: "P002",
		fullName: "Brian Scott",
		dateOfBirth: "1964-01-22",
		symptoms: [
		  {description: "Headache"},
		  {description: "Sneeze"},
		  {description: "Dizziness"}
		]
	  },
	  {
		id: "P003",
		fullName: "Kevin Lewis",
		dateOfBirth: "1955-10-28",
		symptoms: [
		  {description: "Chest Pain"},
		  {description: "Cough"},
		  {description: "Heartbeat"}
		]
	  }
	]
  }


// Part 2:
// Create a function named "showPatients" that receives a hospital data structure and returns the following as a string:

// <h1>Hospital Name</h1>
// <h2>Patient full name, date of birth </h2>
// <ul>
//   <li>symptom</li>
//   <li>symptom</li>
//   <li>symptom</li>
// </ul>
// Repeat the h2, ul, and li for each patient.

// Execute that function with the data structure created in Part 1 then console.log the return value to the document.

// Creata a function receives a hospital data and returns:
function showPatients(){
	let showHtml = "<h1>" + Hospital.hospitalName + "</h1>";

	for (let i = 0; i < Hospital.patients.length; i++) {
		let Patients = Hospital.patients[i];
		showHtml += '<h2>' + Patients.fullName + ', ' + Patients.dateOfBirth + '</h2>';
		showHtml += '<ul>';
	
		for (let j = 0; j < Patients.symptoms.length; j++) {
			let symptom = Patients.symptoms[j];
			showHtml += '<li>' + symptom.description + '</li>';
		}
	
		showHtml += '</ul>';
	}

	return showHtml;
}

console.log(showPatients());


//Part 3:
//Create another function named "getPatient" that accepts an array of patient records and returns a random patient id.
//Execute that function then console.log() the return value.

// Creata a function for Get a random patient's id
function getPatient(ArrayofPatient) {
	let randomGetId = Math.floor(Math.random() * ArrayofPatient.length);
	return ArrayofPatient[randomGetId].id;
  }
  
  // Run this function
  let randomPatientId = getPatient(Hospital.patients);
  
  // Show the random patient id to the console
  console.log("Get a Random Patient ID:", randomPatientId);
