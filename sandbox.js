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
        if (span.value === todo){
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
        
    }
        todo.innerHTML += 
        `<div class="task">
            <span class="span-value">${inp.value}</span>         
            <div class="btn-div">
            <button  class="Del delete">Delete</button>
            <button class="edit">Edit</button>
            </div>
        </div>`
        let val = document.querySelector('.span-value');
        for (let i = 0; i<val.length; i++){
            console.log(val.innerHTML[i]);
        }
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