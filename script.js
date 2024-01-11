const inputVal = document.querySelector(".input-content input")
const userTodo = document.querySelector(".users-todo p")
const content = document.querySelector("#content")
const userTodoDiv = document.querySelectorAll(".users-todo")
const removeBtn = document.querySelectorAll(".remove")
const addButton = document.querySelector(".input-content button")
const todoContainer = document.querySelector(".users-todo")

addButton.addEventListener("click",function(){
    //creating elements
    const div = document.createElement("div")
    const p = document.createElement("p")
    const btn = document.createElement("button")
    // add p and button into div
    content.appendChild(div)
    div.appendChild(p)
    div.appendChild(btn)
    // assigning them classes
    p.classList.add("para")
    btn.classList.add("remove")
    div.classList.add("users-todo")
    // adding text inside p and button

    p.innerHTML = inputVal.value;
    btn.innerText = "Remove";

    btn.addEventListener("click", function(e) {
        div.remove()
    });
})



// removeBtn.forEach(element => {
//     element.addEventListener("click",function(){
//         const parent = element.parentNode;
//         if(parent){
//             parent.remove();
//         }
//     })
// })

// ["TODO1", "TDO2"]



