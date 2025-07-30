const questions = [
  { q: "Tony has ____ 2 bottles of water yesterday.", options: ["have", "has", "had"], answer: "had" },
  { q: "I ____ to the gym every day.", options: ["go", "goes", "going"], answer: "go" },
  { q: "She ____ a beautiful dress.", options: ["wear", "wears", "wore"], answer: "wears" },
  { q: "They ____ playing football right now.", options: ["is", "are", "am"], answer: "are" },
  { q: "We ____ dinner at 7 pm yesterday.", options: ["eat", "ate", "eaten"], answer: "ate" },
  { q: "He ____ not like cold weather.", options: ["do", "does", "did"], answer: "does" },
  { q: "I ____ finished my homework.", options: ["have", "has", "had"], answer: "have" },
  { q: "She ____ been to London last year.", options: ["has", "have", "had"], answer: "has" },
  { q: "They ____ watching a movie now.", options: ["is", "are", "were"], answer: "are" },
  { q: "We ____ going to the park tomorrow.", options: ["is", "are", "am"], answer: "are" },
  { q: "He ____ a lot of books in his library.", options: ["have", "has", "had"], answer: "has" },
  { q: "I ____ never seen that movie before.", options: ["have", "has", "had"], answer: "have" },
  { q: "They ____ to the party last night.", options: ["go", "went", "gone"], answer: "went" },
  { q: "She ____ cooking dinner when I arrived.", options: ["was", "were", "is"], answer: "was" },
  { q: "We ____ play tennis every weekend.", options: ["do", "does", "did"], answer: "do" },
  { q: "He ____ his car cleaned yesterday.", options: ["got", "get", "gets"], answer: "got" },
  { q: "I ____ to music now.", options: ["listening", "listen", "am listening"], answer: "am listening" },
  { q: "They ____ in the garden right now.", options: ["is", "are", "were"], answer: "are" },
  { q: "She ____ a letter to her friend yesterday.", options: ["write", "wrote", "written"], answer: "wrote" },
  { q: "We ____ to buy new clothes last week.", options: ["need", "needed", "needs"], answer: "needed" },
  { q: "He ____ very tired after the game.", options: ["was", "were", "is"], answer: "was" },
  { q: "I ____ like coffee.", options: ["doesn't", "don't", "didn't"], answer: "don't" },
  { q: "They ____ the answer to the question.", options: ["know", "knows", "knew"], answer: "knew" },
  { q: "She ____ two brothers and one sister.", options: ["have", "has", "had"], answer: "has" },
  { q: "We ____ going to travel next month.", options: ["is", "are", "were"], answer: "are" },
  { q: "He ____ to school by bus every day.", options: ["go", "goes", "going"], answer: "goes" },
  { q: "I ____ my keys yesterday.", options: ["lost", "lose", "loses"], answer: "lost" },
  { q: "They ____ happy with their results.", options: ["is", "are", "was"], answer: "are" },
  { q: "She ____ the piano very well.", options: ["play", "plays", "played"], answer: "plays" },
  { q: "We ____ watching TV when the phone rang.", options: ["was", "were", "are"], answer: "were" },
  { q: "He ____ to fix the car last weekend.", options: ["try", "tried", "tries"], answer: "tried" },
  { q: "I ____ reading a book now.", options: ["am", "is", "are"], answer: "am" },
  { q: "They ____ going to the beach today.", options: ["is", "are", "was"], answer: "are" },
  { q: "She ____ a new job last month.", options: ["got", "get", "gets"], answer: "got" },
  { q: "We ____ our homework before dinner.", options: ["finish", "finished", "finishes"], answer: "finished" },
  { q: "He ____ not understand the question.", options: ["does", "do", "did"], answer: "does" },
  { q: "I ____ never eaten sushi.", options: ["have", "has", "had"], answer: "have" },
  { q: "They ____ late to the meeting yesterday.", options: ["were", "was", "are"], answer: "were" },
  { q: "She ____ a bike to school every day.", options: ["ride", "rides", "rode"], answer: "rides" },
  { q: "We ____ going out for dinner tonight.", options: ["is", "are", "am"], answer: "are" },
  { q: "He ____ his homework now.", options: ["do", "does", "is doing"], answer: "is doing" },
  { q: "I ____ seen that movie twice.", options: ["have", "has", "had"], answer: "have" },
  { q: "They ____ the new teacher.", options: ["like", "likes", "liked"], answer: "like" },
  { q: "She ____ going to the gym regularly.", options: ["is", "are", "was"], answer: "is" },
  { q: "We ____ eat breakfast every morning.", options: ["do", "does", "did"], answer: "do" },
  { q: "He ____ to call his parents yesterday.", options: ["forget", "forgot", "forgets"], answer: "forgot" },
  { q: "I ____ a cup of tea now.", options: ["drink", "drinking", "am drinking"], answer: "am drinking" },
  { q: "They ____ not happy about the news.", options: ["is", "are", "were"], answer: "are" },
  { q: "She ____ a letter to her grandma.", options: ["write", "wrote", "writes"], answer: "wrote" },
  { q: "We ____ plans for the weekend.", options: ["make", "made", "makes"], answer: "made" }
];

