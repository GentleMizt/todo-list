let inp = document.querySelector('#inp');
let inp_btn = document.querySelector('#push');
let todo = document.querySelector('#tasks');
// console.log(inp.value);
document.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        getTask();
    }
});
inp_btn.addEventListener('click',getTask)


function getTask (){ 
   if (inp.value !== '') {
        todo.innerHTML += 
        `<div class="task">
            <span>${inp.value}</span>         
            <button onclick="dlt(this)" class="Del">Delete</button>
        </div>`
        inp.value = ''
    } else {
    alert('Input field cannot be empty');
}
}

//      LEYE'S METHOD
    function dlt(e) {
        e.parentElement.remove();
    }




//      SAMUEL'S METHOD!
// todo.addEventListener('click', (e) => {
//     if (e.target.classList.contains('Del')) {
//        e.target.parentNode.remove();
//     }
//    });