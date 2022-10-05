window.addEventListener("scroll", () => {
  let contentBig = document.querySelectorAll(".row");
  contentBig.forEach((item) => {
    let contentPosition = item.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      item.classList.add("activefade");
    } else {
      item.classList.remove("activefade");
    }
  });
});
