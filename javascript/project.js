let innerDiv = [];
let i = -1;

// Function to handle form submission
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const subject = document.getElementById('subject').value;
    const question = document.getElementById('question').value;
    i++;

    if (subject && question) {
        let questionList = document.getElementById('questions');
        innerDiv[i] = document.createElement('div');
        innerDiv[i].id = 'oneQuestionDiv';
        questionList.appendChild(innerDiv[i]);

        const para1 = document.createElement('p');
        para1.textContent = subject;
        para1.id = 'p1';
        const para2 = document.createElement('p');
        para2.innerHTML = question;
        innerDiv[i].appendChild(para1);
        innerDiv[i].appendChild(para2);

        // Clear input fields
        document.getElementById('subject').value = '';
        document.getElementById('question').value = '';

        // Add click event to display the question in the right pane
        innerDiv[i].addEventListener('click', function(event) {
            displayQuestionInRightPane(subject, question);
        });
    }
});

// Function to display fixed questions
function showFixedQues(question) {
    displayQuestionInRightPane("Fixed Question", question);
}

// Function to display the question in the right pane
function displayQuestionInRightPane(subject, question) {
    let right_pane = document.querySelector(".right-pane");
    right_pane.innerHTML = ""; // Clear previous content
    

    let quesPara = document.createElement('p');
    quesPara.innerHTML = "Question";
    quesPara.style.fontSize = "25px";

    right_pane.appendChild(quesPara);

    let questionDiv1 = document.createElement('div');
    questionDiv1.id = 'questionDiv';
    questionDiv1.innerHTML =`<p style="font-size:25px">${subject}</p><p>${question}</p>`;
    questionDiv1.style.backgroundColor = "#ccc";
    questionDiv1.style.padding = "10px";

    right_pane.appendChild(questionDiv1);


    // Create a button to resolve the question
    // let qButton = document.createElement('button');
    // qButton.id = 'qButton';
    // qButton.innerHTML = "Resolve";
    // qButton.style.backgroundColor = "#007bff";
    // qButton.style.fontSize = "25px";
    // qButton.style.marginTop = "5px";
    // qButton.style.color = "white";
    // qButton.style.cursor = "pointer";

    // right_pane.appendChild(qButton);

    // Create a response section
    let responseDiv = document.createElement("div");
    responseDiv.id = "responseDiv";

    let resPara = document.createElement("p");
    resPara.innerHTML = "Response";
    resPara.style.fontSize = "25px";
    right_pane.appendChild(resPara);
    right_pane.appendChild(responseDiv);

    let myUl = document.createElement('ul');
    myUl.id = "responseList";
    let resForm = document.createElement("form");
    resForm.id = "responseForm";
    resForm.innerHTML = `<input type="text" id="name" placeholder="Your Name" required><br>
                         <input type="text" id="response" placeholder="Your Response" required><br>
                         <button type="submit">Submit</button>`;

    right_pane.appendChild(resForm);

    // Handle response submission
    resForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const response = document.getElementById("response").value;
        if (name && response) {
            const responseListItem = document.createElement("li");
            responseListItem.textContent = `${name}: ${response}`;
            myUl.appendChild(responseListItem);
            responseDiv.appendChild(myUl);
            // Clear response form fields
            document.getElementById("name").value = '';
            document.getElementById("response").value = '';
            resForm.style.display='none';
        }
    });
}

// Add event listener to "Your Questions" header for redirection
document.querySelector('.left-pane h3:nth-of-type(2)').addEventListener('click', function() {
    window.location.href = 'project.html'; // Change this to your actual page URL
});



