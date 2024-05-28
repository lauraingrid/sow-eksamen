window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

const faqOpen = document.querySelector("#closed_icon");
const faqClose = document.querySelector("#opened_icon");
const hiddenP = document.querySelector("#faq_p_hidden");

faqOpen.addEventListener("click", removeHide);

function removeHide() {
  console.log("hide removed");
  this.removeEventListener("click", removeHide);

  hiddenP.classList.add("show");
  faqOpen.classList.add("show");
  faqOpen.addEventListener("click", addHide);
}

function addHide() {
  console.log("hide added");
  hiddenP.classList.remove("show");
  hiddenP.offsetLeft;
  faqOpen.addEventListener("click", removeHide);
}
