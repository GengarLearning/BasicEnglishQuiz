const questions = [
  { text: "She ____ to the store every Sunday.", correct: "goes", options: ["go", "went", "goes"] },
  { text: "They ____ dinner when I arrived.", correct: "were eating", options: ["eat", "were eating", "eats"] },
  { text: "He ____ his keys yesterday.", correct: "lost", options: ["loses", "lost", "has lost"] },
  { text: "We ____ finished our homework.", correct: "have", options: ["have", "has", "had"] },
  { text: "I ____ a book at the moment.", correct: "am reading", options: ["read", "am reading", "was reading"] },
  { text: "Tom ____ in Paris last year.", correct: "lived", options: ["lives", "living", "lived"] },
  { text: "She ____ TV now.", correct: "is watching", options: ["watched", "watches", "is watching"] },
  { text: "They ____ gone to the party.", correct: "have", options: ["has", "have", "had"] },
  { text: "He ____ breakfast at 7am.", correct: "has", options: ["have", "has", "had"] },
  { text: "The movie ____ at 8pm.", correct: "starts", options: ["start", "starts", "starting"] },

  { text: "We ____ to school by bus.", correct: "go", options: ["go", "goes", "going"] },
  { text: "She ____ English very well.", correct: "speaks", options: ["speak", "speaks", "speaking"] },
  { text: "He ____ up early every day.", correct: "gets", options: ["get", "got", "gets"] },
  { text: "I ____ coffee in the morning.", correct: "drink", options: ["drink", "drank", "drinks"] },
  { text: "They ____ a new car.", correct: "bought", options: ["buy", "bought", "buys"] },
  { text: "The sun ____ in the east.", correct: "rises", options: ["rise", "rose", "rises"] },
  { text: "We ____ happy yesterday.", correct: "were", options: ["was", "is", "were"] },
  { text: "He ____ soccer every weekend.", correct: "plays", options: ["play", "played", "plays"] },
  { text: "I ____ the answer.", correct: "know", options: ["knew", "know", "known"] },
  { text: "She ____ the door.", correct: "closed", options: ["close", "closed", "closes"] },

  { text: "They ____ their homework.", correct: "finished", options: ["finish", "finishes", "finished"] },
  { text: "He ____ to the radio.", correct: "listens", options: ["listen", "listens", "listened"] },
  { text: "The birds ____ away.", correct: "flew", options: ["fly", "flew", "flown"] },
  { text: "I ____ a beautiful song.", correct: "heard", options: ["hear", "hears", "heard"] },
  { text: "She ____ her bike.", correct: "rode", options: ["rides", "rode", "ride"] },
  { text: "The kids ____ in the park.", correct: "are playing", options: ["play", "played", "are playing"] },
  { text: "We ____ to music now.", correct: "are listening", options: ["listened", "listen", "are listening"] },
  { text: "He ____ water every day.", correct: "drinks", options: ["drink", "drank", "drinks"] },
  { text: "The baby ____ last night.", correct: "cried", options: ["cry", "cries", "cried"] },
  { text: "I ____ the cake myself.", correct: "made", options: ["make", "made", "makes"] },

  { text: "She ____ a beautiful dress.", correct: "wore", options: ["wear", "wore", "wears"] },
  { text: "We ____ in this house.", correct: "live", options: ["lives", "lived", "live"] },
  { text: "He ____ a letter.", correct: "wrote", options: ["writes", "wrote", "write"] },
  { text: "The dog ____ loudly.", correct: "barked", options: ["bark", "barks", "barked"] },
  { text: "They ____ a game last night.", correct: "won", options: ["win", "won", "wins"] },
  { text: "I ____ tired.", correct: "am", options: ["am", "is", "are"] },
  { text: "The train ____ late.", correct: "was", options: ["were", "is", "was"] },
  { text: "She ____ the phone.", correct: "answered", options: ["answers", "answered", "answering"] },
  { text: "He ____ loudly.", correct: "sings", options: ["sings", "sing", "sang"] },
  { text: "We ____ a holiday soon.", correct: "will have", options: ["has", "had", "will have"] },

  { text: "They ____ early.", correct: "arrived", options: ["arrive", "arrived", "arriving"] },
  { text: "I ____ to the zoo.", correct: "went", options: ["go", "went", "goes"] },
  { text: "She ____ me a story.", correct: "told", options: ["tell", "told", "tells"] },
  { text: "He ____ me every day.", correct: "calls", options: ["call", "calls", "called"] },
  { text: "We ____ a picture.", correct: "drew", options: ["draw", "drew", "drawn"] },
  { text: "The baby ____ a nap.", correct: "took", options: ["take", "takes", "took"] },
  { text: "I ____ a mistake.", correct: "made", options: ["make", "made", "makes"] },
  { text: "She ____ to music.", correct: "listens", options: ["listen", "listens", "listened"] },
  { text: "They ____ the room clean.", correct: "kept", options: ["keep", "kept", "keeping"] },
  { text: "I ____ him yesterday.", correct: "saw", options: ["see", "seen", "saw"] }
];

const slidesContainer = document.getElementById('slides');
const celebration = document.getElementById('celebration');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentSlide = 0;
let totalCorrect = 0;
let answered = Array(questions.length).fill(false);
let totalSlides = Math.ceil(questions.length / 10);

function buildSlides() {
  for (let s = 0; s < totalSlides; s++) {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const questionsForSlide = questions.slice(s * 10, s * 10 + 10);

    questionsForSlide.forEach((q, i) => {
      const qIndex = s * 10 + i;
      const block = document.createElement('div');
      block.className = 'question-block';

      const question = document.createElement('div');
      question.className = 'question-text';
      question.innerHTML = `${qIndex + 1}. ${q.text.replace("____", "<span class='blank'>_____</span>")}`;
      block.appendChild(question);

      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';

      q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;

        button.onclick = () => {
          const isCorrect = option === q.correct;
          question.innerHTML = `${qIndex + 1}. ${q.text.replace("____", `<strong>${option}</strong>`)}`;
          [...optionsDiv.children].forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === q.correct) btn.classList.add('correct');
            else if (btn === button && !isCorrect) btn.classList.add('incorrect');
          });

          if (!answered[qIndex]) {
            answered[qIndex] = true;
            if (isCorrect) totalCorrect++;
          }

          if (answered.every(Boolean) && totalCorrect === questions.length) {
            celebration.classList.remove('hidden');
          }
        };

        optionsDiv.appendChild(button);
      });

      block.appendChild(optionsDiv);
      slide.appendChild(block);
    });

    slidesContainer.appendChild(slide);
  }

  updateSlideVisibility();
}

function updateSlideVisibility() {
  const allSlides = document.querySelectorAll('.slide');
  allSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) {
      slide.classList.add('active');
    }
  });

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

nextBtn.onclick = () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlideVisibility();
  }
};

prevBtn.onclick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlideVisibility();
  }
};

buildSlides();
