const promt =require("promt-sync")();
let originalnum=20;
let usernum;
let count=0;
do{
    let usernum= -promt("enter the number");
    count++;
    if(username==originalnum)
    {
        console.log("number is correct");
        break;

    }
}while(originalnum!=usernum);