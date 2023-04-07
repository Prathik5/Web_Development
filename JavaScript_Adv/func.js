// function grumpus(){
//     console.log('Leave me alone');
//     console.log('Please Leave me alone');
//     console.log('Pakistani Famous song');
// }

// grumpus();
// grumpus();

// ----------------------------------------------------------FUNCTION WITH ARGUMENTS---------------------------------------------------------

// function greet(firstName, lastName){
//     console.log(`Hey there ${firstName} ${lastName[0]}.!, Welcome to cinema! :)`);
// }
// greet('George', 'Clooney')

// ----------------------------------------------------FUNCTION WITH MULTIPLE ARGUMENTS------------------------------------------------------


// function repeat(str, num) {
//     let result = '';
//     for (let i = 0; i < num; i++){
//         result += str
//     }
//     console.log(result)
// }

// repeat('Samay', 4)

// --------------------------------------------------------------FUNCTION EXERCISE IN THE COURSE--------------------------------------------


// function isSnakeEyes(num, numm){
//     if(num===1 && numm === 1){
//         console.log('Snake eyes!');
//     }
//     else{
//         console.log('Not Snake Eyes!');
//     }
// }

// isSnakeEyes(1,1);

// function capitalize(str) {
//     let vin = str[0].toUpperCase();
//     let die = str.splice(1, str.length);
//     return vin + die;
    
// }
// -------------------------------------------------------------HIGHER ORDER FUNCTIONS------------------------------------------------------

// function callTwice(func) {
//     func();
//     func();
// }

// function nigga(){
//     console.log("Supp negro");
// }


// -----------------------------------------------------------------RETURNING A FUNCTION-------------------------------------------------------

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function (){
//             console.log("Congrsts I'm a good function");
//             console.log("You win the game");
//         }
//     }
//     else{
//         return function(){
//             alert("You have been infected with a virus");
//             alert("Stop closing this window");
//             alert("Stop closing this window");
//             alert("Stop closing this window");
//             alert("Stop closing this window");
//             alert("Stop closing this window");
//         }
//     }
// }


// function makeBetweenFunc(min, max) {
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

// makeBetweenFunc(5,10)

//function isBetween (num) {
//     return num >= 50 && num <= 100
// }

// ---------------------------------------------------CREATING A METHOD OF OUR OWN-------------------------------------------------------------

// const myMath = {
//     PI : 3.14,
//     square: function (num){
//         return num * num;
//     },

//     cube: function(num1){
//         return num1* num1* num1;
//     }
// }

// const cat = {
//     name: 'Blue Stele',
//     color: 'grey',
//     breed: 'Scotish fold',
//     neow(){
//         console.log(`${this.color} says MEOWWW`);
//     }
// }


// // const meow2 = cat.neow;


// function yell(msg){
//     try{
//         console.log(msg.toUpperCase(). repeat(4));
// }
//     catch(e){
//         console.log("Please pass a string next time")
//     }
// }



// -------------------------------------------------------MAP FUNCTION(VERY IMPORTANT)---------------------------------------------------

// const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const cinn = numb.map(function(nummm) {
//         console.log(nummm)
// })

// const movies = [
    // {
        // title : 'Rocky',
        // score : 90,
        // year : 1972
    // },
    // {
    //     title : 'El camino',
    //     score : 85,
    //     year : 2019 
    // },
    // {
    //     title : 'Fight Club',
    //     score : 99,
    //     year : 1997
    // },
    // {
    //     title : 'The Batman',
    //     score : 100,
    //     year : 2022
    // },
    // {
    //     title : 'Inception',
    //     score : 50,
    //     year : 2010
    // },
    // {
    //     title : 'Shrek',
    //     score : 30,
    //     year : 2001
    // },
    // {
    //     title : 'Parasite',
    //     score : 20,
    //     year : 2018
    // },
    // {
    //     title : 'Top Gun',
    //     score : 75,
    //     year : 1989
    // }

// const tittle = movies.map(function (zen) {
//     return `${zen.title} - ${zen.score / 10}`;
// })
// console.log(tittle)
// ------------------------------------------------SET TIME OUT AND SET INTERVAL FUNCTIONS----------------------------------------------


// console.log("Hello");
// setTimeout ( () => {
//     console.log("...are you still there?");
// }, 3000)

// console.log("Goodbye")


// const id = setInterval(() =>{
//     console.log(Math.random())
// },3000)

// Since we know setInterval, we need to know about the clearInterval function. It works like : clearInterval(id) in this case :)

// ------------------------------------------------FILTER FUNCTION -----------------------------------------------------------------
// THIS MIGHT BE VERY VERY IMPORTANT:
const movies = [
    {
        title : 'Rocky',
        score : 90,
        year : 1972
    },
    {
        title : 'El camino',
        score : 85,
        year : 2019 
    },
    {
        title : 'Fight Club',
        score : 99,
        year : 1997
    },
    {
        title : 'The Batman',
        score : 100,
        year : 2022
    },
    {
        title : 'Inception',
        score : 50,
        year : 2010
    },
    {
        title : 'Shrek',
        score : 30,
        year : 2001
    },
    {
        title : 'Parasite',
        score : 20,
        year : 2018
    },
    {
        title : 'Top Gun',
        score : 75,
        year : 1989
    }
]

const goodMovies = movies.filter(m =>  m.score > 70).map(m => m.title) 
// That's how you combine them, i.e by nesting it
const badMovies = movies.filter(m =>  m.score < 70)
const recentMovies = movies.filter(m =>  m.year > 2000)

// ------------COMBINING MAP AND FILTERING


// -----------------------------------------------------SUM AND EVERY FUNCTION----------------------------------------------------------

const exams = [90, 89, 87, 91, 100, 98, 91, 89, 88, 83, 86]

const gamee = exams.every(score => score >= 75)

