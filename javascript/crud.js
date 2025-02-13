// let arr=[
//     {
//         id:1,
//         name:'abc',
//     },
    
//     {
//         id:2,
//         name:'asd',
//     },
    
//     {
//         id:3,
//         name:'xyz',
//     },
// ];
//     arr.forEach((element,index)=>{
//         console.log(element.id);
//         console.log(element.name);
//         // console.log(index);
//     }
// )



const form=document.getElementById("form")
const nameInput=document.getElementById("name")
const ageInput=document.getElementById("age")
const tableBody=document.getElementById("table-body")
const addButton=document.getElementById("add-btn")

let editIndex=null

let people=JSON.parse(localStorage.getItem("people")) || [];

//function to render a table
function renderTable(){
    tableBody.innerHTML="";
    people.forEach((person,index) => {
        const row=document.createElement("tr");
        row.innerHTML=`
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td class="actions">
                <button class="edit" onclick="editPerson(${index})">Edit</button>
                <button class="delete" onclick="deletePerson(${index})">Delete</button>
                </td>
        `;
        tableBody.appendChild(row);
    });
}

//add or update a person
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name=nameInput.value;
    const age=ageInput.value;

    if(editIndex===null){
         //add a new person
         people.push({name,age});
    }
    else{
        //update person
        people[editIndex]={name,age};
        addButton.innerText="Add";
        editIndex=null;
    }

    localStorage.setItem("people",JSON.stringify(people));

    form.reset();
    renderTable();
});
function editPerson(index){
    nameInput,value=people[index].name;
    ageInput,value=people[index].age;
    addButton.innerText="Update";
    editIndex=index;
}