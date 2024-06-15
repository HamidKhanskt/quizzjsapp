const quizData = [ 
    {
        question: "who founded pakistan peoples party",
        a: "nawaz sharif",
        b: "imran khan",
        c: "zulfiqar ali bhutto",
        d: "quaid e azam",
        correct: "c"
    },
    {
        question: " current prime minister",
        a: "imran khan",
        b: "nawaz shareef",
        c: "maryam nawaz",
        d: "shebaz shareef",
        correct: "d"
    },
    {
        question: "which country have best relations with pakistan",
        a: "usa",
        b: "china",
        c: "qatar",
        d: "france",
        correct: "b"
    },
    {
        question: "who is quaid e azam",
        a: "founder of pakistan",
        b: "army general",
        c: "lawyer",
        d: "engineer",
        correct: "a"
    },
    {
        question: "what is capital of pakistan",
        a: "islamabad",
        b: "lahore",
        c: "karachi",
        d: "peshawer",
        correct: "a"
    },
    {
        question: "who founded pti",
        a: "imran khan",
        b: "bilawal bhutto",
        c: "chahat fate ali khan",
        d: "babar azam",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const submitBtn = document.getElementById('submit');

// Load the current quiz question
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;
}

// Deselect previously selected answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Get the selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Load the first question
loadQuiz();

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Show results
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert('Please select an answer before submitting!');
    }
});
