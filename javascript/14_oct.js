let innerDiv = [];
    let i = -1 ;
document.getElementById('questionForm').addEventListener('submit', function(event){
    event.preventDefault();
    const subject = document.getElementById('subject').value ; 
    const question = document.getElementById('question').value ; 
    i = i+1 ; 
    if(subject && question){
        let questionList = document.getElementById('questions');

        innerDiv[i] = document.createElement('div');

        innerDiv[i].id = `oneQuestionDiv` ; 
        questionList.appendChild(innerDiv[i]) ;
         
        const para1 = document.createElement('p') ; 
        para1.textContent = subject ; 
        para1.id = 'p1' ; 

        const para2 = document.createElement('p');
        para2.innerHTML = question ; 
        
        innerDiv[i].appendChild(para1);
        innerDiv[i].appendChild(para2);


        document.getElementById('subject').value = '';
        document.getElementById('question').value = '';

        innerDiv[i].addEventListener('click' , function(event){
            event.preventDefault();
            let right_pane = document.querySelector('.right-pane');
            right_pane.innerHTML = "";
            
            let quesPara = document.createElement('p');
            quesPara.innerHTML = "Question" ; 
            quesPara.style.fontSize = "25px" ; 

            right_pane.appendChild(quesPara) ; 

            let questionDiv1 = document.createElement('div'); 
            questionDiv1.id = 'questionDiv' ; 
            questionDiv1.innerHTML = `<p style = "font-size: 25px"> ${subject}</p> <p> ${question} </p>` ; 
            questionDiv1.style.backgroundColor = "#ccc" ; 
            questionDiv1.style.padding = "10px"


            right_pane.appendChild(questionDiv1);
            let qButton=document.createElement("button");
            qButton.id="qbutton";
            qButton.innerHTML="Resolve";
            qButton.style.backgroundColor="007BFF";
            qButton.style.fontSize="25px";
            qButton.style.marginTop="5px";
            qButton.style.color="white";

            right_pane.appendChild(q.button);

            responseDiv = document.createElement("div");
            responseDiv.id = "responseDiv";
            let resPara = document.createElement("p");
            resPara.innerHTML = "Response";
            resPara.style.fontSize = "25px";
            right_pane.appendChild(resPara);
            right_pane.appendChild(responseDiv);

            let myUL=Document.createElement("ul");
            myUL.id="responseList";
            resForm=documnet.createElement("form");
            resForm.id="responseForm";

            right_pane.appendChild(resForm);
            resForm.addEventListener("submit",function(event){
            event,preventDefault();
            const name=document
            })
        })

    }
})