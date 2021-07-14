let ques = document.querySelector('body');
let progressQuiz = document.querySelector('.Quiz-app div.progress-quiz');

let bullets = document.querySelector('.Quiz-app .progress-quiz .bullets');
let questionsCounter = document.querySelector('.quiz-title .counter');
let answerArea = document.querySelector('.Quiz-app .answerArea');
let questionArea = document.querySelector('.Quiz-app .questionArea');
let submitBtn = document.querySelector('.Quiz-app .submitBtn');

let results = document.querySelector('.Quiz-app .results');

let timer = document.querySelector('.Quiz-app span.timer');

let cate = document.querySelector('.Quiz-app div span.cate');

let rightAnswers = 0; // to counter the right results
let counterDown = 0;
let username;

do {                                                     ////////////////////////// Enter User Name;
    username = window.prompt("Enter User Name : ");

    if (username === null)
        alert("You Should Enter Your Username to do this quiz");

} while (username === null || username === "" || username === undefined)

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://mocki.io/v1/032f7569-1fb1-4c2b-8958-71f54d3ef7b8');
xhr.send();

xhr.addEventListener('readystatechange', function () {

    let currentQuestion = 0;

    if (xhr.readyState == 4 && xhr.status == 200) {

        let questions = JSON.parse(xhr.response);

        getQuestion(questions, currentQuestion);

        createSpans(questions);

        countDown(currentQuestion, questions);

        submitBtn.addEventListener('click', function () {

            checkAnswer(questions, currentQuestion);
            currentQuestion++;
            bulletMarker(questions, currentQuestion); // to mark the spans

            clearInterval(counterDown);
            countDown(currentQuestion, questions);
        })
    }

})

function bulletMarker(questions, currentQuestion) {

    if (currentQuestion >= questions.length) {
        Results(questions);
        results.style.display = "block";
        submitBtn.remove();
        bullets.remove();
        progressQuiz.remove();
        answerArea.remove();
        questionArea.remove();
    }
    else {
        getQuestion(questions, currentQuestion);
        bullets.children[currentQuestion].classList.add('on');
    }
}

function getQuestion(questions, i) {

    let copya = ``, index = 0;

    cate.innerHTML = questions[i].category;
    questionArea.innerHTML = `<h3>${questions[i].question}</h3>`

    copya = ` 
                    <div class="input-quiz">
                        <input type="radio" name="quizAnswers" value="answer_1" data-index="0" id="answer1" checked >
                        <label for="answer1">${questions[i].answers[index++]}</label>
                    </div>

                    <div class="input-quiz">
                        <input type="radio" name="quizAnswers" value="answer_2" data-index="1" id="answer2" >
                        <label for="answer2">${questions[i].answers[index++]}</label >
                    </div>

                    <div class="input-quiz">
                        <input type="radio" name="quizAnswers" value="answer_3"  data-index="2" id="answer3" >
                        <label for="answer3">${questions[i].answers[index++]}</label>
                    </div>

                    <div class="input-quiz">
                        <input type="radio" name="quizAnswers" value="answer_4" data-index="3" id="answer4" >
                        <label for="answer4">${questions[i].answers[index]}</label>
                    </div> 
                `
    answerArea.innerHTML = copya;
}


function createSpans(questions) {

    questionsCounter.innerHTML = questions.length;

    for (let i = 0; i < questions.length; i++) {
        let elem = document.createElement('span');
        bullets.appendChild(elem);

        if (i == 0)
            elem.classList.add('on');
    }
}

function Results(questions) {

    if (rightAnswers <= questions.length / 2)
        results.innerHTML = `<span>${username}</span> Your performance is <span class="bad">Bad</span> because you solve <span>${rightAnswers}</span> from <span>${questions.length}</span>`
    else if (rightAnswers > questions.length / 2 && rightAnswers < questions.length - 1)
        results.innerHTML = `<span>${username}</span> Your performance is <span class="good">Good</span> because you solve <span>${rightAnswers}</span> from <span>${questions.length}</span>`
    else
        results.innerHTML = `<span>${username}</span> Your performance is <span class="perfect">Perfect</span> because you solve <span>${rightAnswers}</span> from <span>${questions.length}</span>`
}

function checkAnswer(questions, currentQuestion) {

    let inputQuiz = document.querySelectorAll('input[data-index]');

    for (let i = 0; i < inputQuiz.length; i++) {
        n = inputQuiz[i].getAttribute('data-index');

        if (inputQuiz[i].checked) {

            if (questions[currentQuestion].right_answer == questions[currentQuestion].answers[n])
                rightAnswers++;

            console.log(rightAnswers);
            break; // to do out from the loop
        }
    }
}

function countDown(currentQuestion, questions) {
    let duration = 20;

    if (currentQuestion < questions.length) {

        counterDown = setInterval(() => {
            if (duration < 10)
                duration = "0" + duration;

            timer.innerHTML = `0 : ${duration}`

            if (--duration < 0) {
                clearInterval(counterDown);
                submitBtn.click();
            }

        }, 1000);
    }

}