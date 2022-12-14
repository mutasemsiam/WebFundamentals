
function alwaysHungry(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy!");
            count++;
        }
    }
    if(count == 0) {
        console.log("I'm hungry!")
    }
}   

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i]> cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avrg = sum/arr.length

    for(var j=0; j<arr.length; j++){
        if (arr[j]> avrg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    var arrNew = [];
    for (var i=arr.length-1; i>=0; i--){
        arrNew.push(arr[i]);
    }
    return arrNew;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

   
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i=2; i<10; i++)
    fibArr[i]= fibArr[i-1] + fibArr[i-2];
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


