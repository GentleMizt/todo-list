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
            <button>Delete</button>
        </div>`
        inp.value = ''
    } else {
    alert('Input field cannot be empty');
}
}