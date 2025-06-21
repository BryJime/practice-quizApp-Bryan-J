window.addEventListener('load', () => {

    const question = document.getElementById("question");
    const answer1 = document.getElementById("answerOne");
    const answer2 = document.getElementById("answerTwo");
    const answer3 = document.getElementById("answerThree");
    const answer4 = document.getElementById("answerFour");
    const nextButton = document.getElementById("next-button");
    const answerOneButton = document.getElementById("answer1");
    const answerTwoButton = document.getElementById("answer2");
    const answerThreeButton = document.getElementById("answer3");
    const answerFourButton = document.getElementById("answer4");
    const displayAnswer = document.getElementById("display-answer");

    class QuizQuestion {
        constructor(question, options, answer) {
            this.question = question;
            this.options = options;
            this.answer = answer;
        }

    }

    const quizArray = [
        new QuizQuestion("What is the capital of France?", ['London', 'Paris', 'Rome', 'Berlin'], "Paris"),
        new QuizQuestion("Which planet is known as the 'Red Planet'?", ['Earth', 'Mars', 'Venus', 'Jupiter'], "Mars"),
        new QuizQuestion("What is the chemical symbol for water?", ['H2O', 'CO2', 'NaCl', 'O2'], "H2O"),
        new QuizQuestion("In what year did World War II begin?", ['1914', '1939', '1941', '1945'], "1939"),
        new QuizQuestion("Who wrote 'Hamlet'?", ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'], "William Shakespeare")
    ]


    question.innerHTML = quizArray[0].question;
    answer1.innerHTML = quizArray[0].options[0];
    answer2.innerHTML = quizArray[0].options[1];
    answer3.innerHTML = quizArray[0].options[2];
    answer4.innerHTML = quizArray[0].options[3];

    answerOneButton.addEventListener('click', function () {

        if (answer1.innerText === quizArray[nextQuestion].answer) {
            displayAnswer.innerText = "CORRECT!!!"
            displayAnswer.style.color = "rgb(3, 154, 28)";
        } else {
            displayAnswer.innerText = "INCORRECT (TRY AGAIN)"
            displayAnswer.style.color = "red";
        }

    })

    answerTwoButton.addEventListener('click', function () {

        if (answer2.innerText === quizArray[nextQuestion].answer) {
            displayAnswer.innerText = "CORRECT!!!"
            displayAnswer.style.color = "rgb(3, 154, 28)";
        } else {
            displayAnswer.innerText = "INCORRECT (TRY AGAIN)"
            displayAnswer.style.color = "red";
        }

    })

    answerThreeButton.addEventListener('click', function () {

        if (answer3.innerText === quizArray[nextQuestion].answer) {
            displayAnswer.innerText = "CORRECT!!!"
            displayAnswer.style.color = "rgb(3, 154, 28)";
        } else {
            displayAnswer.innerText = "INCORRECT (TRY AGAIN)"
            displayAnswer.style.color = "red";
        }

    })

    answerFourButton.addEventListener('click', function () {

        if (answer4.innerText === quizArray[nextQuestion].answer) {
            displayAnswer.innerText = "CORRECT!!!"
            displayAnswer.style.color = "rgb(3, 154, 28)";
        } else {
            displayAnswer.innerText = "INCORRECT (TRY AGAIN)"
            displayAnswer.style.color = "red";
        }

    })

    let nextQuestion = 0;

    nextButton.addEventListener('click', () => {
        event.preventDefault();
        const myFieldset = document.getElementById("myFieldset");
        myFieldset.querySelectorAll('input[type="radio"]').forEach((radio) => {
            radio.checked = false; 
        })
        displayAnswer.innerText = "";
        nextQuestion++;
        let nextOption = 0;
        question.innerHTML = quizArray[nextQuestion].question;
        answer1.innerHTML = quizArray[nextQuestion].options[nextOption];
        nextOption++
        answer2.innerHTML = quizArray[nextQuestion].options[nextOption];
        nextOption++
        answer3.innerHTML = quizArray[nextQuestion].options[nextOption];
        nextOption++
        answer4.innerHTML = quizArray[nextQuestion].options[nextOption];
        quizArray[nextQuestion].answer;

    })
});














