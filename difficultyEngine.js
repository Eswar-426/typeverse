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
  // Simple focus words
  "focus.",
  "breathe.",
  "calm.",
  "steady.",
  "smooth.",
  "balance.",
  // Short motivating lines
  "stay relaxed and keep going.",
  "slow typing builds strong accuracy.",
  "every key press matters.",
  "calm mind types better.",
  "accuracy before speed.",
  // Friendly sentences
  "Typing is a skill anyone can master.",
  "Small progress every day creates big change.",
  "Your hands learn faster when your mind is calm.",

  // Short paragraph (still easy)
  "Typing is not about rushing. It is about control, rhythm, and confidence. Relax your shoulders and let your fingers flow naturally."
],


  Normal: [
  // Reality-based motivation
  "Consistency beats motivation every time.",
  "Skill grows when practice becomes routine.",
  "Discipline creates freedom.",
  "Progress is invisible until it compounds.",

  // Focus sentences
  "Typing accuracy improves when you stay mentally present.",
  "Speed is a side effect of correct repetition.",
  "Daily practice trains both mind and muscle memory.",

  // Popular reality-style quotes
  "You do not rise to the level of your goals, you fall to the level of your systems.",
  "Hard work done quietly builds unstoppable confidence.",

  // Medium paragraph
  "Typing is a mirror of your focus. When your mind wanders, mistakes appear. When attention sharpens, speed follows naturally with accuracy and control."
],
Hard: [
  // Advanced vocabulary (cognitive load)
  "meticulous",
  "resilience",
  "conscientious",
  "optimization",
  "synchronization",
  "abstraction",
  // Reality-driven lines
  "Focus breaks before fingers do.",
  "Mental fatigue reveals true discipline.",
  "Accuracy under pressure defines skill.",
  // Popular tech / reality quotes
  "The best professionals perform well even on bad days.",
  "Pressure does not create mistakes, it reveals habits.",
  // Long sentences
  "Programming and typing share the same rule, precision matters more than speed when systems become complex.",

  // Paragraph (challenging)
  "When tasks become difficult, most people rush. Skilled individuals slow down, maintain accuracy, and trust their training. This is where real improvement happens."
],

  Extreme: [
  // Cognitive stress lines
  "Distraction is the enemy of mastery.",
  "Deep focus feels uncomfortable before it feels powerful.",

  // Symbol-heavy typing
  "!@#$%^&*()_+=-{}[]<>?\n",
  "const data = users.filter(u => u.isActive && u.score > 80); ",
  "for(let i=0;i<n;i++){ total += values[i] * factor; } ",
  "if(system.ready && user.authorized){ execute(); }\n",

  // Reality-based tech thoughts
  "Real systems fail in unpredictable ways, focus prevents cascading errors.",

  // Long paragraph (maximum endurance)
  "In real-world environments, distractions are constant and time pressure is unavoidable. Mastery is the ability to remain calm, accurate, and deliberate while everything around you demands speed."
]


};

/* Generate text based on difficulty */
/* ================== TEXT LENGTH CONFIG ================== */
const TEXT_LENGTH_BY_TIME = {
  15: 120,
  30: 250,
  60: 500,
  120: 900,
  300: 2000,
  600: 3500
};

/* ================== TEXT GENERATOR ================== */
function getTextByDifficulty(level, duration) {
  const pool = DIFFICULTY_TEXTS[level] || DIFFICULTY_TEXTS.Normal;
  const targetLength = TEXT_LENGTH_BY_TIME[duration] || 500;

  let output = "";
  let lastSentence = "";

  while (output.length < targetLength) {
    let sentence = pool[Math.floor(Math.random() * pool.length)];

    // avoid repeating same sentence twice in a row
    if (sentence === lastSentence) continue;

    output += sentence + (Math.random() > 0.55 ? "\n" : " ");
    lastSentence = sentence;
  }

  return output.trim();
}

