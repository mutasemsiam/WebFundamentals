var count = 3;
var countelement = document.querySelector("#count-likes")

function addlikes(){
    count++;
    countelement.innerText = count + " " +"likes(s)";
}