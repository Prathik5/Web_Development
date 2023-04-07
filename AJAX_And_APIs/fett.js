// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("Resolved", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("Json Done",data)
//         return fetch("https://swapi.dev/api/people/2")

//     })
//     .then(res =>{
//         console.log("Second request resolved", res);
//         return res.json()
//     })
//     .then(data =>{
//         console.log('Second Json done', data)
//     })
//     .catch(err => {
//         console.log("Errors!!", err)
//     });

const loadStar = async () =>{
    try{
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
    }
    catch(e){
        console.log(e);
    }
}

loadStar()