let companyDescription = "SpaceX is an American aerospace company founded in 2002 by Elon Musks";
console.log ("Company description:")
console.log("Type of", typeof companyDescription); 
console.log("Charactr count, lenght:", companyDescription.lenght)

let newCompanyDescription = companyDescription.replace("Space X", "Space XY");
console.log("")

console.log("New company description:", newCompanyDescription);

let founderEmail = "Elon.Musk@SpaceX.com";
console.log("Founder email:", founderEmail);

let trimmedEmail = founderEmail.trim();
console.log("Trimmed email:", trimmedEmail);

let lowercaseEmail = trimmedEmail.toLowerCase();
console.log("Lowercase email:", lowercaseEmail);


let fullName;
let firstName = "Elon";
let lastName = "Musk";

// fullName = firstName + " " + lastName;
// console.log("Founder full name:", fullName);


fullName = firstName.concat(" ", lasName);
console.log("Founder full name:", fullName);

let companyPostalCode = "CA 90250";

let postalCodeState = companyPostalCode.slice(0, 2); 
console.log("State:", postalCodeState);
let companyName = "Space X"

let singleQuote = 'some text';
let doubleQuote = "some text";
let stringLiteral = `This value with a synamic value from variable ${companyName}`;
console.log(stringLiteral);

let coorectEscapesString = "Some text with \"quote\""