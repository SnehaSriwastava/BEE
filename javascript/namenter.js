let form = document.getElementById("form");
let list = document.querySelector(".task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;

    if (contact.length > 10 || contact.length < 10) {
        alert("Contact number should be exactly 10 digits long.");
    } else if (name === "" || contact === "") {
        alert("Please enter both name and contact number.");
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = `Name: ${name}, Contact: ${contact} <span>&times;</span>`;
        list.appendChild(listItem);

        // Clear input fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
    }
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

