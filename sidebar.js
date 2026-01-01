window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (!menuBtn || !sidebar) {
    console.error("Sidebar elements missing");
    return;
  }

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    sidebar.classList.toggle("open");
    console.log("Sidebar toggled");
  });

  document.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
