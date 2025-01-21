let countdown = document.getElementById("countdown");
let counter = 30;

let interval = setInterval(function(){
    counter--;
    countdown.innerHTML = counter;

    if (counter == 0) {
        clearInterval(interval)
    }
}, 1000)