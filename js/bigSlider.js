(function () {
  let SliderLists = document.querySelectorAll(".examples__block");

  SliderLists.forEach((item, ind) => {
    const prev = item.querySelector(".btn-prev");
    const next = item.querySelector(".btn-next");
    const slides = item.querySelectorAll(".slide");
    const dots = item.querySelectorAll(".dot");
    let player = item.querySelector(".vid");

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
      if (player) {
        player.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
      if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
      } else {
        index++;
        prepareCurrentSlide(index);
      }
    };

    const prevSlide = () => {
      if (player) {
        player.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
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
        if (player) {
          player.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
        index = indexDot;
        prepareCurrentSlide(index);
      });
    });
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  });
})();

document.documentElement.style.setProperty("--animate-duration", "1.5s");
