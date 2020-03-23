var myQuestions = [{
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        //for every option of each question add a radio button
        for (var i = 0; i < questions.length; i++) {
            answers = [];

            for (opt in questions[i].answers) {
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + opt + '">' +
                    opt + ': ' +
                    questions[i].answers[opt] + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    //on submit show result
    // For each question, find the selected answer
    // If the answer is correct, respond accordingly
    // If the answer is wrong, respond accordingly
    // Show the number of correct answers out of the total
    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');

        //get user answer
        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            //IF USER ANSWER IS CORRECT
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }
            //IF USER ANSWER IS WRONG
            else {
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}