let button = document.getElementById('countingButton');
let number = document.getElementById('number');
let confetti = document.getElementById('confetti');

button.addEventListener("click", function () {
    number.innerHTML++
    if (number.innerHTML >= 100) {
        console.log("YOU WIN!!");
        confetti.style = "background-image: url(src/confetti.gif); background-size: cover; background-position: center;";
    } if (number.innerHTML == 69) {
        console.log("hehe funny number 69");
    } if (number.innerHTML == 420) {
        console.log("hehe another funny number 420");
    } if (number.innerHTML == 1000) {
        console.log("okay, okay, you can stop now...");
    }
});