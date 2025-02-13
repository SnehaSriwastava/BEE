let task = document.getElementById('new-task');

let tasklist = document.querySelector(".task-list");
tasklist.addEventListener("click" , function(event){
    if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
})




function addtask() {
    if (task.value === "") {
        alert("Emter task name")
    }
    else {
        let task = document.getElementById("new-task").value;
        console.log(task);
        let li = document.createElement('li');
        li.innerHTML = `${task}`;
        console.log(li);
        let ul = document.querySelector('.task-list');
        ul.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    task.value = "";

}





// let heading = document.getElementById('head') ; 
// console.log(head.innerHTML);

// let para = document.querySelector("#para");
// console.log(para.textContent);

// let para1 = document.querySelector("#para1");
// console.log(para1.textContent);

// let head1 = document.querySelector("#head1");
// head1.innerHTML = This is changed content ;