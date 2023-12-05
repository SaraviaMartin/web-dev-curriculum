const words = ["hello", "world", "openai", "typing", "challenge", "game", "keyboard", "javascript", "creative", "coding"];
let score = 0;
let currentWord;

// Initialize game
function init() {
  showWord();
  // Start matching on word input
  document.getElementById("wordInput").addEventListener("input", matchWord);
}

// Show random word
function showWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randIndex];
  document.getElementById("word").innerText = currentWord;
}

// Match typed word with currentWord
function matchWord() {
  const wordInput = document.getElementById("wordInput").value;
  if (wordInput === currentWord) {
    score++;
    document.getElementById("scoreValue").innerText = score;
    document.getElementById("wordInput").value = "";
    showWord();
  }
}

// Start game
init();
