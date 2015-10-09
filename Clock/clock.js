var isRunning = false;

var currentTime = 0

function incrementTime() {
    intervalHandler = setInterval(function (){
        currentTime += .01;
        updateTime();
    }, 10)
}

var updateTime = function () {
    document.getElementById('current-time').innerHTML = currentTime.toFixed(2);    
}

document.getElementById('start').addEventListener('click', function (){
    if (isRunning==false) {
        isRunning=true;     
        incrementTime()
    }

})

function startTime() {
    
}
    

document.getElementById('stop').addEventListener('click', stopTime)

function stopTime() {
    isRunning=false;
    clearInterval(intervalHandler);
}

document.getElementById('clear').addEventListener('click', clearTime);
function clearTime() {

currentTime=0;
updateTime();
}