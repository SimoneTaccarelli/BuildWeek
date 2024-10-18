const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


// contatore per tenere traccia della domanda corrente
let currentQuestionIndex = 0;
let score = 0; //variabile per accumulare il punteggio



function cambiaSchermata() {
  //nascondere gli elementi che non ci servono
  document.getElementById("welcome-section").style.display = "none";

  // mostrare la sezione del quiz
  document.getElementById("quiz-dinamic-section").style.display = "block";

  mostraDomanda();
}

// function per mostrare domanda e risposte
function mostraDomanda() {
  const domanda = document.getElementById("questions-title");
  const buttons = document.getElementsByClassName("questions-button");

  // controllare se ci sono altre domande disponibili
  if (currentQuestionIndex < questions.length) {
    // mostrare la domanda corrente
    let currentQuestion = questions.sort(() => Math.random() - 0.5)[currentQuestionIndex];
    domanda.textContent = currentQuestion.question;

    // mescolare le varie risposte 
    let allAnswers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
    allAnswers.sort(() => Math.random() - 0.5);  // mescolare le risposte


    // numero corretto di pulsanti e assegnazione delle risposte
    if (allAnswers.length === 2) {
      // nascondere i primi due pulsanti e mostrare solo due

      document.getElementById("column-div-2").style.display = "none";


    } else {

      document.getElementById("column-div-2").style.display = "block";
    }
    document.getElementById("column-div-1").style.display = "block";
    // aggiornare tutti i button con le risposte
    for (let i = 0; i < allAnswers.length; i++) {
      buttons[i].style.display = "block";
      buttons[i].textContent = allAnswers[i];  // inietta una risposta per ogni pulsante
      buttons[i].onclick = () => checkAnswer(allAnswers[i], currentQuestion.correct_answer);
    }
    // incremento per l'indice per della prossima domanda
    currentQuestionIndex++;
  } else {
    // al termine del quiz mostrare un messaggio finale
    domanda.textContent = "test terminato";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
    }


    // mostrare il risultato finale
    const risultato = document.getElementById("risultato");
    risultato.textContent = "Hai risposto correttamente a" + " " + score + " domande"; //mostra il risultato della somma delle domande

  }

}

// controllo della risposta selezionata
function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score += 1;
  } else {
    score += 0;

  }


  // Mostra la prossima domanda
  mostraDomanda();
}


















