const nave = document.getElementById("nave");
let animada = false;


nave.addEventListener("click", () => {
  nave.classList.add("animar");
});

window.addEventListener("wheel", () => {
    if (!animada) {
      nave.classList.add("animar");
      animada = true;
    }
  }, { once: true });