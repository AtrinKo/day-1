const images = document.querySelectorAll(".img");

// document.addEventListener("click", classHandler);

// function classHandler(event) {
//   for (let key in images) {
//     if (event.target == images[key]) {
//       event.target.classList.add("active");
//       event.target.childNodes[0].classList.add("header-active");
//       for (let key in images) {
//         if (event.target != images[key]) {
//           images[key].classList.remove("active");
//           images[key].childNodes[0].classList.remove("header-active");
//         }
//       }
//     }
//   }
// }

images.forEach((item) => {
  item.addEventListener("click", () => {
    removeClasses();
    item.classList.add("active");
    item.childNodes[0].classList.add("header-active");
  });
});

function removeClasses() {
  images.forEach((item) => {
    item.classList.remove("active");
    item.childNodes[0].classList.remove("header-active");
  });
}
