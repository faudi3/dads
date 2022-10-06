const container1 = document.querySelector(".Beforecontainer");
document.querySelector(".Beforeslider").addEventListener("input", (e) => {
  container1.style.setProperty("--position", `${e.target.value}%`);
});
