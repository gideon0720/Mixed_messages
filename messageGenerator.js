// Array message that store a number of statement.
const messages = ["Today you will be blessed!",
        "You will meet some one that will make change in your way of life.",
        "A streesed-free day for you! ","Wishing you a safe and healthy December.",
        "Your past does not define your future.","It's time to grind and hone your skills",
        "Life is full of surprises, open yours!."]

// function that pull an element in messages array randomly
const giveMessage = () =>{
    let newMessage = messages[Math.floor(Math.random()*messages.length)];
    return newMessage;
}
// prints the returned string by the giveMessage()
console.log(giveMessage());
