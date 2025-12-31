const content = document.getElementById("guideContent");
const buttons = document.querySelectorAll(".guide-nav button");

function loadSection(name){
  fetch(`sections/${name}.html`)
    .then(res => res.text())
    .then(html => content.innerHTML = html);
}

buttons.forEach(btn => {
  btn.onclick = () => loadSection(btn.dataset.section);
});

// default
loadSection("intro");
