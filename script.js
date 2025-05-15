console.log("Hi");

const multiLineSentence = "This a \nsentence\nwow another line"
console.log(multiLineSentence);


//   TWO DIFFERENT WAYS OF DOING THE SAME THING
const insertedVariable = " INSERTED VARIABLE";
const variableSentence = `This is an${insertedVariable}`;  // UISNG THE `${}` MEANS YOU DONT HAVE TO WORRY ABOUT FORMATTING AND SPACING

console.log("This is an" + insertedVariable)
console.log(variableSentence)


// PROPERTIES FOR STRINGS AND ARRAYS
console.log(variableSentence.length)

// METHODS
let userInput = "HeLlo ToM"
// let lowerCase = userInput.toLowerCase();
let upperCase = userInput.toUpperCase();
console.log(upperCase);


//jhkuj
let fullSentence = "I'm quite tired today as I couldn't sleep last night.";

let lengthSentence= fullSentence.length - 1;
console.log(lengthSentence);
console.log(fullSentence[40].toUpperCase());

// If I were to add words the number above would be wrong so we can add code to negate having to change it.


//CHECKING FOR PRESENCE ie the word night

fullSentence = fullSentence.toLowerCase(); //This makes it so that even a capital comes through
let includesNight = fullSentence.includes("night");
console.log(includesNight);


// let removeNight = fullSentence.slice(46);
// console.log(removeNight)

// Replacing something
let replaceNight = fullSentence.replace("night", "day")
console.log(replaceNight)

