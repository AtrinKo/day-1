const container = document.querySelector(".container");
const images = document.querySelectorAll(".img");

document.addEventListener("click", classHandler);

function classHandler(event) {
  for (let key in images) {
    if (event.target == images[key]) {
      event.target.classList.add("active");
      event.target.childNodes[0].classList.add("header-active");
      for (let key in images) {
        if (event.target != images[key]) {
          images[key].classList.remove("active");
          images[key].childNodes[0].classList.remove("header-active");
        }
      }
    }
  }
}
