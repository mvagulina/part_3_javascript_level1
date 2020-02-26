var questions = [
    {
        question: "Как правильно продолжить припев детской песни: 'Тили-тили...'?",
        answers: ["хали-гали", "трали-вали", "жили-были", "ели-пили"],
        correct: 2
    },
    {
        question: "Что понадобится, чтобы взрыхлить землю на грядке?",
        answers: ["тяпка", "бабка", "скобка", "тряпка"],
        correct: 1
    },
    {
        question: "Как называется экзотическое животное из Южной Америки?",
        answers: ["пчеложор", "термитоглот", "муравьед", "комаролов"],
        correct: 3
    },
    {
        question: "Во что превращается гусеница?",
        answers: ["в мячик", "в пирамидку", "в машинку", "в куколку"],
        correct: 4
    }
     
]

var win = true;

for (item of questions) {
    var choice;
    do {
        var choice = +prompt(item.question + "\n" + "1 - " + item.answers[0] + "\n2 - " 
                         + item.answers[1] + "\n3 - " + item.answers[2] + "\n4 - " + item.answers[3]);
    }
    while(!isAnswer(choice));
    
    if (choice != item.correct) {
        alert("Ответ неверный. Вы проиграли.");
        win = false;
        break;
    }
}

if (win)
    alert("Поздравляю! Вы ответили на все вопросы.");


function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}