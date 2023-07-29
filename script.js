const email = document.querySelector(".em");
const button = document.querySelector("button");
const text = document.querySelector(".row-4 p");
button.addEventListener("click", checkMail);

function checkMail(ev) {
  let toCheck = email.value;
  if (!toCheck.includes("@")) {
    text.textContent = "Valid email required";
    text.style.color = "red";
    email.setAttribute("class", "em error");
  } else {
    text.style.color = "black";
    text.textContent = "Email address";
    email.setAttribute("class", "em ");
    window.open("./assets/Sucess.html", "_self");
    //for second html page
    let insert = document.querySelector(".insert");
    insert.textContent = toCheck;
  }
}

const button2 = document.querySelector(".button-2");

button2.addEventListener("click", ret);
function ret(ev) {
  window.open("../index.html", "_self");
}
