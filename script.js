const email = document.querySelector(".em");
const button = document.querySelector("button");
const text = document.querySelector(".row-4 p");
button.addEventListener("click", checkMail);

function checkMail(ev) {
  if (ev) {
    let toCheck = email.value;
    localStorage.setItem("toInsert", email.value);
    if (!toCheck.includes("@")) {
      text.textContent = "Valid email required";
      text.style.color = "red";
      email.setAttribute("class", "em error");
    } else {
      text.style.color = "black";
      text.textContent = "Email address";
      email.setAttribute("class", "em ");
      window.open("./assets/Sucess.html", "_self");
    }
  }
}

const button2 = document.querySelector(".button-2");
const Insert = document.querySelector(".insert");
let x = localStorage.getItem("toInsert");
Insert.insertAdjacentText("afterend", x);

button2.addEventListener("click", ret);
function ret(ev) {
  if (ev) window.open("../index.html", "_self");
