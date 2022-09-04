function dismissme(element){
    element.parentNode.remove();
}

function pointmouse(element){
    element.style.cursor = 'pointer';
}

function converttemp(){
    
    var tempdf = document.querySelectorAll("#tempd");
    var selectedvalue = document.getElementById("temp").value;
    if (selectedvalue=="°F"){
    
        for (var i=0; i<tempdf.length;i++){
            tempdf[i].innerText = Math.round(parseInt(tempdf[i].innerText)*1.8 + 32);
        }
        console.log(tempdf.innerText);
    }
    else if (selectedvalue=="°C"){

        for (var i=0; i<tempdf.length;i++){
            tempdf[i].innerText = Math.round((parseInt(tempdf[i].innerText) - 32) * 0.5556);
    
         }
    }
}



// onmouseover="this.style.cursor='pointer'"