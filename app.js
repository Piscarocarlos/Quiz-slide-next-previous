let next = document.getElementById("next");
let prev = document.getElementById("previous")
let loaderInner = document.querySelector('.loader-inner');
let questionNumber = document.getElementById("question-number")
let questions = document.getElementById("questions");
let count = document.querySelector(".count")

const showAnimate = (move, numberQuestion) => {
    loaderInner.style = `animation: ${move} .5s linear forwards`;
    questionNumber.innerText = numberQuestion;
    questions.classList.add("animate__animated", "animate__bounceInRight")
}


next.addEventListener('click', () => {
    switch (questionNumber.innerText) {
        case "0/4":
            showAnimate("move-25", "1/4")
            break;

        case "1/4":
            showAnimate("move-50", "2/4")
            break;

        case "2/4":
            showAnimate("move-75", "3/4")
            break;

        case "3/4":
            showAnimate("move-100", "4/4")
            break;
        default:
            break;
    }
})

const counterBox = () => {
    setInterval(() => {
        if (Number(count.innerText) < 10) {
            count.innerText = Number(count.innerText) + 1;
        } else {
            document.querySelector('.counter').classList.add('animate__animated', 'animate__shakeX')
        }
    }, 1000);
}

counterBox();



let darkMode = document.querySelector(".form-check input")

darkMode.addEventListener('click', () => {
    if (darkMode.checked == true) {
        document.body.classList.replace('bg-light', 'bg-dark')
    } else {
        document.body.classList.replace('bg-dark', 'bg-light')
    }
})