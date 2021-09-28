const SHOW = "showing";
const SHOW_NAIL = "showingNail";
const ctrlBtn = document.querySelectorAll(".control__item");
const ctrlNailBtn = document.querySelectorAll(".control-nail__item");

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

function NailShowChange(i) {
  let item = document.querySelectorAll(".main__product__nail");
  const currentShow = document.querySelector(".showingNail");
  currentShow.classList.remove(SHOW_NAIL);
  item[i].classList.add(SHOW_NAIL);
  console.log(item);
  console.log(i);
  for (let idx = 0; idx < ctrlNailBtn.length; idx++) {
    ctrlNailBtn[idx].classList.remove("paintBtn");
  }
  ctrlNailBtn[i].classList.add("paintBtn");
}

for (let i = 0; i < ctrlNailBtn.length; i++) {
  ctrlNailBtn[i].addEventListener("click", () => {
    NailShowChange(i);
  });
}
