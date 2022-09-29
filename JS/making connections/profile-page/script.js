
var changingname = document.querySelector("#janename")
function changename(){
    changingname.innerHTML = "Another name"
}

function removeitem(element){
element.parentNode.parentNode.remove();
}

function countreq(){
    var count = document.querySelector(".reqbadge");
    count.innerText--;
}

function countconn(){
    var count = document.querySelector(".connbadge");
    count.innerText++;
    
}