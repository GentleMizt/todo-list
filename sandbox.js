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
            <span class="span-value">${inp.value}</span>         
            <div class="btn-div">
            <button  class="Del delete">Delete</button>
            <button class="edit">Edit</button>
            </div>
        </div>`
        let val = document.querySelector('.span-value');
        console.log(val.textContent);
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


    function list () {
        
        // console.log(val);
    }

    list();






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