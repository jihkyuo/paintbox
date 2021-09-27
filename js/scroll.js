const header = document.querySelector(".header");

const FIX = "fixed";

window.addEventListener("scroll", () => {
  //   console.log("scrolly", window.scrollY);
  let scrollY = window.scrollY;
  if (scrollY === 0) {
    header.classList.remove(FIX);
  } else {
    header.classList.add(FIX);
  }
});
