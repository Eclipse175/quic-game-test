const Question = document.getElementById('Question');
const Answer = document.getElementById('Answer');
const submitButton = document.getElementById('Submit');
const startButton = document.getElementById('start-quiz');

const Questions = [
    "How many members does BTS have?",
    "Where is the Great wall located?",
    "Which country speaks Dutch?",
    "Who speaks Urdu?",
    "Where is the leaning tower of Pisa?"
]

// const valuesOfObject = Object.values(Questions);

const startQuiz = () => {
    function renderQuestions ()  {
        const QuestionRandom = Questions[Math.floor(Math.random() * Questions.length)];
        Question.innerHTML = QuestionRandom;

        
    }
    renderQuestions();

}

const submitAnswer = () => {
    console.log('Answer submitted!');
}



