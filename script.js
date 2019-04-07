// const p = document.createElement("p");
// p.textContent = "Bonjour";
// container.appendChild(p);

function setDivs(size) {
  const container = document.querySelector(".container");
  let wAndH = 750 / size - 2;
  container.style.cssText = "grid-template: repeat(" + size + ", 1fr) / repeat(" + size + ", 1fr);";
  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++) {
      const div = document.createElement("div");
      div.classList.add("pixel");
      div.style.cssText = "height: " + wAndH + "px; width: " + wAndH + "px;";;
      container.appendChild(div);
    }
  }
  color();
}

function removeColor() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.classList.remove("pixeled"));
}

setDivs(16);

function color() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.addEventListener("mouseover", function(e) {
    pixel.classList.add("pixeled");
  }));
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", removeColor);

const delete = document.querySelector(".del");
del.addEventListener("click", function() {
  let size = prompt("How many squares per side do you want?");
  if (size) {
    const container = document.querySelector(".container");
    const grid = document.querySelectorAll(".pixel");
    grid.forEach(pixel => container.removeChild(pixel));
    setDivs(size);
  } else {
    return;
  }
});
