const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll(".examples__block").length;
const slides1 = document.querySelectorAll(".examples__block");
let player = document.querySelector(".vid");
let descrip = document.querySelectorAll(".sidebar div");

descrip[9].style.display = "block";
setTimeout(() => {
  console.log(slides1);
}, 1000);

if (container.clientWidth > 1000) {
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
} else {
  sidebar.style.top = 0;
}

let activeSlideIdx = 0;
let activeDesc = 9;

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
  if (container.clientWidth < 1000) {
    if (direction === "up") {
      if (activeSlideIdx !== slidesCount - 1) {
        slides1[activeSlideIdx].classList.remove("activeHor");
        slides1[activeSlideIdx + 1].classList.add("activeHor");

        console.log(
          activeSlideIdx,
          activeDesc,
          descrip[activeDesc],
          descrip[activeDesc - 1]
        );
        descrip[activeDesc].style.display = "none";
        descrip[activeDesc - 1].style.display = "block";
        activeSlideIdx++;
        activeDesc--;
      } else {
        descrip[activeDesc].style.display = "none";
        slides1[activeSlideIdx].classList.remove("activeHor");

        activeSlideIdx = 0;
        activeDesc = 9;
        slides1[activeSlideIdx].classList.add("activeHor");
        descrip[activeDesc].style.display = "block";
      }
    } else {
      if (activeSlideIdx !== slidesCount - 1) {
        slides1[activeSlideIdx].classList.remove("activeHor");
        slides1[activeSlideIdx + 1].classList.add("activeHor");

        descrip[activeDesc].style.display = "none";
        descrip[activeDesc - 1].style.display = "block";
        activeSlideIdx++;
        activeDesc--;
      } else {
        descrip[activeDesc].style.display = "none";
        slides1[activeSlideIdx].classList.remove("activeHor");

        activeSlideIdx = 0;
        activeDesc = 9;
        slides1[activeSlideIdx].classList.add("activeHor");
        descrip[activeDesc].style.display = "block";
      }
    }
  } else {
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
}
//for stopping vid

// let SliderLists = document.querySelectorAll(".examples__block");
// SliderLists.forEach((item, ind) => {
//   let player = item.querySelector(".vid");
//   upBtn.addEventListener("click", () => {
//     changeSlide("up");
//     player.contentWindow.postMessage(
//       '{"event":"command","func":"pauseVideo","args":""}',
//       "*"
//     );
//   });
//
//   downBtn.addEventListener("click", () => {
//     changeSlide("down");
//     player.contentWindow.postMessage(
//       '{"event":"command","func":"pauseVideo","args":""}',
//       "*"
//     );
//   });
// });
