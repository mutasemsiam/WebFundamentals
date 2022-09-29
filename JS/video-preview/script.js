console.log("page loaded...");
function playvideo(element){
    
    element.play();
    element.muted = true;
    element.loop = true;
    element.controls = true;
}

function stopvideo(element){
    element.pause();
    element.controls = false;
}

function stopmute(element){
    element.muted = false;
    element.requestFullscreen();
    element.pause();
}

