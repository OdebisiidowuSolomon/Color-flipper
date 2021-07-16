const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const main = document.getElementsByTagName("main")[0];
const color = document.getElementsByTagName("span")[0];

let counter = 0;

button.addEventListener("click", random);

function random() {
  let hex_index = () => Math.floor(Math.random() * hex.length);

  let create = () => `${hex[hex_index()]}${hex[hex_index()]}`;

  const red = `${create()}`;
  const blue = `${create()}`;
  const green = `${create()}`;

  hexcolor = red + blue + green;

  main.style.backgroundColor = `#${hexcolor}`;
  color.innerText = `#${hexcolor}`;
}
