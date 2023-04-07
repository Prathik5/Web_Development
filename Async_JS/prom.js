// const fakeRequestCallBack = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if(delay > 4000){
//             failure('Connection Timeout :(');
//         }else{
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay);
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject('Connection Timeout');
            }else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try{
    let data1 = await fakeRequestPromise('/page1');
    console.log(data1)
    let data2 = await fakeRequestPromise('page2')
    console.log(data2);
    }
    catch(e) {
        console.log('Caught an error')
        console.log('Error is : ',e)
    }   
}
// // fakeRequestCallBack('books.com/page1', 
// //     function(response) {
// //         console.log("This worked")
// //         console.log(response)
// //         fakeRequestCallBack('books.com/page2', 
// //         function(response){
// //             console.log("yay! worked again");
// //             console.log(response); 
// //         fakeRequestCallBack('books.com/page3', 
// //         function(response){
// //             console.log("yay! worked again, for the third time");
// //             console.log(response);
// //         }, 
// //         function(err) {
// //             console.log("Nope, not everytime bruh, don't you get it");
// //             console.log(err)
// //         })
// //     }, function(err) {
// //         console.log("Nope, not everytime bruh");
// //         console.log(err)
// //     })
// //     }, function(err) {
// //         console.log("Error!");
// //         console.log(err)
// //     })

// // const request = fakeRequestPromise('yrlp.com/api/coffee')
// //     .then(() => {
// //         console.log('It worked!!(page1)');
// //         console.log("Promise resolved");
// //         fakeRequestPromise('yrlp.com/api/coofee/page2')
// //         .then(() => {
// //             console.log('Yay! worked again? Damn(page2)');
// //             console.log('See Resolved again :)');
// //             fakeRequestPromise('yrlp.com/api/coofee/page3')
// //             .then(() => {
// //                 console.log('Yay! worked again? Damn(page3)');
// //                 console.log('See Resolved again :)');
// //             })
// //             .catch(() => {
// //                 console.log('Rejected lol(page3)');
// //                 console.log("Not everyday is a sunday brother lmao")
// //             })
// //         })
// //         .catch(() => {
// //             console.log('Rejected lol(page2)');
// //             console.log("Not everyday is a sunday brother lmao")
// //         })
// //     })
// //     .catch(() => {
// //         console.log("Oh Nooooooo!!!!(page1)");
// //         console.log('Promise Rejected lol');
// //     })


// fakeRequestPromise('yrlp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It worked!!!(page1)')
//         console.log(data)
//         return fakeRequestPromise('yrlp.com/api/coffee/page2');
//     })
//     .then((data) => {
//         console.log('It worked!!!(page2)');
//         console.log(data)
//         return fakeRequestPromise('yrlp.com/api/coffee/page3');
//     })
//     .then((data) =>{
//         console.log('It Worked!(page3)');
//         console.log(data)
//         // return fakeRequestPromise('yrlp.com/api/coffee/page4');
//     })
//     .catch((err) => {
//         console.log("Oh noo!!!");
//         console.log(err)
//     })

// new Promise ((resolve, reject) => {
//     resolve();
// })

// const fakePromise = (url) =>{
//     return new Promise((resolve, reject) =>{
//         const rand = Math.random();
//         setTimeout(() =>{
//             if(rand < 0.7){
//                 resolve('Your data is resolved');
//             }
//             reject('Error lol!');
//         }, 1000)
//     })
// } 
// fakePromise('/dog/1')
// .then((data)=>{
//     console.log("Done with Request")
//     console.log('Data is:', data)
// })
// .catch((err)=>{
//     console.log("Oh no!!")
// })