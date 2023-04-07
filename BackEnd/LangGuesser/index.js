import {franc, francAll} from 'franc'
import langs from 'langs';
import color from 'colors';
const input = process.argv[2];
const code = franc(input);
if (code ==='und'){
    console.log("Sorry you piece of shit i could'nt figure it out".red)
}
else{
const langu =  langs.where("3", code);
console.log(`Our best guess is : ${langu.name}`.green);
}