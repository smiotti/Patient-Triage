// Using the `patientList` in the starter code, create all of the following funcionality based on the command 
// entered by the user:

// 1. If the user typed in 'add', prompt them for a patient name, add that patient to the list, and display the list. 

// 2. If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update 
// the name to the new name, and display the list. 

// 3. If the user typed in 'delete', prompt them for a patient name, delete that patient, and display the list.

// 4. If the user typed in 'reorder', prompt them for a patient name, prompt them for another patient name, 
// switch the two entered patients, and display the list.


let patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'

]

alert('Current patient List: ' + patientList);




let command = prompt('What would you like to to do with the patient list, Choose one:    update, delete, add, reorder');

// while the 'cancel' button is not selected...
// start:
// while (command != cancel) {




// If the user types 'update', prompting user for the name of the patient to replace with someone else, and then 
// displaying the updated patient list. 
if (command == 'update') {
  let patientName = prompt('Please select which patient you would like to Replace (case sensitive!):');
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
      let newPatient = prompt('Please enter the name of a new patient:');
      patientList[i] = newPatient;
      alert('Here is the update patient list:' + patientList);
    }
    // else {
    //   alert("Existing patient's name is not in this list!");
    //   break;
    // }
  }


  // If the user types 'delete', prompting user for a patient name to delete from the list, and displaying the list.
} else if (command == 'delete') {
  let patientName = prompt('Please select which patient you would like to Delete (case sensitive!):');
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
      patientList = patientList.splice(0, i);
      alert('Here is the update patient list:' + patientList);
    }
    // else{
    //   alert("Patient's name is not in this list!");
    //   break;
    // }
  }


  // If the user types 'add', prompting user for a patient name to add to the list, and displaying the list.
} else if (command == 'add') {
  let patientName = prompt('Please type the name of the patient you would like to Add (case sensitive!):');
  for (let i = 0; i < patientList.length; i++)
    if (patientList[i] === patientName) {
      alert('That patient already exists in the list:' + patientName);
    }
    else {
      patientList.push(patientName);
      alert('Here is the update patient list:' + patientList);
      break;
    }



  // If the user typed in 'reorder', prompting user for the 2 patient names they want to swith the order for, and then display the list.
} else if (command == 'reorder') {
  const patientName1 = prompt('Please select a patient you would like to swap the order for (case sensitive!):');
  const patientName2 = prompt("Please select the second patient's name (case sensitive!):");
  let varIndex1 = 0;
  let varIndex2 = 0;
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName1) {
      let varIndex1 = i;
    }
    else if (patientList[i] === patientName2) {
      let varIndex2 = i;
    }

    const temp = patientList[varIndex2]

    patientList[varIndex2] = patientList[varIndex1];
    patientList[varIndex1] = temp;
  }
  alert('Here is the update patient list:' + patientList);


} else {
  alert('You have selected an invalid response');
  let command = prompt('Choose one: update, delete, add, reorder');

}


alert('Thank you for using the patient triage app.');






//  if (user === 'admin' && password === '1234') {
//       alert('Welcome to the admin page');
//     } else if (user === 'average joe' && password === 'js rocks') {
//       alert('Welcome to the user landing page');
//     } else {
//       alert('Invalid username and password. Refresh the page to retry');
//     }



