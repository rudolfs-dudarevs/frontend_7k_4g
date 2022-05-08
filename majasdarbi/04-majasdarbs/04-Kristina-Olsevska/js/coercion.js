// //Explicit coercion
// const answerToLifeTheUniverseAndEverything = 42;
// console.log("Answer to everything:", answerToLifeTheUniverseAndEverything);

// const answerAsString = String(answerToLifeTheUniverseAndEverything);
// console.log("Answer as string:", answerAsString);
// console.log("Type of:", typeof answerAsString)

// const answerAsString = Number(answerAsString);
// console.log("Answer as number:", answerAsString);
// console.log("Type of:", typeof answerAsString)

// console.log(Boolean(-1))

// //Implicit coercion
// const notWhatYouExpect = 4 + 5 + 6 + "7";
// console.log(notWhatYouExpect);
// console.log(tupeof notWhatYouExpect)

const myData = {
    profession: "Fronend Developer",
    fullName: "Rudolfs Dudarevs",
    profileImg: "./profileImg.jpeg",
    contactInfo: {
        tel: "20034102",
        email: "rudolfs.dudarevs#gmail.com",
        website: "linkedinUrl"
    }
};

workExperience: [
    {
        companyName: "Catchbox",
        empluementPeriod: "2018-2020"
    },
    {
        companyName: "Neotech",
        empluementPeriod: "2018-2020"
    },
]

const person = {
    firstName: "Elon",
    lastName: "Musk",
    age: 50,
    companiesFounded: [
        "X.com", 
        "PayPal", 
        "SpaceX", 
        "The Must Fundation",
        "Tesla",
        "SolarCity",
        "Neuralink"
 ],
 rolesInCompanies: {
     twitter: {
          role: "Potential business owner",
          isFounder: false,
     },
     tesla: {
         role: "Business owner",
         isFounder: true,
     }
 }
};

// Objets:

console.log(person.firstName + " " + person.lastName)
console.log(`Age of ${person.firstName} ${person.lastName}`, person.age);

person.rolesInCompanies.twitter.role = "Business owner";

console.log("Role a Twitter?", person.rolesInCompanies.twitter.role)

// Array

let listOfFrontendTools = ["React", "Boosttrap", "Css", "HTML"];

listOfFrontendTools.push("Vue")
// listOfFrontendTools.unshift("Vue")
// listOfFrontendTools.pop("Vue")

// console.log(listOfFrontendTools);
// console.log(listOfFrontendTools.includes("React");
// console.log(listOfFrontendTools.length();


let isTrafficLightGreen = false;
let isTrafficLightYellow = false;
let isTrafficLightRed = false;

if (isTrafficLightGreen){
    console.log("cross the road");
} else if {isTrafficLightYellow) {
    console.log("Wait for next light");
} else if (isTrafficLightRed) {
    console.log("Wait for green light");
} else {
    console.log("traffic ligh must not be working.")
} 

// && = un operators

const myName = "Slim Shady";

if (myName === "What?") {
    console.log("What?")
}

switch(myName) {
    case "What?":
        console.log("What?")
        break;
    case "Who?":
        console.log("Who?")
        break
    case "Huh?":
        console.log("Huh?")
        break
    deafault:
        console.log("Chika-chika, slim shady!")
}

