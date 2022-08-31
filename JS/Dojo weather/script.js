function dismissme(element){
    element.parentNode.remove();
}

function converttemp(){
    var temp1f = document.querySelector("#temp1");
    var temp2f = document.querySelector("#temp2");
    var temp3f = document.querySelector("#temp3");
    var temp4f  = document.querySelector("#temp4");
    var temp5f  = document.querySelector("#temp5");
    var temp6f  = document.querySelector("#temp6");
    var temp7f  = document.querySelector("#temp7");
    var temp8f  = document.querySelector("#temp8");
    var selectedvalue = document.getElementById("temp").value;
    if (selectedvalue=="°F"){
        temp1f.innerText = Math.round(temp1f.innerText*1.8 + 32);
        temp2f.innerText = Math.round(temp2f.innerText*1.8 + 32);
        temp3f.innerText = Math.round(temp3f.innerText*1.8 + 32);
        temp4f.innerText = Math.round(temp4f.innerText*1.8 + 32);
        temp5f.innerText = Math.round(temp5f.innerText*1.8 + 32);
        temp6f.innerText = Math.round(temp6f.innerText*1.8 + 32);
        temp7f.innerText = Math.round(temp7f.innerText*1.8 + 32);
        temp8f.innerText = Math.round(temp8f.innerText*1.8 + 32);
    }
    else if (selectedvalue=="°C"){
        temp1f.innerText = 24;
        temp2f.innerText = 18;
        temp3f.innerText = 27;
        temp4f.innerText = 19;
        temp5f.innerText = 21;
        temp6f.innerText = 16;
        temp7f.innerText = 26;
        temp8f.innerText = 21;
    }
}
