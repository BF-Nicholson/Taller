const nave = document.getElementById("nave");
let posX = 500;
const objetivoX = 700;
let animandoAuto = true;

let animada = false;



function animar() {
  if (animandoAuto) {
    if (posX < objetivoX) {
      posY -= 2;
      nave.style.transform = `translate(${posX}px)`;
      requestAnimationFrame(animar);
    } else {
      animandoAuto = false;
      nave.style.position = "fixed";
      nave.style.top = objetivoX + "px";
    }
  }
}

document.addEventListener("wheel", (e) => {
  if (!animandoAuto) {
    let topActual = parseInt(nave.style.top);
    topActual -= e.deltaY;

    if (topActual < 0) topActual = 0;
    if (topActual > window.innerHeight - 50) topActual = windowinnerHeight - 50;
    caja.style.top = topActual + "px";
  }
}
);

animar();

/* nave.addEventListener("click", () => {
  nave.classList.add("animar");
});

window.addEventListener("wheel", () => {
    if (!animada) {
      nave.classList.add("animar");
      animada = true;
    }
  }, { once: true }); */