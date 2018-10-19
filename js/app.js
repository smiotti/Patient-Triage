// This patient triage app allows usres to add, delete, update or reorder a patient list. 


// Defining the patient list array
let patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam',
  'Carl'
]

// Setting a global variable for user input error handling
let onPatientList = false;


// Proving user with the current patient list and then promting them for action.
alert('Current patient List: ' + patientList);
let command = prompt('What would you like to to do with the patient list, Choose one:    update, delete, add, reorder');


// If the user types 'update', prompting user for the name of the patient to replace with someone else, and then 
// displaying the updated patient list. 
if (command == 'update') {
  let patientName = prompt('Please select which patient you would like to Replace (case sensitive!):');
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
      let newPatient = prompt('Please enter the name of a new patient:');
      patientList[i] = newPatient;
      alert('Here is the update patient list: ' + patientList);
      onPatientList = true;
    }
  }
  // If selected patient name not in the list, alert user.
  if (onPatientList == false) {
    alert(patientName + " is not in the patient list!");
  }


  // If the user types 'delete', prompting user for a patient name to delete from the list, and displaying the list.
} else if (command == 'delete') {
  let patientName = prompt('Please select which patient you would like to Delete (case sensitive!):');
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
      patientList.splice(i, 1);
      alert('Here is the update patient list: ' + patientList);
      onPatientList = true;
    }
  }
  // If selected patient name not in the list, alert user.
  if (onPatientList == false) {
    alert(patientName + " is not in the patent list!");
  }


  // If the user types 'add', prompting user for a patient name to add to the list, and displaying the list.
} else if (command == 'add') {
  let patientName = prompt('Please type the name of the patient you would like to Add (case sensitive!):');
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
      onPatientList = true;
      // If new patient name is the same as a petient already on the list, alerting user, and not adding a duplicate value.
      alert(patientName + ' already exists in the list!');
    }
  }
  if (onPatientList == false) {
    patientList.push(patientName);
    alert('Here is the update patient list: ' + patientList);
  }


  // If the user typed in 'reorder', prompting user for the 2 patient names they want to swith the order for, and then display the list.
} else if (command == 'reorder') {
  const patientName1 = prompt('Please select a patient you would like to swap the oder for (case sensitive!):');
  const patientName2 = prompt("Please select the second patient's name (case sensitive!):");
  let varIndex1 = 0;
  let varIndex2 = 0;
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName1) {
      varIndex1 = i;
    }
    else if (patientList[i] === patientName2) {
      varIndex2 = i;
    }
  }
  const temp = patientList[varIndex2]

  // Swapping patient 2 into position 1, and patient 1 into position 2, then displaying update patient list
  patientList[varIndex2] = patientList[varIndex1];
  patientList[varIndex1] = temp;
  alert('Here is the update patient list:' + patientList);


  // If user tries to select a invalide menu option.
} else {
  alert('You have selected an invalid menu response.  Restart program and choose wisely!');
}

// before dropping out of program, display Thank You message
alert('Thank you for using the patient triage app.');


