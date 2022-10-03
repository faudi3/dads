const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll(".examples__block").length;

let player = document.querySelector(".vid");

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIdx = 0;

upBtn.addEventListener("click", () => {
  changeSlide("up");

  player.contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    "*"
  );
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
  player.contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    "*"
  );
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIdx++;
    if (activeSlideIdx === slidesCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === "down") {
    activeSlideIdx--;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
}
