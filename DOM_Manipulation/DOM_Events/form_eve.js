const form = document.querySelector('#shelter');
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Submitted")
    const catName = input.value
    const newLi = document.createElement('li')
    newLi.innerText = catName;
    // console.log(newLi)
    list.append(newLi)
    input.value = '';
});

