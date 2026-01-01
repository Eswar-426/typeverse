
/* ================== CUSTOM USER INPUT ENGINE ================== */

let customPracticeText = null;
let customTestTime = null;

/* Set user text */
function setCustomText(text) {
  customPracticeText = text.trim() || null;
}

/* Set custom time (seconds) */
function setCustomTime(seconds) {
  const value = Number(seconds);
  customTestTime = value > 5 ? value : null;
}

/* Get final text */
function resolveTestText(difficulty) {
  return customPracticeText || getTextByDifficulty(difficulty);
}

/* Get final time */
function resolveTestTime(defaultTime) {
  return customTestTime || defaultTime;
}
function restartTest() {
  clearInterval(timer);
  input.value = "";
  input.disabled = false;

  startTime = null;
  errors = 0;
  keyErrors = {};

  timeLeft = resolveTestTime(+duration.value);
  time.textContent = timeLeft;

  results.style.display = "none";
  loadText();
}
