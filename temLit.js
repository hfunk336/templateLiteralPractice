// Name:
// Date:
// Assignment: Template Literal Practice

////////////////////////Pt. 1////////////////////////
// create a var that accepts a first name as a prompt
let firstName = prompt(`First name?`);
firstName;


// create a var that accepts a last name as a prompt
let lastName = prompt(`Last name?`);
lastName;

// Create a variable that will hold a score and a var that will hold a full name 
let score = 0;
let fullName = firstName + lastName;

// create a var that adds the full name var and score in a message
let message = `${fullName} has a score of ${score}`;

////////////////////////Pt. 2////////////////////////
//comment out the lines above then create two var's that hold numbers
let num1 = 1;
let num2 = 2;

//create an add var that adds both vars
var add = num1 + num2;

//console log the newly created add var
console.log(add);

//console log 3 string's using concatination that say "concatinating is easy""when using template literals,""I can even embed numbers and not have to worry about spacing!"
console.log("concatinating is easy " + " when using template literals, " + "I can even embed numbers and not have to worry about spacing!");

//console log the three strings above and add a third string that includes the add var
console.log("concatinating is easy " + " when using template literals, " + "I can even embed numbers and not have to worry about spacing!");