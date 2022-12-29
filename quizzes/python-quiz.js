var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the latest version of Python, as of 12-12-2022?",
            "options": [
                {
                    "a": "3.9",
                    "b": "2.7",
                    "c": "3.10",
                    "d": "3.11"
                }
            ],
            "answer": "3.10",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What is the previous major Python version?",
            "options": [
                {
                    "a": "3.x",
                    "b": "2.x",
                    "c": "1.x"
                }
            ],
            "answer": "2.x",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the maximum length of a Python identifier?",
            "options": [
                {
                    "a": "32",
                    "b": "16",
                    "c": "128",
                    "d": "No fixed length is specified."
                }
            ],
            "answer": "No fixed length is specified.",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "How do you insert COMMENTS in Python code?",
            "options": [
                {
                    "a": "# This is a comment",
                    "b": "//This is a comment"
                }
            ],
            "answer": "# This is a comment",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "How do you create a variable with the numeric value 5?",
            "options": [
                {
                    "a": "x = 5",
                    "b": "Both the other answers are correct",
                    "c": "x = int(5)"
                }
            ],
            "answer": "Both the other answers are correct",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What will be the output of the following code snippet? print(2**3 + (5 + 6)**(1 + 1))",
            "options": [
                {
                    "a": "129",
                    "b": "8",
                    "c": "121",
                    "d": "None of the above"
                }
            ],
            "answer": "129",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "How is a code block indicated in Python?",
            "options": [
                {
                    "a": "Brackets",
                    "b": "Indentation",
                    "c": "Key"
                }
            ],
            "answer": "Indentation",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which of the following statements are used in Exception Handling in Python?",
            "options": [
                {
                    "a": "try",
                    "b": "except",
                    "c": "finally",
                    "d": "All of the above"
                }
            ],
            "answer": "All of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which of the following types of loops are not supported in Python?",
            "options": [
                {
                    "a": "for",
                    "b": "while",
                    "c": "do-while",
                    "d": "None of the above"
                }
            ],
            "answer": "do-while",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which of the following functions converts date to corresponding time in Python?",
            "options": [
                {
                    "a": "strptime()",
                    "b": "strftime()",
                    "c": "Both A and B",
                    "d": "None of the above"
                }
            ],
            "answer": "strptime()",
            "score": 0,
            "status": ""
        },
    ]
}
var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');
            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }
    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
    }
    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        option = option.replace(/</g, "&lt;") //for <
        option = option.replace(/>/g, "&gt;") //for >
        option = option.replace(/"/g, "&quot;")
        if (option == quiz.JS[this.currentque].answer) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
        } else {
            quiz.JS[this.currentque].status = "wrong";
        }
    }
    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    }
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
        //var radio = $(this).find('input:radio');
        $(this).prop("checked", true);
        selectedopt = $(this).val();
    });
});
$('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
});
