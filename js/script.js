let countdown = document.getElementById("countdown");
let counter = 30;
let numbersList = document.getElementById("numbers-list");
let randomArr = [];

function randomNumberGroup(arr) {
    for (let i = 0; i <= 4; i++) {
        arr.push(Math.floor(Math.random() * 50) + 1);
    }

    return arr
}


numbersList.innerHTML = randomNumberGroup(randomArr)

let interval = setInterval(function(){
    counter--;
    countdown.innerHTML = counter;

    if (counter == 0) {
        clearInterval(interval)
    }
}, 1000)