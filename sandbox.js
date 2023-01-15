let inp = document.querySelector('#inp');
let inp_btn = document.querySelector('#push');
let todo = document.querySelector('#tasks');
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
            <div class="btn-div">
            <button  class="Del delete">Delete</button>
            <button class="edit">Edit</button>
            </div>
        </div>`
        inp.value = ''
    } else {
    alert('Input field cannot be empty');
}
}

//      LEYE'S METHOD
    // onclick="dlt(this)"
    // function dlt(e) {
    //     e.parentNode.remove();
    // }

        //  SAMUEL'S METHOD!
    todo.addEventListener('click', (e) => {
        if (e.target.classList.contains('Del')) {
            // console.log(e.target);
           e.target.parentNode.parentNode.remove();
        }
    });

