const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicked me");
    console.log("I hope it worked");
}

function scream () {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log("Stop touching me");
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick= () => {
    alert("You clicked me!");
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert('Clicked');
})

function twist () {
    console.log("Twist");
}

function shout () {
    console.log('Shout');
}

const tasbtn = document.querySelector('#tas')

// tasbtn.onclick = twist;
// tasbtn.onclick = shout;

tasbtn.addEventListener('click', twist)
tasbtn.addEventListener('click', shout)