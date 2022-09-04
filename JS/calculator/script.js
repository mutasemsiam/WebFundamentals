
var displayscreen = document.querySelector("#display");
var z = false;

function press(i){
    if (displayscreen.innerText == '0' || z==true){
    displayscreen.innerText = i;
    z = false;
    }
    else {
        displayscreen.innerText = displayscreen.innerText + i; 
    }   
    
}

function setOP(x){
    z = false;
    displayscreen.innerText = displayscreen.innerText + x;
    
}

function calculate(){
    displayscreen.innerText = eval(displayscreen.innerText);
    z = true;
}

function clr(){
    displayscreen.innerHTML = '0';
}

