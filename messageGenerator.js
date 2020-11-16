// Object that has a collection of statemet stored
const objectStatement = {
    planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'],
    mood: ['Thankful', 'Sad', 'Peaceful', 'Hopeful'],
    message: ["Today you will be blessed!",
    "You will meet some one that will make change in your way of life.",
    "A streesed-free day for you! ","Wishing you a safe and healthy December.",
    "Your past does not define your future.","It's time to grind and hone your skills",
    "Life is full of surprises, open yours!."]
};

// Store the Statement in an array
let Stetements = [];
// rundom number generator based on the length of elements of arrays stored in objectStatement
const generateRandomNumber = num =>{
    return Math.floor(Math.random() * num);
};

let yourPlanet = '';


// Iterate over the object
for(let key in objectStatement) {
let optionIdx = generateRandomNumber(objectStatement[key].length);


// use the object's properties to customize the message being added to Stetements  
    switch(key) {
        case 'planets':
        Stetements.push(`Your sign right now is a "${objectStatement[key][optionIdx]}".`);
        yourPlanet = yourPlanet + objectStatement[key][optionIdx];
        break
        case 'mood':
        Stetements.push(`It is good ting to be "${objectStatement[key][optionIdx]}".`);
        break
        case 'message':
        Stetements.push(`${yourPlanet} says "${objectStatement[key][optionIdx]}".`);
        break
        default:
        Stetements.push('');
    }
}
  
function fullStatement(array) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = Stetements.join('\n\n');
    console.log(formatted);
}
  
fullStatement(Stetements);