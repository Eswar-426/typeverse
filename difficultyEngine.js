/* ================== DIFFICULTY ENGINE ================== */

/*
Parameters we can control per difficulty:
- text length
- vocabulary complexity
- punctuation
- numbers
*/

const DIFFICULTY_TEXTS = {
  Easy: [
    "cat dog sun sky tree",
    "typing is fun",
    "slow and steady wins"
  ],

  Normal: [
    "Consistency beats intensity.",
    "Code is poetry written for machines.",
    "Accuracy builds speed over time."
  ],

  Hard: [
    "Debugging code is like being a detective in a crime movie.",
    "The quick brown fox jumps over the lazy dog.",
    "Programming requires logic, patience, and practice."
  ],

  Extreme: [
    "Complexity emerges when abstraction meets real-world constraints.",
    "Typing symbols like !@#$%^&*() tests true muscle memory.",
    "Asynchronous systems introduce non-deterministic behavior."
  ]
};

/* Generate text based on difficulty */
function getTextByDifficulty(level) {
  const pool = DIFFICULTY_TEXTS[level] || DIFFICULTY_TEXTS.Normal;
  return pool[Math.floor(Math.random() * pool.length)];
}
document.getElementById("difficulty").addEventListener("change", () => {
  restartTest();
});
