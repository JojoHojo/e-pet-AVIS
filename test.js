const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    { 
        question: "Πόσο χρόνο πρόκειτε να έχετε διαθέσιμο για το κατοικιδιο σας;;", //erwtisi
        choice1: "Αρκετό",    //apanthseis mc
        choice2: "Ελάχιστο",
        choice3: "Δεν ξέρω σίγουρα",
        answer: 1   //'swsth' apantish
    },
    /*
    { 
        question: "Είστε αλλεργικοί στα ζώα ;;",
        choice1: "Όχι",    
        choice2: "Μόνο στους σκύλους",
        choice3: "Μόνο στις γάτες",
        choice4: "Ναι ",
        answer: 4  
    },
    */
    { 
        question: "Πως θα περιγράφατε τον εαυτό σας ;;",
        choice1: "Εσωστρεφής / Κλειστός",    
        choice2: "Κοινωνικός / Εξωστρεφής",
        choice3: "Δεν ειμαι κατι συγκεκριμένο",
        answer: 2 
    },
    {
    question: "Τι μεγεθος θα προτειμούσατε για το κατοικιδιο σας ;;",
        choice1: "Μικρό",    
        choice2: "Μεγάλο",
        choice3: "Δεν θέλω κάτι συγκεκριμένο",
        answer: 2
    },
    /*
    {
        question: "Τι υψος θα προτειμούσατε για το κατοικιδιο σας ;;",
            choice1: "Ψηλό",    
            choice2: "Κοντό",
            choice3: "Δεν εχω κάποια προτείμηση",
            answer: 4
    },*/
    {
        question: "Μπορείς να ζησεις με καποιο θορυβοδες κατοικιδιο ;",
            choice1: "Δεν ξερω",    
            choice2: "Όχι, δεν νομίζω",
            choice3: "Ναι",
            choice4: "Ανάλογα",
            answer: 3
    },
    {
        question: "Ειστε σε θεση να αλληλεπιδρατε με το ζωο σας καθε μερα;",
            choice1: "Όχι κάθε μέρα ",    
            choice2: "Ναι φυσικά",
            choice3: "Ετσι και ετσι, ανάλογα τη ημερα",
            choice4: "Δεν ξέρω",
            answer: 2
    }, /*
    {
        question: "Τι θα θελατε να κανετε με το κατοικιδιο σας πιο πολυ ;;",
            choice1: "Να του μαθω κολπα / εκπαιδευσω",    
            choice2: "Να παίζω μαζι του",
            choice3: "Μονο Παρέα / Συντροφιά",
            choice4: "Όλα",
            answer: 4
    },*/
    {
        question: "Γιατί θέλεις ενα κατοικίδιο ;",
            choice1: "Για προστασια / βοήθεια κάποιου προβληματος",    
            choice2: "Παρεα / συντροφια",
            choice3: "Έτσι θα ηθελα απλα",
            answer: 1
    },
    {
        question: "Λειπεις συχνα για ωρες απο το σπίτι ;",
            choice1: "Εξαρτατε την ημερα",    
            choice2: "Ναι αρκετές ωρες",
            choice3: "Οχι ",
            answer: 3
    },
    {
        question: "Πόσο χώρο έχεις για το κατοικιδιο σου ;;",
            choice1: "Μικρο / Λίγο",    
            choice2: "Αρκετό",
            choice3: "Ετσι και ετσι",
            choice4: "Σχεδόν Καθόλου",
            answer: 2
    },
    {
      question: "Πόσο θα σας ενοχλούσε αν γυρνούσατε σπίτι και βλέπατε κάποια πραγματα σας χαλασμένα;",
          choice1: "Πολύ",    
          choice2: "Καθόλου σιγά / Ακόμη και να με πείραζε δεν θα θύμωνα με το ζωάκι μου! ",
          choice3: "Ανάλογα, πάντως γενικά δεν μαρέσει αυτό! ",
          choice4: "Δεν ξέρω",
          answer: 2
  },
  {
    question: "Θα θέλατε κάποιο προστατευτικό κατοικίδιο;",
        choice1: "Μπα ",    
        choice2: "Δεν ξέρω.. δεν νομίζω ",
        choice3: "Ναι!",
        answer: 3
  },
  {
    question: "Θα θέλατε το κατοικιδιο σας να έχει κάποια προσωπικότητα / χαρητομενια ;",
        choice1: "Ναι πολύ ",    
        choice2: "Όχι θα με κούραζε",
        choice3: "Δεν είναι επικύνδιο ;!",
        answer: 1
  },
  {
    question: "Θα θέλατε το κατοικιδιο σας να είναι με προσωπικότητα πολύ διακτριτικη ;",
        choice1: "Δεν ξέρω",    
        choice2: "Ναι ακριβώς!  ",
        choice3: "Γενικά όχι δεν έχω θέμα και να μη είναι ",
        answer: 3
  },
  {
    question: "Θα θέλατε ένα φίλο για αγκαλιές;",
        choice1: "Ναι",    
        choice2: "Όχι",
        choice3: "Ουτε καν, συχαινομαι ",
        choice4: "Δεν ξέρω",
        answer: 1
  },
  {
    question: "Θα πήγενες βόλτα με το ζωάκι σου;", 
        choice1: "Όχι",
        choice2: "Ναι",   
        choice3: "Δεν ξέρω",
        answer: 2
  },
  {
    question: "Κατοικιδιο και μπάνιο; Πως σας φαίνεται", 
        choice1: "Όχι βαριεμαι / Δεν θέλω / Δεν χρειάζεται",
        choice2: "Ναι φυσικά! ",   
        choice3: "Εξαρταται",
        answer: 2
  },
  {
    question: "Κατοικιδιο υπερβολικά δραστηριο και ενεργητικο", 
        choice1: "Ναι ναι ναι ",
        choice2: "απαπαπα ",   
        answer: 1
  },
  {
    question: "Θέλετε ένα μικρό ζώο ή ένα που μπορεί ενδεχομένως να γίνει μεγαλύτερο, αναλόγος ;", 
        choice1: "Όχι μικρό είναι οκ  ",
        choice2: "Δεν έχω θέμα ",   
        answer: 2
  },
  {
    question: "Περιπέτειες με το κατοικιδιο σας, πως θα σας φαινοταν ;", 
        choice1: "Ναι γιατι όχι / Αμα βολέψει βεβαίος  ",
        choice2: "Δεν ξερω / Δεν νομίζω ",
        choice3: "Μπα το θέλω σπιτι ",
        answer: 2
  }

    

  
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    if(score >= 20)
        return window.location.assign("./dog.html");
    else 
        return window.location.assign("./cat.html");
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();