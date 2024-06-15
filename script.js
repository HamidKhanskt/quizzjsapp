const quizData = [ 
    {
        question: "Who founded Pakistan Peoples Party?",
        a: "Nawaz Sharif",
        b: "Imran Khan",
        c: "Zulfiqar Ali Bhutto",
        d: "Quaid-e-Azam",
        correct: "c"
    },
    {
        question: "Who is the current Prime Minister?",
        a: "Imran Khan",
        b: "Nawaz Sharif",
        c: "Maryam Nawaz",
        d: "Shehbaz Sharif",
        correct: "d"
    },
    {
        question: "Which country has the best relations with Pakistan?",
        a: "USA",
        b: "China",
        c: "Qatar",
        d: "France",
        correct: "b"
    },
    {
        question: "Who is Quaid-e-Azam?",
        a: "Founder of Pakistan",
        b: "Army General",
        c: "Lawyer",
        d: "Engineer",
        correct: "a"
    },
    {
        question: "What is the capital of Pakistan?",
        a: "Islamabad",
        b: "Lahore",
        c: "Karachi",
        d: "Peshawar",
        correct: "a"
    },
    {
        question: "Who founded PTI?",
        a: "Imran Khan",
        b: "Bilawal Bhutto",
        c: "Chahat Fateh Ali Khan",
        d: "Babar Azam",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;
let timer;
const timePerQuestion = 15; // 15 seconds per question

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const submitBtn = document.getElementById('submit');
const timerEl = document.getElementById('time');

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;

    resetTimer();
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function resetTimer() {
    clearInterval(timer);
    let timeLeft = timePerQuestion;
    timerEl.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            moveToNextQuestion();
        }
    }, 1000);
}

function moveToNextQuestion() {
    const answer = getSelected();

    if (answer && answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz').innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button class="reload-button" onclick="location.reload()">Reload</button>
        `;
    }
}

submitBtn.addEventListener('click', () => {
    clearInterval(timer);
    moveToNextQuestion();
});

loadQuiz();

