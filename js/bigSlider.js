(function () {
  let SliderLists = document.querySelectorAll(".examples__block");
  console.log(SliderLists);
  SliderLists.forEach((item, ind) => {
    const prev = item.querySelector(".btn-prev");
    const next = item.querySelector(".btn-next");
    const slides = item.querySelectorAll(".slide");
    const dots = item.querySelectorAll(".dot");
    let index = 0;
    const activeSlide = (n) => {
      for (slide of slides) {
        slide.classList.remove("active");
      }
      slides[n].classList.add("active");
    };
    const activeDot = (n) => {
      for (dot of dots) {
        dot.classList.remove("active");
      }
      dots[n].classList.add("active");
    };
    const prepareCurrentSlide = (ind) => {
      activeDot(ind);
      activeSlide(ind);
    };
    const nextSlide = () => {
      if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
      } else {
        index++;
        prepareCurrentSlide(index);
      }
    };

    const prevSlide = () => {
      if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
      } else {
        index--;
        prepareCurrentSlide(index);
      }
    };
    dots.forEach((item, indexDot) => {
      item.addEventListener("click", () => {
        index = indexDot;
        prepareCurrentSlide(index);
      });
    });
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  });
})();

document.documentElement.style.setProperty("--animate-duration", "1.5s");
