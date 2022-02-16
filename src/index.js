import "./style.css";
import Marcup from "./js/class";
const { debounce } = require("lodash");

export const input = document.querySelector(".js-input");
export const button = document.querySelector(".js-button");

const exampleOfMarcup = new Marcup();
const createMarcup = () => {
  button.textContent = "Завантажуєм";
  exampleOfMarcup.writeDownMarcup();
};
const deleteMarcup = () => {
  exampleOfMarcup.clearContainer();
};

button.addEventListener("click", createMarcup);
input.addEventListener("input", debounce(deleteMarcup, 500));
