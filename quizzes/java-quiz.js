var quiz = {
    "JS": [
        {
            "id": 1,
            "question": " The number of primitive data types in Java are?",
            "options": [
                {
                    "a": "6",
                    "b": "7",
                    "c": "8",
                    "d": "9"
                }
            ],
            "answer": "8",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "How do you insert COMMENTS in Java code?",
            "options": [
                {
                    "a": "# This is a comment",
                    "b": "// This is a comment",
                    "c": "/* This is a comment"
                }
            ],
            "answer": "// This is a comment",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which data type is used to create a variable that should store text?",
            "options": [
                {
                    "a": "TXT",
                    "b": "String",
                    "c": "string",
                    "d": "myString"
                }
            ],
            "answer": "String",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Java is short for JavaScript",
            "options": [
                {
                    "a": "True",
                    "b": "False"
                }
            ],
            "answer": "False",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "How do you create a variable with the floating number 2.8?",
            "options": [
                {
                    "a": "x = 2.8f",
                    "b": "float x = 2.8f",
                    "c": "byte x = 2.8f",
                    "d": "int x = 2.8f"
                }
            ],
            "answer": "float x = 2.8f",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Automatic type conversion is possible in which of the possible cases?",
            "options": [
                {
                    "a": "Byte to int",
                    "b": "Int to long",
                    "c": "Long to int",
                    "d": "Short to int"
                }
            ],
            "answer": "Int to long",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "When an array is passed to a method, what does the method receive?",
            "options": [
                {
                    "a": "The reference of the array",
                    "b": "A copy of the array",
                    "c": "Length of the array",
                    "d": "Copy of first element"
                }
            ],
            "answer": "The reference of the array",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Select the valid statement to declare and initialize an array.",
            "options": [
                {
                    "a": "int[] A = {}",
                    "b": "int[] A = {1, 2, 3}",
                    "c": "int[] A = (1, 2, 3)",
                    "d": "int[][] A = {1, 2, 3}"
                }
            ],
            "answer": "int[] A = {1, 2, 3}",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Arrays in java are-",
            "options": [
                {
                    "a": "Object references",
                    "b": "Objects",
                    "c": "Primitive data type",
                    "d": "None"
                }
            ],
            "answer": "Objects",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "When is the object created with new keyword?",
            "options": [
                {
                    "a": "At runtime",
                    "b": "At compile time",
                    "c": "Depends on the code",
                    "d": "None"
                }
            ],
            "answer": "At runtime",
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
