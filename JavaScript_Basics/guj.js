let input = prompt("What would you like to do?");
const todos = ['Collect eggs', 'Clean cat litter box'];
while(input !== 'quit' && input !== 'q') {
    if(input === 'list'){
        console.log('**************');
        for (let i = 0; i < todos.length; i++){
            console.log(`${i} is ${todos[i]} `);
        }
        console.log('**************');
    }
    else if(input === 'new'){
        const newTodo = prompt('What is the new Todo?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    }
    else if(input === 'delete'){
        const index = parseInt(prompt('What item number do you want to delete'));

        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1 );
            console.log(`Ok! Deleted ${deleted[0]}`);
        }
        else{
            console.log("Unkonwn index");
        }
    }
    input = prompt('What would you like to do?');

    
}
console.log('Okay you quit the app');
