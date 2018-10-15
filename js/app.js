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
start:
while (command != cancel) {




  // If the user types 'update', prompting user for the name of the patient to replace with someone else, and then 
  // displaying the updated patient list. 

  Loop1:
  if (command == 'update') {
    let patientName = prompt('Please select which patient you would like to replace (case sensitive!):'); 
      for ( let i = 0; i < patientList.length; i++ ) {
      if (patientList[i] === patientName) {
        let newPatient = prompt('Please enter the name of a new patient:');
          patientList[i] = newPatient;
          alert ('Here is the update patient list:' + patientList);
        }  
      else {
        alert("Existing patient's name is not in this list!");
        break Loop1;
      }
    }
      

  } else if (command == 'delete')  {
    console.log('You selected delete');
    alert('You selected delete');
    //  let pationList = prompt('What is the name of the patient you want to delete?')
    //  for()


  }  else if (command == 'add')  {
    let patientName = prompt('Please select which patient you would like to replace (case sensitive!):'); 
    for ( let i = 0; i < patientList.length; i++ ) {
    if (patientList[i] === patientName) {
      let newPatient = prompt('Please enter the name of a new patient:');
        patientList[i] = newPatient;
        alert ('Here is the update patient list:' + patientList);
      }  
    }




    console.log('You selected add');
    alert('You selected add');


  }  else if (command == 'reorder')  {
    console.log('You selected reorder');
    alert('You selected reorder');


  }  else {
      alert('You have selected an invalid response');
      let command = prompt('Choose one: update, delete, add, reorder');

  }

}
alert('Thank you for using the patient triage app.');






//  if (user === 'admin' && password === '1234') {
//       alert('Welcome to the admin page');
//     } else if (user === 'average joe' && password === 'js rocks') {
//       alert('Welcome to the user landing page');
//     } else {
//       alert('Invalid username and password. Refresh the page to retry');
//     }


    
