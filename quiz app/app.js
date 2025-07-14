
const questions = [
  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Alexander Graham Bell", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Thomas Edison", correct: true },
      { text: "Isaac Newton", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Granite", correct: false }
    ]
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    answers: [
      { text: "Stem", correct: false },
      { text: "Leaves", correct: true },
      { text: "Roots", correct: false },
      { text: "Flowers", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "50°C", correct: false },
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false }
    ]
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    answers: [
      { text: "Horse", correct: false },
      { text: "Camel", correct: true },
      { text: "Elephant", correct: false },
      { text: "Donkey", correct: false }
    ]
  }
];

const queselt= document.getElementById("question");
const anselt= document.getElementById("answer-buttons");
const next= document.getElementById("nxt-btn");

let currquesindex=0;
let score=0;

function start(){
    currquesindex=0;
    score=0;
    next.innerHTML='Next';
    showQuestions();
}

function showQuestions() {
    resetState();
    let curr=questions[currquesindex];
    let quesnumber = currquesindex+1;
    queselt.innerHTML=" ";
    queselt.innerHTML = quesnumber+". "+curr.question ;

    curr.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
        anselt.appendChild(button);   
        if(ans.correct){
            button.dataset.correct=ans.correct;
        } 
        button.addEventListener('click',selectans);  
    });

}

function resetState() {
    next.style.display= "none";
    while(anselt.firstChild){
        anselt.removeChild(anselt.firstChild);
    }
}

function selectans(e){
    const selectedbtn = e.target;
    const iscrct = selectedbtn.dataset.correct === "true";
    if(iscrct){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(anselt.children).forEach ( button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next.style.display="block";
}
function handlenextbutton(){
    currquesindex++;
    if(currquesindex< questions.length){
        showQuestions();

    }else{
        showscore();
    }

}

function showscore() {
    resetState();
    queselt.innerHTML = `Your scored ${score} out of ${questions.length} !`;
    next.innerHTML = "Play Again";
    next.style.display= block;
}
next.addEventListener('click',() => {
    if(currquesindex< questions.length){
        handlenextbutton();
    }else{
        start();
    }
})
start();