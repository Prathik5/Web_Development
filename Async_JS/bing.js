// // console.log("Sending a request to server");
// // setTimeout(() => {
// //     console.log("Here is your data from the server...");
// // }, 3000)
// // console.log("Okay this is the end");
// // setTimeout(() =>{
// // document.body.style.backgroundColor = 'red';
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = 'orange';
// //         setTimeout(() => {
// //             document.body.style.backgroundColor = 'yellow';
// //              setTimeout(() => {
// //                 document.body.style.backgroundColor = 'blue';
// //                 setTimeout(() => {
// //                     document.body.style.backgroundColor = 'green';
// //                 }, 1000)
// //             }, 1000)
// //         }, 1000)
// //     }, 1000)
// // }, 1000)

// const delayColorChange = (newcolor, delay, donNext) =>{
//     setTimeout(() => {
//         document.body.style.backgroundColor = newcolor;
//         donNext && donNext();
//     }, delay) 
// }

// delayColorChange('olive', 1000, () => {
//     delayColorChange('orange', 1000, () => {
//         delayColorChange('yellow', 1000, () => {
//             delayColorChange('green', 1000, () => {
//                 delayColorChange('violet', 1000, () => {
        
//                 });
        
//             });
//         });

//     });
// });

// searchMoviesAPI('amadeus', () =>{
//     saveToMyDB(movies, ()=>{
//         // If it works, run this
//     }, () => {
//         // Else you'll have to run this
//     }, () => {
//         // You might also have to execute this sometimes
//     })
// })
const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style. backgroundColor = color;
            resolve();
        }, delay) 
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('pink', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .then(() => delayedColorChange('aqua', 1000))
//     .then(() => delayedColorChange('blue', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('pink', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('orange', 1000)
    return 'All Done!!'
}

// rainbow() .then(() => console.log('End of Rainbow'))

async function printRainbow() {
    await rainbow();
    console.log('End of rainbow')
}