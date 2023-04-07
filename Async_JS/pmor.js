// // async function hello(){
// // }

// const sing = async () =>{
//     // throw "lmaoo"
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data =>{
//         console.log ('Promise resolved with', data)
//     })
//     .catch(err=>{
//         console.log('Oh noooo')
//     })  


const login = async(username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password == 'cutiepie') return 'Welcome!!'
    throw 'Invalid Password'
}

login('prathik', 'cutiepie')
.then( msg =>{
    console.log('Logged In');
    console.log(msg);
})
.catch(err =>{
    console.log('Error!!');
    console.log(err)
})