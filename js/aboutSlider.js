const slides = document.querySelectorAll(".slide1");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active1");
  });
}
function clearActiveClasses() {
  slides.forEach((item, i) => {
    item.classList.remove("active1");
  });
}
