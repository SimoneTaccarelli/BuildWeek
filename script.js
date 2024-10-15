// Array di domande e risposte
const questions = [
    {
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      options: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processing Unit",
        "Central Processor Unit",
      ],
    },
    {
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      options: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Cascading Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      question: "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      options: ["Python", "C", "Jakarta", "Java"],
    },
  ];
  






  let button = document.getElementById ("risposteCorrette")
  

    function RispostaGiusta () {
        console.log (true); // Ritorna true in console
        return true;
      }

      function risposteSbagliate (){
        console.log (false)
        return false
      }


      function avanti (screenId) {
        // Rimuovi la prima schermata dal DOM
        const pagina1 = document.getElementById('pagina1');
        if (pagina1) {
            pagina1.remove();
        }

        // Mostra la seconda schermata
        document.getElementById(screenId).classList.add('active');
    }
