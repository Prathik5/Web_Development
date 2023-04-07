// console.log("It works");

// const dayOfWeek = prompt('ENTER ANY DAY : ').toLowerCase();

// if(dayOfWeek === 'monday'){
//     console.log("Ugh!! I hate Mondays!!");
// }

// else if(dayOfWeek === 'saturday'){
//     console.log("YAYYY!!! I love Saturdays!!")
// }

// else if(dayOfWeek === 'friday'){
//     console.log("Fridays are great, very decent after work")
// }


// else if(dayOfWeek === 'sunday'){
//     console.log("Other than sunday night, it's the best!!")
// }

// else{
//     console.log("MEH")
// }


// 0-5 - FREE 
// 5 - 10 - CHILD $10
// 10 - 64 ADULT $20
// 65+ Senior $10

// const age = 89;

// if(age < 5){
//     console.log("You are an infant, You get in for free");
// }

// else if(age < 10){
//     console.log("You are a child, you gotta pay $10");
// }

// else if(age < 65){
//     console.log("You're an adult, you will be paying $20");
// }

// else{
//     console.log("Hey oldie, you have a senior card, so you shall be paying only $10");
// }


// let rand = Math.random();

// if (rand < 0.5){
//     console.log("Your number is Less than 0.5");
// }

// else{
//     console.log("Your number is greater than 0.5");
// }
// console.log(rand);

const password = prompt("Please enter a new password");

// Password must be 6 characters
if(password.length >= 6){
    // Password can't include a space
    if(password.indexOf(' ') === -1){
    console.log("Valid password");
    }
    else{
        console.log("No spaces allowed")
    }
}

else{
    console.log("Not strong enough");
}
