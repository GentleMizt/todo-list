let inp = document.querySelector('#inp');
let inp_btn = document.querySelector('#push');
let todo = document.querySelector('#tasks');
document.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        getTask();
    }
});
inp_btn.addEventListener('click',getTask)

function checkTask(todo) {
    let check ={
        found : false,
        element : null,
    };
    document.querySelectorAll('.span-value').forEach((span) =>{
        if (span.textContent === todo){
            check.found = true;
            check.element = span;
        }
    });
    return check;
}

function getTask (){     
   if (inp.value !== '') {
        let check = checkTask (inp.value)
        if (check.found === true){
            alert ('You have this Task already')
            check.element.parentElement.style.background = 'red'
            check.element.style.background = '#ff7b7b'
            check.element.style.color = 'white'
        } else{
            todo.innerHTML += 
            `<div class="task">
                <span class="span-value">${inp.value}</span>         
                <div class="btn-div">
                <button  class="Del delete">Delete</button>
                <button class="edit">Edit</button>
                </div>
            </div>`
           ;
        } 
    } else{
        alert('Input field cannot be empty');
    } 
    let span = document.querySelector('span');
    console.log(span) 
    inp.value = ''  ;
}


        //  SAMUEL'S METHOD!
    todo.addEventListener('click', (e) => {
        if (e.target.classList.contains('Del')) {
            // console.log(e.target);
            // inp.value = span.textContent  ;
           e.target.parentNode.parentNode.remove();
        }
    });
    todo.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            // console.log(e.target);
            inp.value = e.target.parentNode.parentNode.children[0].textContent;
            // console.log(e.target.parentNode.parentNode.children[0].textContent);
           e.target.parentNode.parentNode.remove();
        }
    });

    // let val = document.querySelector('.span-value');
    // console.log(val.textContent);
    // function list () {
    
    // }

    // list();






    // if (input.value !== "") {
    //     for (let i = 0; i < listItems.length; i++) {
    //       console.log(listItems[i].innerText);
    //       if (listItems[i].innerText === input.value) {
    //         err.innerText =
    //           "Item already exists click on the item to increase its quantity";
    //         input.value = "";
    //         return;
    //       }
    //     }
    //     const li = document.createElement("li");
    //     li.innerText = input.value;
    //     ul.appendChild(li);
        
    //     console.log(listItems);
    //     input.value = "";
    //   }
    //   console.log(ul.children