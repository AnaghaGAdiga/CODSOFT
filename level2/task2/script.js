let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// Array to hold the generated quiz questions
const quizArray = [
    {
        id: "0",
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correct: "Paris",
    },
    {
        id: "1",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: "Mars",
    },
    {
        id: "2",
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correct: "William Shakespeare",
    },
    {
        id: "3",
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: "Blue Whale",
    },
    {
        id: "4",
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        correct: "Japan",
    },
    // Add more questions as needed
];

// Display the generated quiz questions (console.log for demonstration)

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
nextBtn.addEventListener(
    "click",
    (displayNext = () => {

        questionCount += 1;

        if (questionCount == quizArray.length) {

            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");

            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {

            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";

            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {

    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {

        i.options.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);

    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}; 