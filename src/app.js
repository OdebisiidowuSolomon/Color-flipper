const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const main = document.getElementsByTagName("main")[0];
const color = document.getElementsByTagName("span")[0];

let counter = 0;

button.addEventListener("click", random);

function random() {
  let index = Math.floor(Math.random() * colors.length);
  main.style.backgroundColor = colors[index];
  color.innerText = `${colors[index]}`;
}
