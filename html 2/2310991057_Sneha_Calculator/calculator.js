let display = document.getElementById('display');

function addsymbol(input)
{
    display.value = display.value +input;
}

function calculate()
{
    try{
    let res = eval(display.value);

    display.value = res;
    } catch {
        display.value = "error!";
    }
    display.value = res;
}

function cleardisplay()
{
    display.value = " ";
}

function clearcharacter()
{
    let str = display.value;
    display.value = str.slice(0,str.length-1);
}

