let userData=[
    {
        userid:101,
        Name:"Sneha",
        email:"Sneha@gmail.com"
    },
    {
        userid:102,
        Name:"Rajveer",
        email:"Rajveer@gmail.com"
    },
    {
        userid:103,
        Name:"Sakshi",
        email:"Sakshi@gmail.com"
    },
    {
        userid:104,
        Name:"Parth",
        email:"Parth@gmail.com"
    },
    ];
    let table=document.getElementById("table-data")
    
    
    userData.forEach((element,index)=>{
        // table.innerHTML = "";
        let row=document.createElement("tr")
        row.innerHTML=`
        <td>${element.userid}</td>
        <td>${element.Name}</td>
        <td>${element.email}</td>
        ` ; 

        table.appendChild(row) ; 
    })