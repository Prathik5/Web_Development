const figlet = require('figlet');
const color = require('colors');

figlet('Hello world!!', function(err, data){
    if(err){
        console.log("something went wrong");
        console.log(err);
        return;
    }
    console.log(data.green);
});