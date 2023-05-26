
/*
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
//const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
*/


let questions = [
    { //1erwtisi
        question: "Πόσο χρόνο πρόκειτε να έχετε διαθέσιμο για το κατοικιδιο σας;;", //erwtisi
        choice1: "Πάρα πολύ",    //apanthseis mc
        choice2: "Ελάχιστο",
        choice3: "Μερικό",
        choice4: "Όσο χρειάζεται",
        answer: 1   //swsth apantish -> ch1 
    },
    { 
        question: "Είστε αλλεργικοί στα ζώα ;;",
        choice1: "Όχι σε κανένα",    
        choice2: "Μόνο στους σκύλους",
        choice3: "Μόνο στις γάτες",
        choice4: "Ναι ",
        answer: 3  
    },
    { 
        question: "Πως θα περιγράφατε τον εαυτό σας ;;",
        choice1: "Εσωστρεφής",    
        choice2: "Κοινωνικός / Εξωστρεφής",
        choice3: "Αλλάζω πάντα, δεν ειμαι κατι συγκεκριμένο",
        choice4: "Ψυχαγωγικος",
        answer: 4
    },
    {
    question: "Τι μεγεθος θα προτειμούσατε για το κατοικιδιο σας ;;",
        choice1: "Πολύ μικρό",    
        choice2: "Τεράστιο",
        choice3: "Δεν εχω κάποια προτείμηση",
        choice4: "Μεσαιο",
        answer: 4
    },
    {
        question: "Τι υψος θα προτειμούσατε για το κατοικιδιο σας ;;",
            choice1: "Ψηλό",    
            choice2: "Κοντό",
            choice3: "Δεν εχω κάποια προτείμηση",
            choice4: "Κανονικο / Νορμαλ",
            answer: 4
    },
    {
        question: "Μπορείς να ζησεις με καποιο θορυβοδες κατοικιδιο ;",
            choice1: "Δεν ξερω",    
            choice2: "Ναι",
            choice3: "Όχι, δεν νομίζω",
            choice4: "Ανάλογα πόσο συχνά είναι θορυβόδες & πόσο",
            answer: 4
    },
    {
        question: "Ειστε σε θεση να αλληλεπιδρατε με το ζωο σας καθε μερα;;",
            choice1: "Όχι",    
            choice2: "Ναι φυσικά",
            choice3: "Ετσι και ετσι, ανάλογα τη ημερα",
            choice4: "Πολύ λίγο",
            answer: 4
    },
    {
        question: "Τι θα θελατε να κανετε με το κατοικιδιο σας πιο πολυ ;;",
            choice1: "Να του μαθω κολπα / εκπαιδευσω",    
            choice2: "Να παίζω μαζι του",
            choice3: "Μονο Παρέα / Συντροφιά",
            choice4: "Όλα",
            answer: 4
    },
    {
        question: "Γιατί θέλεις ενα κατοικίδιο ;;",
            choice1: "Για φυλακα / προστασια",    
            choice2: "Παρεα / συντροφια",
            choice3: "Έτσι θα ηθελα απλα",
            choice4: "Για βοήθεια λόγο κάποιου προβλήματος",
            answer: 4
    },
    {
        question: "Λειπεις συχνα για ωρες απο το σπίτι ;;",
            choice1: "Εξαρτατε την ημερα",    
            choice2: "Οχι ",
            choice3: "Ναι αρκετές ωρες",
            choice4: "Ετσι και ετσι ",
            answer: 4
    },
    {
        question: "Πόσο χώρο έχεις για το κατοικιδιο σου ;;",
            choice1: "Μικρο",    
            choice2: "Πάρα πολύ",
            choice3: "Ετσι και ετσι",
            choice4: "Καθόλου",
            answer: 4
    },
    {
        question: "Σας αρέσουν τα κλασσικα κατοικιδια (σκύλος / γάτα) ή τα λίγο πιο διαφορετικά ;;",
            choice1: "Τα κλασσικά",    
            choice2: "Τα διαφορετικά",
            choice3: "Δεν έχω θέμα",
            choice4: "Ανάλογα όχι κατι πολύ εξτριμ",
            answer: 4
        },




];


/*
fetch("questions.json").then(res => {
    console.log(res);
})



//CONSTANTS
const COREECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

        if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
            //go to the end page
            return window.location.assign("./end.html");
        }
    questionCounter++;
    progressText.innerText = 'Question' + questionCounter + "/" + MAX_QUESTIONS;  //emf -> to 1/3 klp
                                //or ... = '${questionCounter}/${MAX_QUESTIONS}';  its the same 
    
    //Update the progress bar
    // progressBarFull.style.width = '${(questionCounter / MAX_QUESTIONS) * 100}%';

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //pianw tis epiloges 
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1); //

    acceptingAnswers = true;
};

//Allagh erwthewn kai epilogh apanthsewn.. 
choices.forEach(choice => {
    choice.addEventListener('click',e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswers = selectedChoice.dataset['number'];

        const classToApply = selectedAnswers == currentQuestion.answer ? "correct" : "incorrect";


        if(classToApply == 'correct'){
            incrementScore(CORRECT_BONUS);
        }

        getNewQuestion();
    });

})

//oso afora to score: 

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};


startGame();








*/