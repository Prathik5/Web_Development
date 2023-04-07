const userInput = prompt("Enter a message: ");

if( userInput === 0 || null || undefined || " "){
    console.log("Falsy");
}
else{
    console.log("Truthy");
}