var countneil = 9;
var countjim = 9;
var countnickole = 12;

var countelementneil = document.querySelector("#count-likes-neil")
var countelementnickole = document.querySelector("#count-likes-nickole")
var countelementjim = document.querySelector("#count-likes-jim")

function addlikesneil(){
    countneil++;
    countelementneil.innerText = countneil + " " +"likes(s)";
}
function addlikesnickole(){
    countnickole++;
    countelementnickole.innerText = countnickole + " " +"likes(s)";
}
function addlikesjim(){
    countjim++;
    countelementjim.innerText = countjim + " " +"likes(s)";
}