const grammarTips = [
  "Tip 1: Use 'have' for plural subjects and 'has' for singular subjects in present perfect tense.",
  "Tip 2: 'Was' is used with singular past tense, 'were' with plural.",
  "Tip 3: Use 'do' and 'does' for negative and questions in present simple.",
  "Tip 4: The verb 'to be' has forms: am, is, are for present; was, were for past.",
  "Tip 5: Modal verbs like can, should, must express ability or obligation."
];

const motivationTexts = [
  "Keep going! Every question gets you closer to mastering English!",
  "Believe in yourself. Practice makes perfect!",
  "Don't worry about mistakes; they help you learn!",
  "Grammar is the foundation of language. Keep building!",
  "Great job! You're improving with each question!"
];

const questionsPerPage = 10;
let currentPage = 0;
const totalPages = Math.ceil(questions.length / questionsPerPage);
const userAnswers = new Array(questions.length).fill(null);

const slides = document.getElementById('slides');
const tipsContent = document.getElementById('tips-content');
const motivationText = document.getElementById('motivation-text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const celebrationBox = document.getElementById('celebration');

function createConfetti(x, y) {
  const colors = ['#00ff00', '#00cc00', '#009900', '#00ff88', '#66ff66'];
  for(let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.left = `${x + (Math.random()*40 - 20)}px`;
    confetti.style.top = `${y + (Math.random()*40 - 20)}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
  }
}

function glitchEffect(element) {
  element.classList.add('glitch');
  setTimeout(() => element.classList.remove('glitch'), 600);
}

function renderPage(page) {
  slides.innerHTML = "";
  const start = page * questionsPerPage;
  const end = Math.min(start + questionsPerPage, questions.length);
  for(let i = start; i < end; i++) {
    const question = questions[i];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<strong>Q${i+1}:</strong> ${question.q.replace("____", "<u id='answer-"+i+"'>______</u>")}`;
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = option;
      btn.disabled = userAnswers[i] !== null;
      
      if(userAnswers[i] !== null) {
        if(option === question.answer) btn.classList.add('correct');
        if(option === userAnswers[i] && option !== question.answer) btn.classList.add('incorrect');
      }

      btn.onclick = () => {
        if(userAnswers[i] !== null) return;
        userAnswers[i] = option;
        if(option === question.answer) {
          btn.classList.add('correct');
          document.getElementById('answer-'+i).textContent = option;
          createConfetti(btn.getBoundingClientRect().left + btn.offsetWidth/2, btn.getBoundingClientRect().top);
          checkCompletion();
        } else {
          btn.classList.add('incorrect');
          glitchEffect(btn);
        }
        // Disable all options for this question
        Array.from(optionsDiv.children).forEach(b => b.disabled = true);
        // Show correct answer if user was wrong
        if(option !== question.answer) {
          const correctBtn = Array.from(optionsDiv.children).find(b => b.textContent === question.answer);
          if(correctBtn) correctBtn.classList.add('correct');
          document.getElementById('answer-'+i).textContent = question.answer;
        }
      };
      optionsDiv.appendChild(btn);
    });

    questionDiv.appendChild(optionsDiv);
    slides.appendChild(questionDiv);
  }

  tipsContent.textContent = grammarTips[page % grammarTips.length];
  motivationText.textContent = motivationTexts[page % motivationTexts.length];

  prevBtn.disabled = page === 0;
  nextBtn.disabled = page === totalPages - 1;

  celebrationBox.classList.add('hidden');
}

function checkCompletion() {
  if(userAnswers.every((ans, idx) => ans === questions[idx].answer)) {
    celebrationBox.classList.remove('hidden');
  }
}

nextBtn.onclick = () => {
  if(currentPage < totalPages - 1) {
    currentPage++;
    renderPage(currentPage);
  }
};

prevBtn.onclick = () => {
  if(currentPage > 0) {
    currentPage--;
    renderPage(currentPage);
  }
};

renderPage(currentPage);
