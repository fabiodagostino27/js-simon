let countdown = document.getElementById("countdown");
let counter = 30;
let numbersList = document.getElementById("numbers-list");
let randomArr = [];
let answersForm = document.getElementById("answers-form");
let numbers = document.getElementsByClassName("form-control");
let btn = document.querySelector(".btn");
let message = document.getElementById("message");
let rightAnswers = 0;
let rightArr = [];

function randomNumberGroup(arr) {
    for (let i = 0; i <= 4; i++) {
        arr.push(Math.floor(Math.random() * 50) + 1);
    }

    return arr;
}


numbersList.innerHTML = randomNumberGroup(randomArr);


let interval = setInterval(function(){
    counter--;
    countdown.innerHTML = counter;

    if (counter == 0) {
        clearInterval(interval);
        numbersList.classList.replace("d-flex", "d-none");
        answersForm.classList.replace("d-none", "d-block");
    }
}, 1000)

btn.addEventListener("click", function(event) {
    event.preventDefault();
    if (btn.innerHTML == "Conferma") {
        btn.innerHTML = "Ricomincia!";

        for (i = 0; i < randomArr.length; i++) {
            for (k = 0; k < randomArr.length; k++) {
                if (numbers[i].value == randomArr[k]) {
                    rightAnswers++;
                    rightArr.push(numbers[i].value);
                }
            }
        }
    
        if (rightAnswers > 0) {
            message.innerHTML = `Hai indovinato ${rightAnswers} numeri! (${rightArr})`;
            message.classList.replace("text-danger", "text-success");
        } else {
            message.innerHTML = "Non hai indovinato nessun numero!";
        }
    } else {
        location.reload();
    }
})
