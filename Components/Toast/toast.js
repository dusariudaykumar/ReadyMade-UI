const demoBtn = document.querySelector("#demo-toast");
const toastExample = document.querySelector("#tostExample");
const toastClose = document.querySelector(".toast-close");
const toastDemo = () => {
  toastExample.classList.remove("hide-content");
  setTimeout(() => {
    toastExample.classList.add("hide-content");
  }, 3000);
};
const closeToast = () => {
  toastExample.classList.add("hide-content");
};
toastClose.addEventListener("click", closeToast);
demoBtn.addEventListener("click", toastDemo);
