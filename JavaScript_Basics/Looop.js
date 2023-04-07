// for(let i = 1; i <= 10; i++){
//     console.log("yo sup!")
//     console.log(i)
// }
// Loop is a very important concept, don't forget!!



// To print even numbers

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }


// for (let i = 1; i <= 5; i += 1) {
//     console.log(`i is:  ${i}`);
//     for (let j = 1; j <= 4; j += 1){
//         console.log(`   j is:  ${j}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Jeffery', 'Shahrukh', 'Vinay', 'Kevin'],
//     ['Scooby', 'Vishnu', 'Frank', 'Abdullah']
// ]

// for (let i = 0; i < seatingChart.length; i += 1) {
//     const row = (seatingChart[i]);
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j += 1){
//         console.log(row[j]);
//     }
// }


// let count = 0;

// while (count < 10) {
//     count++;
//     console.log("hello");
// }

// const SECRET = 'BabyHippo';

// let guess = prompt("Enter the secret code: ");
// while (guess !== SECRET) {
//     guess = prompt("That's wrong, Guess agian");
// }

// console.log('Yay You got the code right');

// let input = prompt("Hey say something");

// while(true) {
//     input = prompt(input);
//     if(input.toLocaleLowerCase === 'stop copying me') break;
// }

// console.log("So, You broke the loop, you smartass");


// -----------------------------------GUESSING GAME USING FOR AND WHILE LOOP-------------------------------------------------------------
// let maximum = parseInt(prompt("Enter the maximum number: "));
// while(!maximum){
//     maximum = parseInt(prompt('Please enter a valid number'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess =parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while(parseInt(guess) != targetNum){
//     attempts++;
//     if(guess === 'q'){
//         break;
//     }
//     if(guess > targetNum){
//         guess = prompt("Too high! Go for a lower number");
//     }
//     else{
//         guess = prompt("Too low champ! GO for higher numbers");
//     }
// }
// if (guess === 'q'){
//     console.log(`You quit!! You quit at ${attempts} attempts. However the right number was ${targetNum}`);
// }
// else{
// console.log(`You got it!! You got it in ${attempts} guesses`);
// }
// --------------------------------------------END OF GUESSING GAME---------------------------------------------------------------------------


// -----------------------STARTING A BRAND NEW LOOP CALLED FOR...OF LOOP, LET'S GO!!-----------------------------------------------------------


const subReddits = ['cringe', 'books', 'chikens', 'funny', 'farm'];

// for (let i = 0; i < subReddits.length; i++) {
//     console.log(subReddits[i]);
// } 
// --------------THIS IS HOW WE TRADITIONALLY LOOK INSIDE THE ARRAY,BUT IN FOR...OF LOOP: -----------------------------

for (sub of subReddits){
    console.log(sub)
}
// -------------THIS IS THE NEW FOR...OF LOOOP THAT WAS INTRODUCED IN JAVASCRIPT SOMETIME AGO-------------------------------------

