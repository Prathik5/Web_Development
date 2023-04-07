// axios.get("https://swapi.dev/api/people/1")
//     .then(res =>{
//         console.log("Respone",res);
//     })
//     .catch(e => {
//     console.log("Error!!!", e);
//     })

// const getStar = async(id) =>{
//     try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     } catch(e){
//         console.log("Error!!", e);
//     }};

// getStar(3);
// getStar(4);
// getStar(16);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async() =>{
    const jokeText = await getDadjoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadjoke = async() => {
    try{
        const config = {headers : {Accept : 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke; 
    }catch(e){
        return "no jokes available"
    }};

    // getDadjoke();
    button.addEventListener('click', addNewJoke);
    