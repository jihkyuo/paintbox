const SHOW = "showing";
const ctrlBtn = document.querySelectorAll(".control__item");

function showChange(i) {
  let item = document.querySelectorAll(".main__product");
  const currentShow = document.querySelector(".showing");
  currentShow.classList.remove(SHOW);
  item[i].classList.add(SHOW);
  console.log(item);
  console.log(i);
  for (let idx = 0; idx < ctrlBtn.length; idx++) {
    ctrlBtn[idx].classList.remove("paintBtn");
  }
  ctrlBtn[i].classList.add("paintBtn");
}

for (let i = 0; i < ctrlBtn.length; i++) {
  ctrlBtn[i].addEventListener("click", () => {
    showChange(i);
  });
}
